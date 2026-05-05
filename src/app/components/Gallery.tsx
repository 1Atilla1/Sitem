import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

// Replace these URLs with your own image URLs
// For local images: import them and use like: import image1 from '../assets/images/pool1.jpg'
const galleryImages = [
  {
    src: "/images/Jasmine.jpeg",
    alt: 'Luxury backyard pool',
    span: 'col-span-2 row-span-2',
  },
  {
    src: "/images/SiteBahce.jpeg",
    alt: 'Pool maintenance',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1763484592957-773be2064ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBsYW5kc2NhcGluZyUyMGdyZWVuJTIwcGxhbnRzfGVufDF8fHx8MTc3NTc0MTk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Garden landscaping',
    span: 'col-span-1 row-span-1',
  },
  {
    src: "/images/SiteBahce2.jpeg",
    alt: 'Lawn mowing',
    span: 'col-span-1 row-span-1',
  },
  {
    src: "/images/Patika.jpeg",
    alt: 'Pool equipment',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1710492873117-b790ba523fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYXJkZW5lciUyMHBydW5pbmd8ZW58MXx8fHwxNzc1NzQxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Professional gardening',
    span: 'col-span-2 row-span-1',
  },
];

export function Gallery() {
  const { t } = useLanguage();
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">{t('gallery.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div key={index} className={`${image.span} overflow-hidden rounded-lg group cursor-pointer`}>
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}