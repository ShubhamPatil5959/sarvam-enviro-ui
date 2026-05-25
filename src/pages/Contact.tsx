import { MapPin, Phone, Mail, User } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Contact() {
  const scrollRef = useScrollReveal();

  const contactCards = [
    {
      icon: MapPin,
      title: 'Office Locations',
      info: (
        <>
          <strong>Head Office:</strong> Swami Prerana, Shitole Nagar, Sangavi, Pimpari Chinchwad, Pune, Maharashtra- 411027<br />
        </>
      ),
      color: 'var(--color-primary)',
      delay: 't-delay-100'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      info: (
        <>
          +91 91120 06989<br />
          +91 8329006561
        </>
      ),
      color: 'var(--color-secondary)',
      delay: 't-delay-200'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      info: (
        <>
          info@sarvamenviro.com<br />
          shreyash@sarvamenviro.com<br />
          ram@sarvamenviro.com
        </>
      ),
      color: 'var(--color-primary)',
      delay: 't-delay-300'
    },
    {
      icon: User,
      title: 'Key Contacts',
      info: (
        <>
          <strong>Dr. Ram Konale</strong> (Director)<br />
          <strong>Mr. Shreyash Thorat</strong> (Director)
        </>
      ),
      color: 'var(--color-secondary)',
      delay: 't-delay-400'
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

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="h2 reveal" style={{ marginBottom: '2rem', textAlign: 'center' }}>Get in Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.5rem' }} className="stagger-children">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className={`glow-card reveal ${card.delay}`}>
                <div className="glow-card-inner" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.75rem 2rem', height: '100%' }}>
                  <div className="icon-container animate-pulse-glow" style={{ animationDelay: `${index * 0.5}s`, flexShrink: 0 }}>
                    <Icon size={28} color={card.color} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{card.title}</strong>
                    <div className="text-muted" style={{ lineHeight: '1.8' }}>{card.info}</div>
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
