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
        position: 'relative',
        overflow: 'hidden',
        color: 'white' // Assuming a dark overlay on the background image
      }}>
        {/* Background Image Container */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          backgroundColor: '#1a1a1a' // Fallback color
        }}>
          <img
            src={`/${service.slug}-bg.jpg`}
            alt={`${service.title} Background`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            onError={(e) => {
              // Hide image if it doesn't exist, rely on gradient fallback
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.style.background = `linear-gradient(135deg, ${service.color === 'var(--color-primary)' ? 'rgba(16,185,129,0.8)' : 'rgba(14,165,233,0.8)'}, rgba(0,0,0,0.8))`;
              }
            }}
          />
          {/* Dark Overlay for better text readability */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
          }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', textAlign: 'left' }}>
            <div className="reveal" style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div className="icon-container animate-pulse-glow" style={{ width: 'clamp(60px, 10vw, 80px)', height: 'clamp(60px, 10vw, 80px)' }}>
                  <Icon size={40} color={service.color} />
                </div>
                <h1 className="h1" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)', margin: 0 }}>{service.title}</h1>
              </div>
              <p className="text-muted" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: 1.8, maxWidth: '700px' }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Key Features */}
      <section className="section">
        <div className="container">
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            More <span className="text-gradient">About</span>
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

      {/* Detailed Services (Tree Diagram Layout) */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)', overflow: 'hidden' }}>
        <style>{`
          .tree-container {
            width: 100%;
            padding: 2rem 1rem 4rem;
            position: relative;
          }
          .tree-wrapper {
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
          }
          /* Center Vertical Line */
          .tree-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            background: linear-gradient(to bottom, var(--color-primary), transparent);
            border-radius: 4px;
            z-index: 0;
          }
          .tree-parent-node {
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
            color: white;
            padding: 1.5rem 3rem;
            border-radius: 12px;
            font-weight: bold;
            font-size: 1.5rem;
            position: relative;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            margin: 0 auto 4rem;
            text-align: center;
            z-index: 2;
            width: fit-content;
          }
          .tree-children-container {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            position: relative;
            z-index: 1;
          }
          .tree-child-wrapper {
            display: flex;
            justify-content: flex-end;
            width: 50%;
            position: relative;
          }
          /* Alternate left/right */
          .tree-child-wrapper:nth-child(odd) {
            align-self: flex-start;
            justify-content: flex-end;
            padding-right: 3rem;
          }
          .tree-child-wrapper:nth-child(even) {
            align-self: flex-end;
            justify-content: flex-start;
            padding-left: 3rem;
          }
          /* Connector dots */
          .tree-child-wrapper::before {
            content: '';
            position: absolute;
            top: 50px; /* Align with image center somewhat */
            width: 20px;
            height: 20px;
            background: white;
            border: 4px solid var(--color-primary);
            border-radius: 50%;
            z-index: 2;
          }
          .tree-child-wrapper:nth-child(odd)::before {
            right: -10px;
          }
          .tree-child-wrapper:nth-child(even)::before {
            left: -10px;
          }
          /* Connector lines pointing to the card */
          .tree-child-wrapper::after {
            content: '';
            position: absolute;
            top: 59px;
            width: 3rem;
            height: 2px;
            background: var(--color-primary);
            z-index: 1;
          }
          .tree-child-wrapper:nth-child(odd)::after {
            right: 0;
          }
          .tree-child-wrapper:nth-child(even)::after {
            left: 0;
          }

          .tree-child-node {
            width: 100%;
            max-width: 400px;
            position: relative;
            z-index: 2;
          }

          @media (max-width: 1024px) {
            .tree-child-wrapper {
              padding-right: 2rem;
            }
            .tree-child-wrapper:nth-child(even) {
              padding-left: 2rem;
            }
          }

          @media (max-width: 768px) {
            /* Force visibility on mobile in case scroll sensor fails */
            .reveal, .reveal-scale, .tree-container, .tree-child-wrapper {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
            }

            .tree-wrapper::before {
              left: 20px;
              transform: none;
            }
            .tree-parent-node {
              padding: 1.25rem 2rem;
              font-size: 1.25rem;
              margin-bottom: 3rem;
              width: calc(100% - 40px);
              margin-left: 20px;
              text-align: left;
            }
            .tree-children-container {
              gap: 2rem;
            }
            .tree-child-wrapper, .tree-child-wrapper:nth-child(odd), .tree-child-wrapper:nth-child(even) {
              width: 100%;
              align-self: flex-end;
              justify-content: flex-start;
              padding-left: 50px;
              padding-right: 0;
            }
            .tree-child-wrapper::before {
              left: 10px !important;
              right: auto !important;
              top: 40px;
            }
            .tree-child-wrapper::after {
              left: 20px !important;
              right: auto !important;
              width: 30px;
              top: 49px;
            }
            .tree-child-node {
              max-width: 100%;
            }
          }

          @media (max-width: 480px) {
            .tree-child-wrapper {
              padding-left: 40px;
            }
            .tree-child-wrapper::before {
              width: 16px;
              height: 16px;
              left: 12px !important;
            }
            .tree-child-wrapper::after {
              width: 20px;
              left: 20px !important;
            }
          }
        `}</style>

        <div className="container" style={{ maxWidth: '100%' }}>
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '550px', margin: '0 auto 1rem' }}>
            Comprehensive range of services under {service.title.toLowerCase()}
          </p>

          <div className="tree-container reveal">
            <div className="tree-wrapper">

              {/* Parent Node */}
              <div className="tree-parent-node">
                {service.title}
              </div>

              {/* Children Nodes */}
              <div className="tree-children-container">
                {service.details.map((detail, i) => {
                  // Parse the detail string to separate title and description if separated by a colon
                  const parts = detail.split(':');
                  const hasTitle = parts.length > 1 && parts[0].length < 60;
                  const detailTitle = hasTitle ? parts[0].trim() : `Service ${i + 1}`;
                  const detailDesc = hasTitle ? parts.slice(1).join(':').trim() : detail;

                  // Generate a safe filename based on the title or index
                  // Some services use indexed names because the files are named like service-slug-detail-1.jpg
                  const indexedServices = ['compliance-approvals', 'environmental-monitoring', 'industrial-trading'];
                  const useIndexedNames = indexedServices.includes(service.slug);
                  const imageFilename = (hasTitle && !useIndexedNames)
                    ? `/${detailTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.jpg`
                    : `/${service.slug}-detail-${i + 1}.jpg`;

                  return (
                    <div key={i} className="tree-child-wrapper reveal-scale">
                      <div className="tree-child-node">
                        <div
                          className="glass hover-lift glow-card"
                          style={{
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            background: 'white'
                          }}
                        >
                          {/* Image Section */}
                          <div style={{
                            width: '100%',
                            height: '200px',
                            backgroundColor: 'rgba(0,0,0,0.03)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}>
                            {/* Blurred background for a premium look if image is contained */}
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundImage: `url(${imageFilename})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              filter: 'blur(10px) opacity(0.3)',
                              transform: 'scale(1.1)'
                            }} />

                            <img
                              src={imageFilename}
                              alt={detailTitle}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                position: 'relative',
                                zIndex: 1
                              }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                  const span = document.createElement('span');
                                  span.style.color = 'var(--color-text-muted)';
                                  span.style.fontSize = '0.85rem';
                                  span.style.padding = '1rem';
                                  span.style.textAlign = 'center';
                                  span.style.position = 'relative';
                                  span.style.zIndex = '2';
                                  span.innerText = `Image\nSave as: ${imageFilename}`;
                                  e.currentTarget.parentElement.appendChild(span);
                                }
                              }}
                            />
                          </div>

                          {/* Content Section */}
                          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                              <CheckCircle2
                                size={22}
                                color={service.color === 'var(--color-primary)' ? '#10b981' : '#0ea5e9'}
                                style={{ flexShrink: 0, marginTop: '0.2rem' }}
                              />
                              <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: 'var(--color-text)',
                                lineHeight: 1.4,
                                margin: 0
                              }}>
                                {detailTitle}
                              </h3>
                            </div>
                            <p style={{
                              fontSize: '0.95rem',
                              lineHeight: 1.6,
                              color: 'var(--color-text-muted)',
                              margin: 0,
                              opacity: 0.9
                            }}>
                              {detailDesc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
            <a href="/Sarvam%20Enviro%20Solutions%20Pvt.%20Ltd.%20Brochure..pdf" download="Sarvam Enviro Solutions Pvt. Ltd. Brochure..pdf" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 2rem', fontSize: '1.05rem' }}>
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
