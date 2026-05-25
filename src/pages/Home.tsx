import React, { useState, useEffect } from 'react';
import { Download, Award, Users, FlaskConical, Building2, ArrowRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal, useAnimatedCounter, useTypewriter } from '../hooks/useAnimations';
import Particles from '../components/Particles';
import { services } from '../data/services';

function CounterCard({ end, label, icon: Icon, suffix = '+' }: { end: number; label: string; icon: React.ElementType; suffix?: string }) {
  const counterRef = useAnimatedCounter(end, 2200);
  return (
    <div className="counter-item reveal-scale" style={{ position: 'relative' }}>
      <div style={{ marginBottom: '0.75rem', opacity: 0.8 }}>
        <Icon size={32} color="var(--color-primary)" />
      </div>
      <div className="counter-value">
        <span ref={counterRef}>0</span>{suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const scrollRef = useScrollReveal();
  const typewriterRef = useTypewriter('Synergy for Green Future.', 70);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentHero, setCurrentHero] = useState(0);

  const slideshowImages = [
    { src: '/Waste-Management.jpg', alt: 'Waste Management Solutions' },
    { src: '/Renewable-Energy.jpg', alt: 'Renewable Energy Projects' },
    { src: '/Nature-Restoration.jpg', alt: 'Nature Restoration Initiatives' },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const heroImages = [
    '/hero-3.png',
    '/rainwater-harvesting.jpg',
    '/hero-1.png',
    '/hero-2.png',
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <div ref={scrollRef} className="page-transition">
      {/* Hero Section */}
      <section
        className="hero-section section"
        onMouseMove={handleMouseMove}
        style={{
          minHeight: '100vh',
          marginTop: '-70px',
          paddingTop: '70px',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background slider */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg"
            style={{
              backgroundImage: `url(${img})`,
              transform: `scale(1.1) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
              transition: 'transform 0.2s ease-out, opacity 1.5s ease-in-out',
              opacity: currentHero === i ? 1 : 0,
              zIndex: currentHero === i ? 1 : 0
            }}
          />
        ))}
        {/* Overlay */}
        <div className="hero-overlay" style={{ zIndex: 2 }} />

        {/* Floating particles */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          <Particles count={25} />
        </div>

        {/* Decorative blobs */}
        <div className="hero-blob" style={{
          width: '500px',
          height: '500px',
          top: '-150px',
          right: '-100px',
          transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)`,
          transition: 'transform 0.3s ease-out',
          zIndex: 3
        }} />
        <div className="hero-blob" style={{
          width: '400px',
          height: '400px',
          bottom: '-100px',
          left: '-100px',
          animationDelay: '-5s',
          transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)`,
          transition: 'transform 0.4s ease-out',
          zIndex: 3
        }} />

        {/* Content */}
        <div className="container hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
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
            <Link to="/services" className="btn btn-primary btn-ripple hover-lift" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Our Services</Link>
            <Link to="/contact" className="btn btn-outline hover-lift" style={{ borderColor: 'white', color: 'white', fontSize: '1.1rem', padding: '1rem 2rem' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section style={{
        background: 'linear-gradient(90deg, var(--color-primary-dark), var(--color-primary), var(--color-secondary))',
        padding: '0.9rem 1rem',
        textAlign: 'center',
      }}>
        <p style={{ color: 'white', fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', margin: 0, letterSpacing: '0.01em' }}>
          📞 For a <strong>Free Consultation</strong>, call us today:{' '}
          <a href="tel:9763830668" style={{ color: 'white', textDecoration: 'underline', fontWeight: 800, letterSpacing: '0.05em' }}>
            9763830668
          </a>
        </p>
      </section>

      {/* Who We Are Intro Section */}
      <section className="section" style={{ background: 'white', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <div className="reveal-left" style={{ flex: '1 1 500px' }}>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>
                Who We <span className="text-gradient">Are</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Sarvam Enviro Solutions is a one-stop destination for environmental and sustainability needs. We believe the future of business and the planet are deeply interconnected. We help organizations move beyond compliance to create meaningful, measurable impact through sustainable water management and circular economy strategies.
              </p>
              <Link to="/about" className="btn btn-primary btn-ripple hover-lift" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 2rem' }}>
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="reveal-right" style={{ flex: '1 1 400px', position: 'relative', height: '420px' }}>
              <div className="glow-card" style={{ padding: '0', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', height: '100%' }}>
                <div className="glow-card-inner" style={{ padding: '0', height: '100%' }}>
                  {slideshowImages.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: currentSlideIndex === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="section counter-section" style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)', paddingTop: '3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6rem' }} className="stagger-children">
            <CounterCard end={15} label="Years of Experience" icon={Award} />
            <CounterCard end={60} label="Projects Delivered" icon={Building2} />
            {false && <CounterCard end={1000} label="Lab Tests Conducted" icon={FlaskConical} />}
            {false && <CounterCard end={200} label="Happy Clients" icon={Users} />}
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

            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.slug}`} key={service.slug} className="glow-card reveal-scale" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="glow-card-inner card-border-animated" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="icon-container animate-float" style={{ marginBottom: '1.5rem', animationDelay: `${index * 0.5}s` }}>
                      <Icon size={36} color={service.color} />
                    </div>
                    <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{service.title}</h3>
                    <p className="text-muted" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.5rem' }}>
                      {service.description}
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                      Learn More
                      <ArrowRight size={18} style={{ transition: 'transform 0.3s ease' }} className="learn-more-arrow" />
                    </div>
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

      {/* Leadership Preview Section */}
      {false && (
        <section className="section" style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>Our <span className="text-gradient">Leadership</span></h2>
            <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
              Meet the experts driving transformation through science and sustainability.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }} className="stagger-children">
              {[
                { name: 'Dr. Ram Konale', role: 'Director- Technical and Compliance', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop', linkedin: '#' },
                { name: 'Mr. Shreyash Thorat', role: 'Director- Business Growth & Strategy', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop', linkedin: '#' }
              ].map((member, i) => (
                <div key={i} className="glow-card reveal-scale leadership-card" style={{ width: 'min(350px, 100%)' }}>
                  <div className="glow-card-inner card-border-animated" style={{ padding: '3.5rem 2.5rem', textAlign: 'center', height: '100%' }}>
                    <div style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      margin: '0 auto 2rem',
                      position: 'relative',
                      padding: '5px',
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                      boxShadow: 'var(--shadow-xl)',
                    }}>
                      <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid white' }}>
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          className="leadership-img"
                        />
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text)' }}>{member.name}</h3>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{member.role}</p>

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#0A66C2',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      padding: '0.6rem 1.2rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(10, 102, 194, 0.08)',
                      border: '1px solid rgba(10, 102, 194, 0.1)'
                    }} className="hover-lift">
                      <Linkedin size={18} />
                      Connect
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
            .leadership-card:hover .leadership-img {
              transform: scale(1.1);
            }
          `}</style>

            <div className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link to="/about#team" className="btn btn-outline" style={{ fontSize: '1.05rem', padding: '0.8rem 2rem' }}>Meet the Full Team</Link>
            </div>
          </div>
        </section>
      )}

      {/* Brochure Download Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Particles count={15} colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.1)']} />
        <div className="container reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Company Profile</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
            Download our comprehensive corporate brochure to learn more about our services, methodologies, and commitment to the environment.
          </p>
          <div style={{ padding: '1rem' }}>
            <a href="/Sarvam%20Enviro%20Solutions%20Pvt.%20Ltd.%20Brochure..pdf" download="Sarvam Enviro Solutions Pvt. Ltd. Brochure..pdf" className="btn glass btn-ripple-white" style={{ color: 'var(--color-primary)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Download size={24} />
              Download Brochure PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
