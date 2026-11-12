'use client';

import { useState, useEffect } from 'react';

// PASSCODE for /docs — change this value to change the passcode.
// NOTE: this is a static site, so the passcode lives in the page code and
// only hides the file list from casual visitors. It does NOT encrypt the
// PDFs: anyone who knows a PDF's exact filename can open it directly.
// For real protection use Cloudflare Access on /docs/* instead.
const DOCS_PASSCODE = '8055';

type DocFile = { title: string; file: string; added?: string; folder?: string };

const groupsOf = (files: DocFile[]) =>
  files.reduce<Record<string, DocFile[]>>((acc, f) => {
    const key = f.folder || 'Documents';
    (acc[key] = acc[key] || []).push(f);
    return acc;
  }, {});

export default function DocsGate() {
  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [files, setFiles] = useState<DocFile[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('jgps-docs-unlocked') === '1') setUnlocked(true);
    } catch {
      // sessionStorage unavailable — ask for the passcode each visit
    }
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    setLoading(true);
    fetch('/docs/manifest.json')
      .then((r) => r.json())
      .then((d) => setFiles(Array.isArray(d.files) ? d.files : []))
      .catch(() => setFiles([]))
      .finally(() => setLoading(false));
  }, [unlocked]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim() === DOCS_PASSCODE) {
      try {
        sessionStorage.setItem('jgps-docs-unlocked', '1');
      } catch {
        // ignore
      }
      setUnlocked(true);
      setError('');
    } else {
      setError('Incorrect passcode. Please try again.');
    }
  }

  function lock() {
    try {
      sessionStorage.removeItem('jgps-docs-unlocked');
    } catch {
      // ignore
    }
    setUnlocked(false);
    setCode('');
  }

  return (
    <main className="min-h-[70vh] bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#035c00]/10 text-[#035c00]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Private Documents</h1>
              <p className="text-sm text-gray-500">Jai Govind Public School, Joya, Amroha</p>
            </div>
          </div>

          {!unlocked ? (
            <form onSubmit={submit} className="mt-6">
              <label htmlFor="docs-passcode" className="mb-2 block text-sm font-medium text-gray-700">
                Enter passcode to view documents
              </label>
              <input
                id="docs-passcode"
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Passcode"
                autoComplete="off"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none focus:border-[#035c00] focus:ring-2 focus:ring-[#035c00]/20"
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-[#035c00] px-4 py-2.5 font-semibold text-white transition hover:bg-[#024a00]"
              >
                Unlock
              </button>
              <p className="mt-4 text-xs leading-relaxed text-gray-400">
                These documents are not indexed by search engines and are not
                listed anywhere on the public site.
              </p>
            </form>
          ) : (
            <div className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
                <button
                  onClick={lock}
                  className="text-sm font-medium text-[#035c00] underline underline-offset-2 hover:text-[#024a00]"
                >
                  Lock
                </button>
              </div>
              {loading ? (
                <p className="text-sm text-gray-500">Loading documents…</p>
              ) : files.length === 0 ? (
                <p className="rounded-lg bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
                  No documents have been uploaded yet.
                </p>
              ) : (
                Object.entries(groupsOf(files)).map(([folder, docs]) => (
                  <div key={folder} className="mb-6 last:mb-0">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      {folder} ({docs.length})
                    </h3>
                    <ul className="divide-y divide-gray-100">
                      {docs.map((f) => (
                        <li key={f.file} className="flex items-center justify-between gap-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{f.title}</p>
                            {f.added && <p className="text-xs text-gray-400">Added {f.added}</p>}
                          </div>
                          <a
                            href={`/docs/${f.file.split('/').map(encodeURIComponent).join('/')}`}
                            download
                            className="shrink-0 rounded-lg bg-[#035c00]/10 px-3 py-1.5 text-sm font-semibold text-[#035c00] hover:bg-[#035c00]/20"
                          >
                            Download PDF
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
