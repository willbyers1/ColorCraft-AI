
import React, { useState } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ApiKeyModalProps {
  language: Language;
  onSuccess: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ language, onSuccess }) => {
  const [key, setKey] = useState('');
  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSuccess(key.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-3xl p-6">
      <div className="w-full max-w-sm space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">
              System Access
            </h2>
            <p className="text-sm font-medium text-zinc-100">{t.apiKeyLabel}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            autoFocus
            onChange={(e) => setKey(e.target.value)}
            placeholder={t.apiKeyPlaceholder}
            className="modern-input w-full py-4 px-5 text-center text-sm font-mono tracking-widest placeholder:text-zinc-700 placeholder:tracking-normal placeholder:font-sans"
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-zinc-200 transition-all shadow-xl"
          >
            {t.apiKeySubmit}
          </button>
        </form>

        <p className="text-center">
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            {t.apiKeyHelp}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ApiKeyModal;
