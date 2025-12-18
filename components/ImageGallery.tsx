
import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language, GeneratedImage } from '../types';

interface ImageGalleryProps {
  language: Language;
  images: GeneratedImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ language, images }) => {
  const t = TRANSLATIONS[language];

  const handleDownload = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${filename.replace(/\s+/g, '-').toLowerCase()}-coloring-page.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl">
        <svg className="w-16 h-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="font-mono text-sm tracking-wider uppercase">{t.noImages}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((img) => (
        <div key={img.id} className="glass-card rounded-2xl overflow-hidden group border border-slate-700/50 hover:border-violet-500/50 transition-all shadow-xl hover:shadow-violet-500/10">
          <div className="relative aspect-square bg-white">
            <img 
              src={img.url} 
              alt={img.prompt} 
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <button 
                 onClick={() => handleDownload(img.url, img.prompt)}
                 className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold shadow-xl hover:bg-violet-500 hover:text-white transition-all flex items-center gap-2"
               >
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                 </svg>
                 {t.download}
               </button>
            </div>
          </div>
          <div className="p-4 bg-slate-900/50 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-tighter mb-1">Generated Artifact</h4>
            <p className="text-sm font-semibold truncate text-slate-200">#{img.prompt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
