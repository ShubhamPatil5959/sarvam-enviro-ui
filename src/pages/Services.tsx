import { ClipboardCheck, Droplets, Leaf, Microscope } from 'lucide-react';

export default function Services() {
  return (
    <div className="section container animate-fade-in">
      <h1 className="h1 animate-slide-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>Our Services & Expertise</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        <div className="glass hover-lift animate-slide-up delay-100" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', borderTop: '4px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <ClipboardCheck size={48} color="var(--color-primary)" />
            <h2 className="h2" style={{ fontSize: '1.75rem' }}>Environmental Compliance</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Complete documentation and approval support for regulatory requirements, including MPCB Consent Licenses and authorisations.</p>
        </div>

        <div className="glass hover-lift animate-slide-up delay-200" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', borderTop: '4px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Droplets size={48} color="var(--color-primary)" />
            <h2 className="h2" style={{ fontSize: '1.75rem' }}>Water Solutions</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Efficient systems to treat and recycle water for industrial conservation, including ETP, STP, and ZLD systems.</p>
        </div>

        <div className="glass hover-lift animate-slide-up delay-300" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', borderTop: '4px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Leaf size={48} color="var(--color-primary)" />
            <h2 className="h2" style={{ fontSize: '1.75rem' }}>Sustainability Consulting</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>ESG frameworks, carbon reduction strategies, and performance improvements to help industries achieve zero-discharge goals.</p>
        </div>

        <div className="glass hover-lift animate-slide-up delay-400" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', borderTop: '4px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Microscope size={48} color="var(--color-primary)" />
            <h2 className="h2" style={{ fontSize: '1.75rem' }}>Laboratory Testing</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Precise monitoring of environmental parameters to maintain standards and ensure compliance with environmental regulations.</p>
        </div>
      </div>
    </div>
  );
}
