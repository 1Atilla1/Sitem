import { Award, Users, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      value: '100+',
      label: t('about.stat.clients'),
    },
    {
      icon: Clock,
      value: '4+',
      label: t('about.stat.experience'),
    },
    {
      icon: Award,
      value: '100%',
      label: t('about.stat.satisfaction'),
    },
    {
      icon: Shield,
      value: t('about.stat.licensed'),
      label: t('about.stat.insured'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">{t('about.title')}</h2>
            <p className="text-lg mb-6 text-foreground">
              {t('about.p1')}
            </p>
            <p className="text-lg mb-8 text-foreground">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-secondary" />
                    <div className="text-3xl mb-2 text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="/images/SiteBahce.jpeg"
                  alt="Pool maintenance"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763484592957-773be2064ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBsYW5kc2NhcGluZyUyMGdyZWVuJTIwcGxhbnRzfGVufDF8fHx8MTc3NTc0MTk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Garden landscaping"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="/images/SiteBahce2.jpeg"
                  alt="Lawn mowing"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1710492873117-b790ba523fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYXJkZW5lciUyMHBydW5pbmd8ZW58MXx8fHwxNzc1NzQxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional gardening"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}