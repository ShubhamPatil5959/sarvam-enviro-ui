import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';
import { services } from '../data/services';

const delays = ['t-delay-100', 't-delay-200', 't-delay-300', 't-delay-400'];

export default function Services() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="section container page-transition">
      <h1 className="h1 animate-blur-in" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        Our Services & <span className="text-gradient">Expertise</span>
      </h1>
      <p className="text-muted animate-blur-in delay-200" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.15rem' }}>
        Delivering end-to-end environmental solutions with precision and care
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2.5rem' }} className="stagger-children">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link 
              key={service.slug} 
              to={`/services/${service.slug}`}
              className={`glow-card reveal ${delays[index] || ''}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <div className="glow-card-inner card-border-animated" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="icon-container animate-pulse-glow" style={{ animationDelay: `${index * 0.3}s` }}>
                    <Icon size={36} color={service.color} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{service.title}</h2>
                </div>
                <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{service.description}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {service.features.map((feature, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                      <ArrowRight size={16} color={service.color} style={{ flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* "Learn More" link */}
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: service.color, fontWeight: 600, fontSize: '0.95rem' }}>
                  Learn More
                  <ArrowRight size={18} style={{ transition: 'transform 0.3s ease' }} className="learn-more-arrow" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
