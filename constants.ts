
import { Translation, AgeGroup, Language } from './types';

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    title: 'ColorCraft AI',
    subtitle: 'Cybernetic Creative Studio for Kids',
    apiKeyLabel: 'Enter Gemini API Key',
    apiKeyPlaceholder: 'Paster Your API Key',
    apiKeySubmit: 'Initialize System',
    apiKeyHelp: 'Need a key? Visit Google AI Studio',
    nameLabel: "Child's Name",
    ageLabel: 'Skill Level (Age Group)',
    themeLabel: 'Adventure Theme',
    pageCountLabel: 'Page Quantity',
    photoLabel: 'Reference Subject (Optional Photo)',
    generateBtn: 'Execute Compilation',
    generating: 'Generating Artifacts...',
    download: 'Export PNG',
    noImages: 'No artifacts generated yet. Awaiting command...',
    errorInvalidKey: 'Critical Error: Unauthorized API Access.',
    errorGeneric: 'Unexpected Runtime Exception.',
    ageGroups: {
      [AgeGroup.SIMPLE]: '3-5 Years (Simple outlines)',
      [AgeGroup.MODERATE]: '5-7 Years (Balanced detail)',
      [AgeGroup.STORY]: '7-10 Years (Narrative scenes)',
      [AgeGroup.COMPLEX]: '10+ Years (High complexity)'
    }
  },
  tr: {
    title: 'ColorCraft AI',
    subtitle: 'Çocuklar İçin Siber Yaratıcılık Stüdyosu',
    apiKeyLabel: 'Gemini API Anahtarını Girin',
    apiKeyPlaceholder: 'Gemini API Anahtarı Girin',
    apiKeySubmit: 'Sistemi Başlat',
    apiKeyHelp: 'Anahtar mı lazım? Google AI Studio\'yu ziyaret edin',
    nameLabel: 'Çocuğun Adı',
    ageLabel: 'Yetenek Seviyesi (Yaş Grubu)',
    themeLabel: 'Macera Teması',
    pageCountLabel: 'Sayfa Miktarı',
    photoLabel: 'Referans Nesne (Opsiyonel Fotoğraf)',
    generateBtn: 'Derlemeyi Başlat',
    generating: 'Eserler Üretiliyor...',
    download: 'PNG Olarak Dışa Aktar',
    noImages: 'Henüz eser üretilmedi. Komut bekleniyor...',
    errorInvalidKey: 'Kritik Hata: Yetkisiz API Erişimi.',
    errorGeneric: 'Beklenmedik Çalışma Zamanı Hatası.',
    ageGroups: {
      [AgeGroup.SIMPLE]: '3-5 Yaş (Basit hatlar)',
      [AgeGroup.MODERATE]: '5-7 Yaş (Dengeli detay)',
      [AgeGroup.STORY]: '7-10 Yaş (Hikaye sahneleri)',
      [AgeGroup.COMPLEX]: '10+ Yaş (Yüksek karmaşıklık)'
    }
  },
  hi: {
    title: 'ColorCraft AI',
    subtitle: 'बच्चों के लिए साइबरनेटिक क्रिएटिव स्टूडियो',
    apiKeyLabel: 'Gemini API कुंजी दर्ज करें',
    apiKeyPlaceholder: 'यहाँ कुंजी पेस्ट करें...',
    apiKeySubmit: 'सिस्टम शुरू करें',
    apiKeyHelp: 'कुंजी चाहिए? Google AI Studio पर जाएँ',
    nameLabel: 'बच्चे का नाम',
    ageLabel: 'कौशल स्तर (आयु वर्ग)',
    themeLabel: 'रोमांचक थीम',
    pageCountLabel: 'पेज की संख्या',
    photoLabel: 'संदर्भ विषय (वैकल्पिक फोटो)',
    generateBtn: 'कंपाइलेशन निष्पादित करें',
    generating: 'कृतियां तैयार हो रही हैं...',
    download: 'PNG निर्यात करें',
    noImages: 'अभी तक कोई कृति नहीं बनी। कमांड की प्रतीक्षा',
    errorInvalidKey: 'गंभीर त्रुटि: अनधिकृत API पहुंच।',
    errorGeneric: 'अप्रत्याशित रनटाइम त्रुटि।',
    ageGroups: {
      [AgeGroup.SIMPLE]: '3-5 वर्ष (सरल रूपरेखा)',
      [AgeGroup.MODERATE]: '5-7 वर्ष (संतुलित विवरण)',
      [AgeGroup.STORY]: '7-10 वर्ष (कथा दृश्य)',
      [AgeGroup.COMPLEX]: '10+ वर्ष (उच्च जटिलता)'
    }
  },
  es: {
    title: 'ColorCraft AI',
    subtitle: 'Estudio Creativo Cibernético para Niños',
    apiKeyLabel: 'Ingrese la Clave API de Gemini',
    apiKeyPlaceholder: 'Pegue Clave API Aquí',
    apiKeySubmit: 'Inicializar Sistema',
    apiKeyHelp: '¿Necesita una clave? Visite Google AI Studio',
    nameLabel: 'Nombre del Niño/a',
    ageLabel: 'Nivel de Habilidad (Grupo de Edad)',
    themeLabel: 'Tema de Aventura',
    pageCountLabel: 'Cantidad de Páginas',
    photoLabel: 'Sujeto de Referencia (Foto Opcional)',
    generateBtn: 'Ejecutar Compilación',
    generating: 'Generando Artefactos...',
    download: 'Exportar PNG',
    noImages: 'Aún no hay artefactos. Esperando comando...',
    errorInvalidKey: 'Error Crítico: Acceso API no autorizado.',
    errorGeneric: 'Excepción de tiempo de ejecución inesperada.',
    ageGroups: {
      [AgeGroup.SIMPLE]: '3-5 Años (Esquemas simples)',
      [AgeGroup.MODERATE]: '5-7 Años (Detalle equilibrado)',
      [AgeGroup.STORY]: '7-10 Años (Escenas narrativas)',
      [AgeGroup.COMPLEX]: '10+ Años (Alta complejidad)'
    }
  },
  zh: {
    title: 'ColorCraft AI',
    subtitle: '儿童赛博创意工作室',
    apiKeyLabel: '输入 Gemini API 密钥',
    apiKeyPlaceholder: '在此粘贴密钥',
    apiKeySubmit: '初始化系统',
    apiKeyHelp: '需要密钥？访问 Google AI Studio',
    nameLabel: '孩子姓名',
    ageLabel: '技能等级 (年龄组)',
    themeLabel: '冒险主题',
    pageCountLabel: '页面数量',
    photoLabel: '参考对象 (可选照片)',
    generateBtn: '执行编译',
    generating: '正在生成作品...',
    download: '导出 PNG',
    noImages: '尚未生成作品。等待指令...',
    errorInvalidKey: '严重错误：未授权的 API 访问。',
    errorGeneric: '意外的运行时异常。',
    ageGroups: {
      [AgeGroup.SIMPLE]: '3-5 岁 (简单轮廓)',
      [AgeGroup.MODERATE]: '5-7 岁 (均衡细节)',
      [AgeGroup.STORY]: '7-10 岁 (故事情节)',
      [AgeGroup.COMPLEX]: '10+ 岁 (高复杂度)'
    }
  }
};
