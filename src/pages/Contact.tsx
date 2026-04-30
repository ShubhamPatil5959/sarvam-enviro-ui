import { MapPin, Phone, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Contact() {
  const scrollRef = useScrollReveal();

  const contactCards = [
    {
      icon: MapPin,
      title: 'Office Locations',
      info: 'Nagpur & Pune',
      color: 'var(--color-primary)',
      delay: 't-delay-100'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 8208 567 560',
      color: 'var(--color-secondary)',
      delay: 't-delay-200'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@sahyadrienviro.com (Placeholder)',
      color: 'var(--color-primary)',
      delay: 't-delay-300'
    }
  ];

  return (
    <div ref={scrollRef} className="section container page-transition">
      <h1 className="h1 animate-blur-in" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        Contact <span className="text-gradient">Us</span>
      </h1>
      <p className="text-muted animate-blur-in delay-200" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '500px', margin: '0 auto 4rem', fontSize: '1.15rem' }}>
        We would love to hear from you. Reach out anytime!
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="h2 reveal" style={{ marginBottom: '2rem', textAlign: 'center' }}>Get in Touch</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="stagger-children">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className={`glow-card reveal ${card.delay}`}>
                <div className="glow-card-inner" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.75rem 2rem' }}>
                  <div className="icon-container animate-pulse-glow" style={{ animationDelay: `${index * 0.5}s`, flexShrink: 0 }}>
                    <Icon size={28} color={card.color} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{card.title}</strong>
                    <p className="text-muted">{card.info}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
