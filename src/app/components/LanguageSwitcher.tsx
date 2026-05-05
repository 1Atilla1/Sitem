import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-muted-foreground" />
      <div className="flex gap-1 bg-muted rounded-md p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded transition-all ${
            language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('tr')}
          className={`px-3 py-1 rounded transition-all ${
            language === 'tr'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          TR
        </button>
      </div>
    </div>
  );
}
