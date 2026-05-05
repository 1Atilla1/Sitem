import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        {/* Replace this URL with your own hero image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1657383543368-7d929944be6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzc1NzQxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beautiful pool and garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            {t('hero.cta.quote')}
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            {t('hero.cta.services')}
          </Button>
        </div>
      </div>
    </section>
  );
}