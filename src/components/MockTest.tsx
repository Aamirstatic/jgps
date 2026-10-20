"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  mockQuestions,
  SECTIONS,
  MOCK_TEST_DURATION_MINUTES,
  getScoreBand,
} from "@/data/mock-test-questions";

type Stage = "intro" | "quiz" | "result";

const TOTAL = mockQuestions.length;
const TOTAL_SECONDS = MOCK_TEST_DURATION_MINUTES * 60;

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function MockTest() {
  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(TOTAL).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const answeredCount = answers.filter((a) => a !== null).length;

  const submit = () => {
    setSubmitted(true);
    setStage("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (stage !== "quiz") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setSubmitted(true);
          setStage("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stage]);

  const score = useMemo(
    () =>
      mockQuestions.reduce(
        (acc, q, i) => (answers[i] === q.answer ? acc + 1 : acc),
        0
      ),
    [answers]
  );

  const sectionScores = useMemo(() => {
    return SECTIONS.map((section) => {
      const qs = mockQuestions
        .map((q, i) => ({ q, i }))
        .filter(({ q }) => q.section === section);
      const correct = qs.filter(({ q, i }) => answers[i] === q.answer).length;
      return { section, correct, total: qs.length };
    });
  }, [answers]);

  const percent = Math.round((score / TOTAL) * 100);
  const band = getScoreBand(percent);
  const whatsappText = encodeURIComponent(
    `Namaste, I attempted the free Class 6 entrance mock test on jgps.in and scored ${score}/${TOTAL}. I want free counselling for entrance coaching.`
  );

  const handleSubmitClick = () => {
    if (answeredCount < TOTAL) {
      const ok = window.confirm(
        `You have answered ${answeredCount} of ${TOTAL} questions. Submit the test now?`
      );
      if (!ok) return;
    }
    submit();
  };

  const retake = () => {
    setAnswers(Array(TOTAL).fill(null));
    setCurrent(0);
    setTimeLeft(TOTAL_SECONDS);
    setSubmitted(false);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ---------------- INTRO ----------------
  if (stage === "intro") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-150 overflow-hidden">
        <div className="bg-[#035c00] px-6 py-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Free Class 6 Entrance Mock Test
          </h2>
          <p className="text-green-100 text-sm md:text-base max-w-xl mx-auto">
            Based on the real entrance pattern (AMU / JMI / Navodaya style) — check
            your preparation level in under an hour.
          </p>
        </div>
        <div className="px-6 py-8">
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center mb-8">
            <div className="bg-gray-50 rounded-xl py-4 border border-gray-100">
              <p className="text-2xl font-extrabold text-[#035c00]">{TOTAL}</p>
              <p className="text-xs text-gray-500 font-medium">Questions</p>
            </div>
            <div className="bg-gray-50 rounded-xl py-4 border border-gray-100">
              <p className="text-2xl font-extrabold text-[#035c00]">
                {MOCK_TEST_DURATION_MINUTES} min
              </p>
              <p className="text-xs text-gray-500 font-medium">Time Limit</p>
            </div>
            <div className="bg-gray-50 rounded-xl py-4 border border-gray-100">
              <p className="text-2xl font-extrabold text-[#035c00]">3</p>
              <p className="text-xs text-gray-500 font-medium">
                Sections: Maths, EVS, English
              </p>
            </div>
          </div>
          <ul className="max-w-lg mx-auto space-y-2 text-sm text-gray-600 mb-8">
            <li>✓ NCERT Class 5 level questions — the base of the real entrance tests.</li>
            <li>✓ Instant result with section-wise score and answer explanations.</li>
            <li>✓ 100% free — no registration, no fees, no negative marking.</li>
          </ul>
          <div className="text-center">
            <button
              onClick={() => setStage("quiz")}
              className="px-8 py-3.5 bg-[#035c00] hover:bg-[#024700] text-white font-bold rounded-xl text-base transition-all shadow-sm hover:shadow-md"
            >
              Start the Free Test →
            </button>
            <p className="text-xs text-gray-400 mt-3">
              Timer starts as soon as you click. Best of luck!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- RESULT ----------------
  if (stage === "result") {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-150 overflow-hidden">
          <div className="bg-[#035c00] px-6 py-8 text-center">
            <p className="text-green-200 text-xs font-bold uppercase tracking-widest mb-2">
              Your Result
            </p>
            <p className="text-5xl font-extrabold text-white mb-1">
              {score}
              <span className="text-2xl text-green-200"> / {TOTAL}</span>
            </p>
            <p className="text-yellow-300 font-bold text-lg">{percent}%</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-3">
              {band.title}
            </h2>
            <p className="text-green-100 text-sm max-w-xl mx-auto mt-2">
              {band.message}
            </p>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              {sectionScores.map((s) => (
                <div
                  key={s.section}
                  className="bg-gray-50 rounded-xl py-4 px-3 border border-gray-100 text-center"
                >
                  <p className="text-sm font-bold text-gray-800">{s.section}</p>
                  <p className="text-2xl font-extrabold text-[#035c00]">
                    {s.correct}
                    <span className="text-sm text-gray-400"> / {s.total}</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#035c00] h-2 rounded-full"
                      style={{ width: `${(s.correct / s.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#035c00]/5 border border-[#035c00]/15 rounded-2xl p-6 text-center max-w-2xl mx-auto">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Want a full preparation plan for your child?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                JGPS runs dedicated entrance coaching batches for AMU, JMI, Sainik
                School, RMS and Navodaya. Talk to us for free counselling.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+919997161490"
                  className="px-6 py-3 bg-[#035c00] hover:bg-[#024700] text-white font-bold rounded-xl text-sm transition-colors"
                >
                  📞 Call +91 99971 61490
                </a>
                <a
                  href={`https://wa.me/919997161490?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#1fb857] text-white font-bold rounded-xl text-sm transition-colors"
                >
                  💬 Get Counselling on WhatsApp
                </a>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={retake}
                className="px-6 py-2.5 border-2 border-[#035c00] text-[#035c00] font-bold rounded-xl text-sm hover:bg-[#035c00] hover:text-white transition-colors"
              >
                ↻ Retake the Test
              </button>
            </div>
          </div>
        </div>

        {/* Answer review */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6">
          <h3 className="font-bold text-gray-900 text-lg mb-4">
            Review Your Answers
          </h3>
          <div className="space-y-4">
            {mockQuestions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.answer;
              return (
                <div
                  key={q.id}
                  className={`border rounded-xl p-4 ${
                    isCorrect
                      ? "border-green-200 bg-green-50/50"
                      : "border-red-200 bg-red-50/50"
                  }`}
                >
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                    Q{i + 1} · {q.section} ·{" "}
                    {isCorrect ? "✅ Correct" : "❌ Incorrect"}
                  </p>
                  <p className="font-semibold text-gray-900 mb-2">{q.question}</p>
                  <p className="text-sm text-gray-700">
                    Your answer:{" "}
                    <span className="font-semibold">
                      {userAnswer === null
                        ? "Not attempted"
                        : q.options[userAnswer]}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-gray-700">
                      Correct answer:{" "}
                      <span className="font-semibold text-[#035c00]">
                        {q.options[q.answer]}
                      </span>
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ---------------- QUIZ ----------------
  const q = mockQuestions[current];
  const progress = ((current + 1) / TOTAL) * 100;
  const lowTime = timeLeft <= 300;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-150 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <p className="text-sm font-bold text-gray-700">
            Question {current + 1} of {TOTAL}
            <span className="text-gray-400 font-medium">
              {" "}
              · {answeredCount} answered
            </span>
          </p>
          <p
            className={`text-sm font-extrabold px-3 py-1 rounded-full ${
              lowTime
                ? "bg-red-100 text-red-700"
                : "bg-[#035c00]/10 text-[#035c00]"
            }`}
          >
            ⏱ {formatTime(timeLeft)}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#035c00] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="px-6 py-6">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#035c00] bg-[#035c00]/10 px-3 py-1 rounded-full mb-3">
          {q.section}
        </span>
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-5">
          {q.question}
        </h2>
        <div className="space-y-3">
          {q.options.map((option, idx) => {
            const selected = answers[current] === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  const next = [...answers];
                  next[current] = idx;
                  setAnswers(next);
                }}
                className={`w-full text-left px-5 py-3.5 rounded-xl border-2 font-medium transition-all ${
                  selected
                    ? "border-[#035c00] bg-[#035c00]/5 text-gray-900"
                    : "border-gray-200 hover:border-[#035c00]/40 text-gray-700"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 ${
                    selected
                      ? "bg-[#035c00] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-8 flex-wrap gap-3">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-bold text-sm disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            ← Previous
          </button>
          {current < TOTAL - 1 ? (
            <button
              onClick={() => setCurrent((c) => Math.min(TOTAL - 1, c + 1))}
              className="px-5 py-2.5 rounded-xl bg-[#035c00] hover:bg-[#024700] text-white font-bold text-sm transition-colors"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmitClick}
              className="px-6 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm transition-colors"
            >
              Submit Test ✓
            </button>
          )}
        </div>
        {current < TOTAL - 1 && (
          <div className="text-center mt-4">
            <button
              onClick={handleSubmitClick}
              className="text-sm font-semibold text-gray-400 hover:text-[#035c00] underline underline-offset-2"
            >
              Finish and submit now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
