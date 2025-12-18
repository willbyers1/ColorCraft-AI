
export type Language = 'en' | 'tr' | 'hi' | 'es' | 'zh';

export enum AgeGroup {
  SIMPLE = '3-5 Years',
  MODERATE = '5-7 Years',
  STORY = '7-10 Years',
  COMPLEX = '10+ Years'
}

export interface ColoringPageParams {
  name: string;
  ageGroup: AgeGroup;
  theme: string;
  pageCount: number;
  photo?: string; // Base64
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface AppState {
  apiKey: string | null;
  language: Language;
  images: GeneratedImage[];
  isGenerating: boolean;
  error: string | null;
}

export interface Translation {
  title: string;
  subtitle: string;
  apiKeyLabel: string;
  apiKeyPlaceholder: string;
  apiKeySubmit: string;
  apiKeyHelp: string;
  nameLabel: string;
  ageLabel: string;
  themeLabel: string;
  pageCountLabel: string;
  photoLabel: string;
  generateBtn: string;
  generating: string;
  download: string;
  noImages: string;
  errorInvalidKey: string;
  errorGeneric: string;
  ageGroups: { [key in AgeGroup]: string };
}
