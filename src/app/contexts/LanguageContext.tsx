import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Professional Pool & Garden Care',
    'hero.subtitle': 'Expert maintenance services to keep your outdoor spaces pristine and beautiful year-round',
    'hero.cta.quote': 'Get a Free Quote',
    'hero.cta.services': 'Our Services',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive pool and garden maintenance solutions to keep your outdoor spaces looking their best',
    
    'service.pool.cleaning.title': 'Pool Cleaning',
    'service.pool.cleaning.desc': 'Complete pool cleaning including skimming, vacuuming, and chemical balancing',
    'service.pool.cleaning.f1': 'Weekly cleaning',
    'service.pool.cleaning.f2': 'Chemical testing',
    'service.pool.cleaning.f3': 'Filter maintenance',
    'service.pool.cleaning.f4': 'Equipment inspection',
    
    'service.pool.maintenance.title': 'Pool Maintenance',
    'service.pool.maintenance.desc': 'Preventive maintenance to keep your pool in perfect condition',
    'service.pool.maintenance.f1': 'Equipment servicing',
    'service.pool.maintenance.f2': 'Leak detection',
    'service.pool.maintenance.f3': 'Tile cleaning',
    'service.pool.maintenance.f4': 'Water testing',
    
    'service.garden.design.title': 'Garden Design',
    'service.garden.design.desc': 'Professional landscaping and garden design tailored to your space',
    'service.garden.design.f1': 'Custom designs',
    'service.garden.design.f2': 'Plant selection',
    'service.garden.design.f3': 'Hardscaping',
    'service.garden.design.f4': 'Irrigation planning',
    
    'service.lawn.mowing.title': 'Lawn Mowing',
    'service.lawn.mowing.desc': 'Regular lawn mowing and edging for a pristine appearance',
    'service.lawn.mowing.f1': 'Weekly mowing',
    'service.lawn.mowing.f2': 'Edge trimming',
    'service.lawn.mowing.f3': 'Blowing cleanup',
    'service.lawn.mowing.f4': 'Stripe patterns',
    
    'service.garden.care.title': 'Garden Care',
    'service.garden.care.desc': 'Comprehensive garden maintenance and seasonal care',
    'service.garden.care.f1': 'Pruning & trimming',
    'service.garden.care.f2': 'Fertilization',
    'service.garden.care.f3': 'Pest control',
    'service.garden.care.f4': 'Mulching',
    
    'service.full.service.title': 'Full Service',
    'service.full.service.desc': 'Complete pool and garden care package for ultimate convenience',
    'service.full.service.f1': 'All services included',
    'service.full.service.f2': 'Priority scheduling',
    'service.full.service.f3': 'Dedicated team',
    'service.full.service.f4': 'Monthly reports',
    
    // About
    'about.title': 'About AquaGreen',
    'about.p1': 'With over 4 years of experience, AquaGreen has been the trusted choice for pool and garden maintenance in the community. Our team of certified professionals is dedicated to delivering exceptional service and creating outdoor spaces you\'ll love.',
    'about.p2': 'We pride ourselves on our attention to detail, eco-friendly practices, and commitment to customer satisfaction. Whether you need regular maintenance or a complete outdoor transformation, we have the expertise to exceed your expectations.',
    'about.stat.clients': 'Happy Clients',
    'about.stat.experience': 'Years Experience',
    'about.stat.satisfaction': 'Satisfaction Rate',
    'about.stat.licensed': 'Licensed',
    'about.stat.insured': '& Insured',
    
    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Take a look at some of the beautiful outdoor spaces we\'ve maintained and transformed',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to transform your outdoor space? Contact us today for a free consultation and quote',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.phone': '(555) 123-4567',
    'contact.form.placeholder.message': 'Tell us about your pool and garden maintenance needs...',
    'contact.form.success': 'Thank you for your message! We will get back to you soon.',
    
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Hours',
    'contact.info.address.value': 'Ölüdeniz/Ovacık',
    'contact.info.hours.value': 'Mon-Sat: 7AM - 7PM',
    
    // Footer
    'footer.description': 'Professional pool and garden maintenance services. Creating beautiful outdoor spaces that you can enjoy year-round.',
    'footer.links': 'Quick Links',
    'footer.services': 'Services',
    'footer.copyright': 'All rights reserved. | Licensed & Insured',
  },
  tr: {
    // Header
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.title': 'Profesyonel Havuz & Bahçe Bakımı',
    'hero.subtitle': 'Dış mekanlarınızı yıl boyunca kusursuz ve güzel tutmak için uzman bakım hizmetleri',
    'hero.cta.quote': 'Ücretsiz Teklif Alın',
    'hero.cta.services': 'Hizmetlerimiz',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Dış mekanlarınızın en iyi görünmesini sağlamak için kapsamlı havuz ve bahçe bakım çözümleri',
    
    'service.pool.cleaning.title': 'Havuz Temizliği',
    'service.pool.cleaning.desc': 'Yüzey temizleme, vakumlama ve kimyasal dengeleme dahil komple havuz temizliği',
    'service.pool.cleaning.f1': 'Haftalık temizlik',
    'service.pool.cleaning.f2': 'Kimyasal test',
    'service.pool.cleaning.f3': 'Filtre bakımı',
    'service.pool.cleaning.f4': 'Ekipman kontrolü',
    
    'service.pool.maintenance.title': 'Havuz Bakımı',
    'service.pool.maintenance.desc': 'Havuzunuzu mükemmel durumda tutmak için koruyucu bakım',
    'service.pool.maintenance.f1': 'Ekipman servisi',
    'service.pool.maintenance.f2': 'Sızıntı tespiti',
    'service.pool.maintenance.f3': 'Fayans temizliği',
    'service.pool.maintenance.f4': 'Su testi',
    
    'service.garden.design.title': 'Bahçe Tasarımı',
    'service.garden.design.desc': 'Alanınıza özel profesyonel peyzaj ve bahçe tasarımı',
    'service.garden.design.f1': 'Özel tasarımlar',
    'service.garden.design.f2': 'Bitki seçimi',
    'service.garden.design.f3': 'Sert peyzaj',
    'service.garden.design.f4': 'Sulama planlaması',
    
    'service.lawn.mowing.title': 'Çim Biçme',
    'service.lawn.mowing.desc': 'Kusursuz bir görünüm için düzenli çim biçme ve kenar düzeltme',
    'service.lawn.mowing.f1': 'Haftalık biçim',
    'service.lawn.mowing.f2': 'Kenar düzeltme',
    'service.lawn.mowing.f3': 'Üfleme temizliği',
    'service.lawn.mowing.f4': 'Şerit desenleri',
    
    'service.garden.care.title': 'Bahçe Bakımı',
    'service.garden.care.desc': 'Kapsamlı bahçe bakımı ve mevsimsel bakım',
    'service.garden.care.f1': 'Budama & kesme',
    'service.garden.care.f2': 'Gübreleme',
    'service.garden.care.f3': 'Haşere kontrolü',
    'service.garden.care.f4': 'Malçlama',
    
    'service.full.service.title': 'Tam Hizmet',
    'service.full.service.desc': 'Maksimum kolaylık için komple havuz ve bahçe bakım paketi',
    'service.full.service.f1': 'Tüm hizmetler dahil',
    'service.full.service.f2': 'Öncelikli randevu',
    'service.full.service.f3': 'Özel ekip',
    'service.full.service.f4': 'Aylık raporlar',
    
    // About
    'about.title': 'AquaGreen Hakkında',
    'about.p1': '4 yılı aşkın deneyimiyle AquaGreen, topluluktaki havuz ve bahçe bakımı için güvenilir tercih olmuştur. Sertifikalı profesyonellerden oluşan ekibimiz, olağanüstü hizmet sunmaya ve seveceğiniz açık alanlar yaratmaya kendini adamıştır.',
    'about.p2': 'Detaylara verdiğimiz önem, çevre dostu uygulamalarımız ve müşteri memnuniyetine olan bağlılığımızla gurur duyuyoruz. İster düzenli bakıma ihtiyacınız olsun, ister komple bir dış mekan dönüşümüne, beklentilerinizi aşacak uzmanlığa sahibiz.',
    'about.stat.clients': 'Mutlu Müşteri',
    'about.stat.experience': 'Yıl Deneyim',
    'about.stat.satisfaction': 'Memnuniyet Oranı',
    'about.stat.licensed': 'Lisanslı',
    'about.stat.insured': '& Sigortalı',
    
    // Gallery
    'gallery.title': 'Çalışmalarımız',
    'gallery.subtitle': 'Bakımını yaptığımız ve dönüştürdüğümüz güzel açık alanlara bir göz atın',
    
    // Contact
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Dış mekanınızı dönüştürmeye hazır mısınız? Ücretsiz danışma ve teklif için bugün bize ulaşın',
    'contact.form.title': 'Bize Mesaj Gönderin',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.form.placeholder.name': 'Ahmet Yılmaz',
    'contact.form.placeholder.email': 'ahmet@ornek.com',
    'contact.form.placeholder.phone': '(555) 123-4567',
    'contact.form.placeholder.message': 'Havuz ve bahçe bakım ihtiyaçlarınız hakkında bize bilgi verin...',
    'contact.form.success': 'Mesajınız için teşekkürler! En kısa sürede size geri döneceğiz.',
    
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-posta',
    'contact.info.address': 'Adres',
    'contact.info.hours': 'Çalışma Saatleri',
    'contact.info.address.value': 'Ölüdeniz/Ovacık',
    'contact.info.hours.value': 'Pzt-Cmt: 07:00 - 19:00',
    
    // Footer
    'footer.description': 'Profesyonel havuz ve bahçe bakım hizmetleri. Yıl boyunca keyif alabileceğiniz güzel açık alanlar yaratıyoruz.',
    'footer.links': 'Hızlı Bağlantılar',
    'footer.services': 'Hizmetler',
    'footer.copyright': 'Tüm hakları saklıdır. | Lisansl & Sigortalı',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}