import { Target, Lightbulb, Factory, ShieldCheck, Award, TreePine, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function About() {
  const scrollRef = useScrollReveal();

  const industries = [
    'Sugar & Distillery',
    'Pharmaceuticals',
    'Chemical & Petrochemicals',
    'Food & Beverage',
    'Textile & Dyeing',
    'Automobile & Engineering',
    'Hospitals & Healthcare',
    'Real Estate & Infrastructure'
  ];

  return (
    <div ref={scrollRef} className="section container page-transition">
      <h1 className="h1 animate-blur-in" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        About <span className="text-gradient">Sarvam Enviro</span>
      </h1>
      <p className="text-muted animate-blur-in delay-200" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '650px', margin: '0 auto 4rem', fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-primary)' }}>
        "Transformation Through Sustainability"
      </p>

      {/* Company Overview */}
      <div className="glow-card reveal" style={{ marginBottom: '4rem' }}>
        <div className="glow-card-inner card-border-animated" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="icon-container animate-pulse-glow">
              <Award size={36} color="var(--color-primary)" />
            </div>
            <h2 className="h2" style={{ color: 'var(--color-primary)' }}>Who We Are</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.9' }}>
            <strong style={{ color: 'var(--color-text)' }}>Sarvam Enviro Solutions Pvt. Ltd.</strong> is a comprehensive environmental engineering and consulting firm. We specialize in the design, execution, and monitoring of advanced waste-management, water treatment, and pollution-control systems. Partnering with industries, we ensure regulatory compliance while driving sustainable, resource-efficient operations.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem', marginBottom: '4rem' }} className="stagger-children">
        {/* Core Vision */}
        <div className="glow-card reveal-left">
          <div className="glow-card-inner" style={{ padding: '3rem', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-container animate-float">
                <Target size={36} color="var(--color-primary)" />
              </div>
              <h2 className="h2">Our Vision</h2>
            </div>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              To lead the transformation towards a sustainable and zero-waste industrial ecosystem by providing innovative, practical, and eco-friendly environmental solutions.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="glow-card reveal-right">
          <div className="glow-card-inner" style={{ padding: '3rem', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-container animate-float" style={{ animationDelay: '1s' }}>
                <Lightbulb size={36} color="var(--color-secondary)" />
              </div>
              <h2 className="h2">Our Mission</h2>
            </div>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our mission is to empower industries with cutting-edge waste management, water treatment, and compliance strategies that drive operational efficiency while protecting the planet for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="glow-card reveal" style={{ marginBottom: '4rem' }}>
        <div className="glow-card-inner" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <div className="icon-container animate-pulse-glow">
              <Factory size={36} color="var(--color-secondary)" />
            </div>
            <h2 className="h2">Industries We Serve</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '1rem' }}>
            {industries.map((industry, index) => (
              <div key={index} className="reveal-scale" style={{ 
                background: 'rgba(14, 165, 233, 0.05)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid rgba(14, 165, 233, 0.1)'
              }}>
                <Zap size={18} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="reveal" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Why Choose Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }} className="stagger-children">
          {[
            { icon: ShieldCheck, label: 'Regulatory Expertise' },
            { icon: Award, label: 'Certified Professionals' },
            { icon: TreePine, label: 'Sustainable Approach' },
            { icon: Target, label: 'Results-Driven' }
          ].map((badge, i) => (
            <div key={i} className="reveal-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <div className="icon-container animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }}>
                <badge.icon size={28} color="var(--color-primary)" />
              </div>
              <span style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
