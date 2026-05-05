import { Waves, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">AquaGreen</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.gallery')}
            </button>
            <LanguageSwitcher />
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
              {t('nav.contact')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors">
              {t('nav.gallery')}
            </button>
            <LanguageSwitcher />
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 w-full">
              {t('nav.contact')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}