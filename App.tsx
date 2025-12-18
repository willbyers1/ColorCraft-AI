
import React, { useState, useEffect } from 'react';
import { AppState, Language, ColoringPageParams } from './types';
import { TRANSLATIONS } from './constants';
import ApiKeyModal from './components/ApiKeyModal';
import LanguageSelector from './components/LanguageSelector';
import GeneratorForm from './components/GeneratorForm';
import ImageGallery from './components/ImageGallery';
import { generateColoringPage } from './services/geminiService';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    apiKey: sessionStorage.getItem('gemini_api_key'),
    language: 'en',
    images: JSON.parse(localStorage.getItem('colorcraft_history') || '[]'),
    isGenerating: false,
    error: null,
  });

  const t = TRANSLATIONS[state.language];

  useEffect(() => {
    localStorage.setItem('colorcraft_history', JSON.stringify(state.images));
  }, [state.images]);

  const handleApiKeySuccess = (key: string) => {
    sessionStorage.setItem('gemini_api_key', key);
    setState(prev => ({ ...prev, apiKey: key, error: null }));
  };

  const handleLanguageChange = (language: Language) => {
    setState(prev => ({ ...prev, language }));
  };

  const handleGenerate = async (params: ColoringPageParams) => {
    if (!state.apiKey) return;

    setState(prev => ({ ...prev, isGenerating: true, error: null }));
    
    try {
      const results = [];
      for (let i = 0; i < params.pageCount; i++) {
        const adjustedParams = {
          ...params,
          theme: `${params.theme} ${i > 0 ? `variation ${i + 1}` : ''}`
        };
        const newImage = await generateColoringPage(state.apiKey, adjustedParams);
        results.push(newImage);
      }

      setState(prev => ({
        ...prev,
        images: [...results, ...prev.images].slice(0, 50),
        isGenerating: false
      }));
    } catch (err: any) {
      console.error(err);
      let errorMessage = t.errorGeneric;
      if (err.message?.includes('401') || err.message?.includes('API_KEY_INVALID')) {
        errorMessage = t.errorInvalidKey;
      }
      setState(prev => ({ ...prev, error: errorMessage, isGenerating: false }));
    }
  };

  const clearHistory = () => {
    if (confirm('Are you sure you want to clear your local history?')) {
      setState(prev => ({ ...prev, images: [] }));
      localStorage.removeItem('colorcraft_history');
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-violet-500/30">
      {!state.apiKey && (
        <ApiKeyModal 
          language={state.language} 
          onSuccess={handleApiKeySuccess} 
        />
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-zinc-900/50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-lg">
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-[0.3em] uppercase leading-none">
                {t.title}
              </h1>
              <p className="hidden sm:block text-[9px] font-semibold text-zinc-500 uppercase tracking-[0.2em] mt-1">
                {t.subtitle}
              </p>
            </div>
          </div>

          <LanguageSelector 
            currentLanguage={state.language} 
            onLanguageChange={handleLanguageChange} 
          />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-24">
        {state.error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center animate-in fade-in zoom-in-95">
            {state.error}
          </div>
        )}

        {/* Form Section */}
        <section className="relative">
          <GeneratorForm 
            language={state.language} 
            onGenerate={handleGenerate} 
            isLoading={state.isGenerating} 
          />
        </section>

        {/* Gallery Section */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <div className="space-y-1">
              <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em]">
                Local Repository
              </h3>
              <p className="text-xs font-medium text-zinc-300">Generated Assets</p>
            </div>
            {state.images.length > 0 && (
              <button 
                onClick={clearHistory}
                className="text-[10px] font-bold text-zinc-600 hover:text-red-400 transition-colors uppercase tracking-widest flex items-center gap-2"
              >
                Clear All
              </button>
            )}
          </div>
          
          <ImageGallery 
            language={state.language} 
            images={state.images} 
          />
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900/50">
        <div className="text-center">
          <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} Modernist AI Imaging Systems
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
