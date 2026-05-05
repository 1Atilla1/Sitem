import { Droplets, Leaf, Scissors, Sprout, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Droplets,
      title: t('service.pool.cleaning.title'),
      description: t('service.pool.cleaning.desc'),
      features: [
        t('service.pool.cleaning.f1'),
        t('service.pool.cleaning.f2'),
        t('service.pool.cleaning.f3'),
        t('service.pool.cleaning.f4'),
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Sparkles,
      title: t('service.pool.maintenance.title'),
      description: t('service.pool.maintenance.desc'),
      features: [
        t('service.pool.maintenance.f1'),
        t('service.pool.maintenance.f2'),
        t('service.pool.maintenance.f3'),
        t('service.pool.maintenance.f4'),
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Leaf,
      title: t('service.garden.design.title'),
      description: t('service.garden.design.desc'),
      features: [
        t('service.garden.design.f1'),
        t('service.garden.design.f2'),
        t('service.garden.design.f3'),
        t('service.garden.design.f4'),
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Scissors,
      title: t('service.lawn.mowing.title'),
      description: t('service.lawn.mowing.desc'),
      features: [
        t('service.lawn.mowing.f1'),
        t('service.lawn.mowing.f2'),
        t('service.lawn.mowing.f3'),
        t('service.lawn.mowing.f4'),
      ],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Sprout,
      title: t('service.garden.care.title'),
      description: t('service.garden.care.desc'),
      features: [
        t('service.garden.care.f1'),
        t('service.garden.care.f2'),
        t('service.garden.care.f3'),
        t('service.garden.care.f4'),
      ],
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: CheckCircle,
      title: t('service.full.service.title'),
      description: t('service.full.service.desc'),
      features: [
        t('service.full.service.f1'),
        t('service.full.service.f2'),
        t('service.full.service.f3'),
        t('service.full.service.f4'),
      ],
      color: 'text-cyan-700',
      bgColor: 'bg-cyan-100',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}