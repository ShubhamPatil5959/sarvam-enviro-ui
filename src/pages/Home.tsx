import { Download, ClipboardCheck, Droplets, Leaf, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import landingBg from '../assets/LandingPage.jpg';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ background: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.7)), url(${landingBg}) center/cover no-repeat`, minHeight: '80vh', display: 'flex', alignItems: 'center', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h1 animate-slide-up text-gradient-animated" style={{ marginBottom: '1.5rem' }}>Building a cleaner, greener future.</h1>
          <p className="h3 animate-slide-up delay-100" style={{ marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.9)' }}>
            Comprehensive environmental management and sustainability solutions for industries.
          </p>
          <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/services" className="btn btn-primary btn-ripple">Our Services</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="h2 animate-slide-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass hover-lift animate-slide-up delay-100" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
              <div className="animate-sway" style={{ display: 'inline-block' }}>
                <ClipboardCheck size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Environmental Compliance</h3>
              <p className="text-muted">Complete documentation and approval support for regulatory requirements.</p>
            </div>
            <div className="glass hover-lift animate-slide-up delay-200" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
              <div className="animate-sway" style={{ display: 'inline-block', animationDelay: '0.5s' }}>
                <Droplets size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Water Solutions</h3>
              <p className="text-muted">Efficient systems to treat and recycle water for industrial conservation.</p>
            </div>
            <div className="glass hover-lift animate-slide-up delay-300" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
              <div className="animate-sway" style={{ display: 'inline-block', animationDelay: '1s' }}>
                <Leaf size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Sustainability Consulting</h3>
              <p className="text-muted">ESG frameworks, carbon reduction strategies, and performance improvements.</p>
            </div>
            <div className="glass hover-lift animate-slide-up delay-400" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
              <div className="animate-sway" style={{ display: 'inline-block', animationDelay: '1.5s' }}>
                <Microscope size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Laboratory Testing</h3>
              <p className="text-muted">Precise monitoring of environmental parameters to maintain standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="section animate-slide-up delay-200" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Company Profile</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Download our comprehensive corporate brochure to learn more about our services, methodologies, and commitment to the environment.
          </p>
          <div style={{ padding: '1rem' }}>
            <a href="/brochure.pdf" download className="btn glass hover-lift btn-ripple-white" style={{ color: 'var(--color-primary)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Download size={24} />
              Download Brochure PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
