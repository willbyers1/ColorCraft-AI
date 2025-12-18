
import React, { useState, useRef } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language, AgeGroup, ColoringPageParams } from '../types';

interface GeneratorFormProps {
  language: Language;
  onGenerate: (params: ColoringPageParams) => void;
  isLoading: boolean;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ language, onGenerate, isLoading }) => {
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(AgeGroup.SIMPLE);
  const [theme, setTheme] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [photo, setPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = TRANSLATIONS[language];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      name,
      ageGroup,
      theme,
      pageCount,
      photo: photo || undefined
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Child's Name */}
          <div className="space-y-2">
            <label className="modern-label block">
              {t.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Leo"
              className="modern-input w-full py-3 px-4 text-sm"
            />
          </div>

          {/* Age Group */}
          <div className="space-y-2">
            <label className="modern-label block">
              {t.ageLabel}
            </label>
            <div className="relative">
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                className="modern-input w-full py-3 px-4 text-sm appearance-none cursor-pointer"
              >
                {Object.values(AgeGroup).map((age) => (
                  <option key={age} value={age}>
                    {t.ageGroups[age]}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Theme */}
        <div className="space-y-2">
          <label className="modern-label block">
            {t.themeLabel}
          </label>
          <input
            type="text"
            required
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="e.g. Astronauts on Mars, Unicorn in Space"
            className="modern-input w-full py-3 px-4 text-sm"
          />
        </div>

        {/* Page Count Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="modern-label">
              {t.pageCountLabel}
            </label>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
              {pageCount} Pages
            </span>
          </div>
          <div className="relative group">
            <input
              type="range"
              min="1"
              max="15"
              value={pageCount}
              onChange={(e) => setPageCount(parseInt(e.target.value))}
              className="w-full"
            />
            {/* Minimal decoration for slider ends */}
            <div className="absolute -bottom-2 left-0 w-1 h-1 rounded-full bg-slate-800"></div>
            <div className="absolute -bottom-2 right-0 w-1 h-1 rounded-full bg-slate-800"></div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="space-y-2">
          <label className="modern-label block">
            {t.photoLabel}
          </label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`border border-dashed border-zinc-800 rounded-xl p-6 transition-all cursor-pointer hover:border-violet-500/50 hover:bg-zinc-900/30 group relative overflow-hidden flex flex-col items-center justify-center h-32 ${photo ? 'bg-zinc-900/50' : 'bg-transparent'}`}
          >
            {photo ? (
              <div className="relative flex items-center gap-4">
                <img src={photo} alt="Preview" className="h-20 w-20 object-cover rounded-lg shadow-2xl border border-zinc-700" />
                <div className="text-left">
                   <p className="text-[10px] text-violet-400 font-bold uppercase tracking-wider mb-1">Subject Loaded</p>
                   <p className="text-xs text-zinc-500">Click to replace photo</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 text-zinc-600 group-hover:text-violet-500 transition-colors mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-zinc-500">Drop image or click to browse</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl ${
            isLoading 
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
              : 'bg-white text-black hover:bg-violet-100'
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.generating}
            </>
          ) : (
            <>
              {t.generateBtn}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GeneratorForm;
