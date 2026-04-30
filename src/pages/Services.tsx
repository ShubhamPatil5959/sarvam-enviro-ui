import { ClipboardCheck, Droplets, Leaf, Microscope, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Environmental Compliance',
    description: 'Complete documentation and approval support for regulatory requirements, including MPCB Consent Licenses and authorisations.',
    features: ['MPCB Consent Licenses', 'Environmental Clearances', 'Hazardous Waste Authorisation', 'Regulatory Documentation'],
    color: 'var(--color-primary)',
    delay: 't-delay-100'
  },
  {
    icon: Droplets,
    title: 'Water Solutions',
    description: 'Efficient systems to treat and recycle water for industrial conservation, including ETP, STP, and ZLD systems.',
    features: ['ETP Design & Installation', 'STP Systems', 'Zero Liquid Discharge', 'Water Recycling'],
    color: 'var(--color-secondary)',
    delay: 't-delay-200'
  },
  {
    icon: Leaf,
    title: 'Sustainability Consulting',
    description: 'ESG frameworks, carbon reduction strategies, and performance improvements to help industries achieve zero-discharge goals.',
    features: ['ESG Framework Design', 'Carbon Footprint Analysis', 'Sustainability Audits', 'Green Building Consulting'],
    color: 'var(--color-primary)',
    delay: 't-delay-300'
  },
  {
    icon: Microscope,
    title: 'Laboratory Testing',
    description: 'Precise monitoring of environmental parameters to maintain standards and ensure compliance with environmental regulations.',
    features: ['Air Quality Monitoring', 'Water Quality Testing', 'Stack Emission Testing', 'Ambient Noise Monitoring'],
    color: 'var(--color-secondary)',
    delay: 't-delay-400'
  }
];

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
            <div key={index} className={`glow-card reveal ${service.delay}`}>
              <div className="glow-card-inner card-border-animated" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="icon-container animate-pulse-glow" style={{ animationDelay: `${index * 0.3}s` }}>
                    <Icon size={36} color={service.color} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{service.title}</h2>
                </div>
                <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{service.description}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
                  {service.features.map((feature, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                      <ArrowRight size={16} color={service.color} style={{ flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
