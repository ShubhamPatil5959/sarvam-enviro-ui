import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { getServiceBySlug, services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const scrollRef = useScrollReveal();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return (
      <div className="section container page-transition" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="h1" style={{ marginBottom: '1.5rem' }}>Service Not Found</h1>
        <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.15rem' }}>The service you're looking for doesn't exist.</p>
        <Link to="/services" className="btn btn-primary">← Back to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  // Get other services for the "More Services" section
  const otherServices = services.filter(s => s.slug !== service.slug);

  return (
    <div ref={scrollRef} className="page-transition">
      {/* Hero Banner */}
      <section className="section" style={{ 
        background: `linear-gradient(135deg, ${service.color === 'var(--color-primary)' ? 'rgba(16,185,129,0.08)' : 'rgba(14,165,233,0.08)'}, transparent)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          {/* Back button */}
          <Link 
            to="/services" 
            className="reveal"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-text-muted)', 
              fontSize: '0.95rem',
              marginBottom: '2rem',
              transition: 'color 0.3s ease',
            }}
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="reveal" style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div className="icon-container animate-pulse-glow" style={{ width: '80px', height: '80px' }}>
                  <Icon size={42} color={service.color} />
                </div>
                <h1 className="h1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{service.title}</h1>
              </div>
              <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '700px' }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.5rem' }}>
            <div className="glow-card reveal-scale">
              <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={`/${service.slug}-1.jpg`} 
                  alt={`${service.title} 1`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span style="color: var(--color-text-muted); opacity: 0.5;">Image Placeholder: save as /' + service.slug + '-1.jpg</span>';
                    }
                  }} 
                />
              </div>
            </div>
            <div className="glow-card reveal-scale" style={{ animationDelay: '0.2s' }}>
              <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={`/${service.slug}-2.jpg`} 
                  alt={`${service.title} 2`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span style="color: var(--color-text-muted); opacity: 0.5;">Image Placeholder: save as /' + service.slug + '-2.jpg</span>';
                    }
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Key <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Core areas of our {service.title.toLowerCase()} services
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '1.5rem' }} className="stagger-children">
            {service.features.map((feature, i) => (
              <div key={i} className="glow-card reveal-scale" style={{ textAlign: 'center' }}>
                <div className="glow-card-inner" style={{ padding: '2rem 1.5rem' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${service.color === 'var(--color-primary)' ? 'rgba(16,185,129,0.15)' : 'rgba(14,165,233,0.15)'}, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: service.color === 'var(--color-primary)' ? '#10b981' : '#0ea5e9',
                  }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '550px', margin: '0 auto 3rem' }}>
            Comprehensive range of services under {service.title.toLowerCase()}
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '1rem' }} className="stagger-children">
              {service.details.map((detail, i) => (
                <div 
                  key={i} 
                  className="reveal glass hover-lift"
                  style={{ 
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <CheckCircle2 
                    size={22} 
                    color={service.color === 'var(--color-primary)' ? '#10b981' : '#0ea5e9'} 
                    style={{ flexShrink: 0, marginTop: '2px' }} 
                  />
                  <span style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--color-text)' }}>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="container reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Need Help With {service.title}?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 2rem', opacity: 0.9 }}>
            Our team of experts is ready to help you with all your {service.title.toLowerCase()} needs. Get in touch today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn glass btn-ripple-white" style={{ color: 'var(--color-primary)', padding: '1rem 2rem', fontSize: '1.05rem' }}>
              Contact Us
            </Link>
            <a href="/Sarvam%20Enviro%20Brochure.pdf" download="Sarvam Enviro Brochure.pdf" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 2rem', fontSize: '1.05rem' }}>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section">
        <div className="container">
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Explore More <span className="text-gradient">Services</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: '1.5rem' }} className="stagger-children">
            {otherServices.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link 
                  key={other.slug} 
                  to={`/services/${other.slug}`}
                  className="glow-card reveal-scale"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="glow-card-inner" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                    <div className="icon-container" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                      <OtherIcon size={26} color={other.color === 'var(--color-primary)' ? '#10b981' : '#0ea5e9'} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{other.title}</h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Learn more →</span>
                    </div>
                    <ArrowRight size={20} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
