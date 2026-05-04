import { Download, Award, Users, FlaskConical, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal, useAnimatedCounter, useTypewriter } from '../hooks/useAnimations';
import Particles from '../components/Particles';
import landingBg from '../assets/LandingPage.jpg';
import { services } from '../data/services';

function CounterCard({ end, label, icon: Icon }: { end: number; label: string; icon: React.ElementType }) {
  const counterRef = useAnimatedCounter(end, 2200);
  return (
    <div className="counter-item reveal-scale" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '0.75rem', opacity: 0.8 }}>
        <Icon size={32} color="var(--color-primary)" />
      </div>
      <div className="counter-value">
        <span ref={counterRef}>0</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const scrollRef = useScrollReveal();
  const typewriterRef = useTypewriter('Transformation Through Sustainability.', 70);

  return (
    <div ref={scrollRef} className="page-transition">
      {/* Hero Section */}
      <section className="hero-section section" style={{ minHeight: '100vh', marginTop: '-70px', paddingTop: '70px', display: 'flex', alignItems: 'center', color: 'white', position: 'relative' }}>
        {/* Background image */}
        <div className="hero-bg" style={{ backgroundImage: `url(${landingBg})` }} />
        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Floating particles */}
        <Particles count={25} />

        {/* Decorative blobs */}
        <div className="hero-blob" style={{ width: '500px', height: '500px', top: '-150px', right: '-100px' }} />
        <div className="hero-blob" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', animationDelay: '-5s' }} />

        {/* Content */}
        <div className="container hero-content" style={{ textAlign: 'center' }}>
          <h1 className="h1 animate-blur-in" style={{ marginBottom: '1.5rem' }}>
            <span ref={typewriterRef} className="typewriter-cursor" style={{
              background: 'linear-gradient(to right, #fff, #6ee7b7, #fff)',
              backgroundSize: '200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'backgroundPan 4s linear infinite'
            }}></span>
          </h1>
          <p className="h3 animate-blur-in delay-200" style={{ marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.9)', fontWeight: 400, fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            Comprehensive environmental management and sustainability solutions for industries across India.
          </p>
          <div className="animate-blur-in delay-400" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary btn-ripple" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Our Services</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', fontSize: '1.1rem', padding: '1rem 2rem' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="section counter-section" style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))', gap: '1rem' }} className="stagger-children">
            <CounterCard end={15} label="Years of Experience" icon={Award} />
            <CounterCard end={500} label="Projects Delivered" icon={Building2} />
            <CounterCard end={1000} label="Lab Tests Conducted" icon={FlaskConical} />
            <CounterCard end={200} label="Happy Clients" icon={Users} />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Expertise</h2>
          <p className="text-muted reveal t-delay-100" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            End-to-end environmental solutions tailored for your industry
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '1.5rem' }} className="stagger-children">

            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.slug}`} key={service.slug} className="glow-card reveal-scale" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="glow-card-inner card-border-animated" style={{ height: '100%' }}>
                    <div className="icon-container animate-float" style={{ marginBottom: '1.5rem', animationDelay: `${index * 0.5}s` }}>
                      <Icon size={36} color={service.color} />
                    </div>
                    <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{service.title}</h3>
                    <p className="text-muted">{service.description.substring(0, 80)}...</p>
                  </div>
                </Link>
              );
            })}

          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Particles count={15} colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.1)']} />
        <div className="container reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Company Profile</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
            Download our comprehensive corporate brochure to learn more about our services, methodologies, and commitment to the environment.
          </p>
          <div style={{ padding: '1rem' }}>
            <a href="/Sarvam%20Brochure_latest.pdf" download="Sarvam Brochure_latest.pdf" className="btn glass btn-ripple-white" style={{ color: 'var(--color-primary)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Download size={24} />
              Download Brochure PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
