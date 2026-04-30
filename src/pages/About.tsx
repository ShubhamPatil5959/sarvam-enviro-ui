import { Target, Lightbulb, Recycle, ShieldCheck, Award, TreePine, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function About() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="section container page-transition">
      <h1 className="h1 animate-blur-in" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        About <span className="text-gradient">Sarvam Enviro</span>
      </h1>
      <p className="text-muted animate-blur-in delay-200" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '650px', margin: '0 auto 4rem', fontSize: '1.15rem' }}>
        Your trusted partner in environmental sustainability and compliance
      </p>

      {/* Company Overview */}
      <div className="glow-card reveal" style={{ marginBottom: '4rem' }}>
        <div className="glow-card-inner card-border-animated" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="icon-container animate-pulse-glow">
              <Award size={36} color="var(--color-primary)" />
            </div>
            <h2 className="h2" style={{ color: 'var(--color-primary)' }}>Company Overview</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.9' }}>
            <strong style={{ color: 'var(--color-text)' }}>Sarvam Enviro Solutions Pvt. Ltd.</strong> positions itself as a comprehensive environmental service provider. We specialize in the consulting, design, and implementation of advanced waste-management and pollution-control systems. Our goal is to be a trusted partner for industries seeking long-term environmental compliance and sustainability.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }} className="stagger-children">
        {/* Core Vision */}
        <div className="glow-card reveal-left">
          <div className="glow-card-inner" style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-container animate-float">
                <Target size={36} color="var(--color-primary)" />
              </div>
              <h2 className="h2">Core Vision</h2>
            </div>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.8 }}>
              Building a cleaner, greener, and sustainable future through responsible environmental solutions.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              We place a strong emphasis on empowering industries to adopt eco-friendly practices that benefit both their operations and the planet.
            </p>
          </div>
        </div>

        {/* Approach & Values */}
        <div className="glow-card reveal-right">
          <div className="glow-card-inner" style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-container animate-float" style={{ animationDelay: '1s' }}>
                <Lightbulb size={36} color="var(--color-secondary)" />
              </div>
              <h2 className="h2">Approach & Values</h2>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <div style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', background: 'rgba(16, 185, 129, 0.1)', flexShrink: 0 }}>
                  <Zap size={20} color="var(--color-primary)" />
                </div>
                <span className="text-muted" style={{ fontSize: '1.1rem' }}>Focus on innovation, sustainability, and circular economy principles.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <div style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', background: 'rgba(14, 165, 233, 0.1)', flexShrink: 0 }}>
                  <Recycle size={20} color="var(--color-secondary)" />
                </div>
                <span className="text-muted" style={{ fontSize: '1.1rem' }}>Commitment to reducing environmental footprints and promoting resource recovery.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <div style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', background: 'rgba(16, 185, 129, 0.1)', flexShrink: 0 }}>
                  <TreePine size={20} color="var(--color-primary)" />
                </div>
                <span className="text-muted" style={{ fontSize: '1.1rem' }}>Collaboration with industries to achieve zero-discharge and carbon-neutral goals.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="reveal" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Why Industries Trust Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }} className="stagger-children">
          {[
            { icon: ShieldCheck, label: 'Regulatory Expertise' },
            { icon: Award, label: 'Certified Professionals' },
            { icon: Recycle, label: 'Circular Economy Focus' },
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
