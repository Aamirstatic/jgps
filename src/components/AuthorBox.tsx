import React from 'react';
import Image from '@/components/LazyImage';
import Link from 'next/link';

interface AuthorBoxProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  slug?: string;
}

export default function AuthorBox({ name, role, bio, imageUrl, slug }: AuthorBoxProps) {
  // Use a professional placeholder if no image is provided
  const avatarSrc = imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=035c00&color=fff&size=150`;

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
      <div className="flex-shrink-0">
        <Image 
          src={avatarSrc} 
          alt={name} 
          width={80} 
          height={80} 
          className="rounded-full object-cover border-2 border-[#035c00]/20"
          unoptimized={!imageUrl} 
        />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-bold text-gray-900 m-0">{name}</h3>
        <p className="text-sm font-semibold text-[#035c00] mt-1 mb-2">{role}</p>
        <p className="text-sm text-gray-600 m-0 leading-relaxed mb-4">
          {bio}
        </p>
        {slug && (
          <Link 
            href={`/author/${slug}`} 
            className="inline-block bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00] hover:text-white text-xs font-bold py-1.5 px-4 rounded-lg transition-colors"
          >
            View Full Profile
          </Link>
        )}
      </div>
    </div>
  );
}
