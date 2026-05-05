import { Waves, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-8 h-8" />
              <span className="text-2xl">AquaGreen</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61567655567807" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pool.and.garden.maintenance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">{t('service.pool.cleaning.title')}</li>
              <li className="text-primary-foreground/80">{t('service.pool.maintenance.title')}</li>
              <li className="text-primary-foreground/80">{t('service.garden.design.title')}</li>
              <li className="text-primary-foreground/80">{t('service.lawn.mowing.title')}</li>
              <li className="text-primary-foreground/80">{t('service.garden.care.title')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} AquaGreen. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}