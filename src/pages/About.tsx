import { Target, Lightbulb, Recycle, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="section container animate-fade-in">
      <h1 className="h1 animate-slide-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>About Us</h1>
      
      {/* Company Overview */}
      <div className="glass hover-lift animate-slide-up delay-100" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', marginBottom: '3rem' }}>
        <h2 className="h2" style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Company Overview</h2>
        <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          <strong>Sarvam Enviro Solutions Pvt. Ltd.</strong> positions itself as a comprehensive environmental service provider. We specialize in the consulting, design, and implementation of advanced waste-management and pollution-control systems. Our goal is to be a trusted partner for industries seeking long-term environmental compliance and sustainability.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* Core Vision */}
        <div className="glass hover-lift animate-slide-up delay-200" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Target size={40} color="var(--color-primary)" />
            <h2 className="h2">Core Vision</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Building a cleaner, greener, and sustainable future through responsible environmental solutions.
          </p>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            We place a strong emphasis on empowering industries to adopt eco-friendly practices that benefit both their operations and the planet.
          </p>
        </div>

        {/* Approach & Values */}
        <div className="glass hover-lift animate-slide-up delay-300" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Lightbulb size={40} color="var(--color-primary)" />
            <h2 className="h2">Approach & Values</h2>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <ShieldCheck size={24} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <span className="text-muted" style={{ fontSize: '1.1rem' }}>Focus on innovation, sustainability, and circular economy principles.</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <Recycle size={24} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <span className="text-muted" style={{ fontSize: '1.1rem' }}>Commitment to reducing environmental footprints and promoting resource recovery.</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <Target size={24} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <span className="text-muted" style={{ fontSize: '1.1rem' }}>Collaboration with industries to achieve zero-discharge and carbon-neutral goals.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
