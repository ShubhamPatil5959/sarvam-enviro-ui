import { useState } from 'react';
import { Target, Lightbulb, Factory, ShieldCheck, Award, TreePine, Zap, ChevronDown, BarChart2, FlaskConical, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { services } from '../data/services';

const whyPartner = [
  {
    icon: FlaskConical,
    title: 'Science-Driven Expertise',
    desc: 'We combine technical knowledge with data-driven insights to deliver reliable and effective environmental solutions.',
  },
  {
    icon: Target,
    title: 'End-to-End Implementation',
    desc: 'From assessment and design to execution and monitoring, we provide complete, integrated sustainability and water management solutions under one roof.',
  },
  {
    icon: Zap,
    title: 'Innovative Technologies',
    desc: 'We leverage advanced tools and modern methodologies to create efficient, future-ready environmental strategies.',
  },
  {
    icon: BarChart2,
    title: 'Measurable Impact',
    desc: 'Our solutions deliver tangible results — improving compliance, optimizing resources, and generating real business value.',
  },
  {
    icon: TreePine,
    title: 'Scalable & Sustainable Solutions',
    desc: 'We build flexible, long-term solutions that grow with your business while ensuring environmental responsibility.',
  },
];

const strategicApproach = [
  { step: '01', title: 'Analyse', desc: 'We begin with in-depth analysis to understand your requirements and identify opportunities.' },
  { step: '02', title: 'Design', desc: 'We design customized, practical solutions integrating sustainability, compliance, and resource efficiency.' },
  { step: '03', title: 'Execute', desc: 'Our team ensures seamless execution using advanced technologies and proven methodologies.' },
  { step: '04', title: 'Optimise', desc: 'We provide continuous support through monitoring and optimization to drive long-term sustainable success.' },
];

const industries = [
  'Sugar & Distillery',
  'Pharmaceuticals',
  'Chemical & Petrochemicals',
  'Food & Beverage',
  'Textile & Dyeing',
  'Automobile & Engineering',
  'Hospitals & Healthcare',
  'Real Estate & Infrastructure',
];

export default function About() {
  const scrollRef = useScrollReveal();
  const [openService, setOpenService] = useState<string | null>(null);

  const toggle = (slug: string) => setOpenService(prev => (prev === slug ? null : slug));

  return (
    <div ref={scrollRef} className="page-transition">
      <div className="section container">

        {/* Page Title */}
        <h1 className="h1 animate-blur-in" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          About <span className="text-gradient">Sarvam Enviro</span>
        </h1>
        <p className="text-muted animate-blur-in delay-200" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '650px', margin: '0 auto 4rem', fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-primary)' }}>
          "Synergy for Green Future"
        </p>

        {/* Who We Are */}
        <div className="glow-card reveal" style={{ marginBottom: '4rem' }}>
          <div className="glow-card-inner card-border-animated" style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-container animate-pulse-glow">
                <Award size={36} color="var(--color-primary)" />
              </div>
              <h2 className="h2" style={{ color: 'var(--color-primary)' }}>Who We Are</h2>
            </div>
            <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.25rem' }}>
              At <strong style={{ color: 'var(--color-text)' }}>Sarvam Enviro Solutions Pvt. Ltd.</strong>, our core purpose is to be a one-stop solution for all environmental and sustainability needs. We believe the future of business and the planet are deeply interconnected — in a world facing climate change, water scarcity, and resource challenges, we help organizations move beyond compliance to create meaningful, measurable impact.
            </p>
            <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
              Our approach transforms sustainability from an obligation into a strategic opportunity for growth and resilience. We partner with forward-thinking organizations to deliver end-to-end solutions across <strong style={{ color: 'var(--color-text)' }}>sustainable water management, carbon credit monetization, circular economy, and environmental compliance</strong>. With water at the core of our approach and sustainability at the heart of everything we do, we enable businesses to optimize resources, enhance performance, and build a more responsible, future-ready enterprise.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem', marginBottom: '4rem' }} className="stagger-children">
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

          <div className="glow-card reveal-right">
            <div className="glow-card-inner" style={{ padding: '3rem', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="icon-container animate-float" style={{ animationDelay: '1s' }}>
                  <Lightbulb size={36} color="var(--color-secondary)" />
                </div>
                <h2 className="h2">Our Mission</h2>
              </div>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                To empower industries with cutting-edge waste management, water treatment, and compliance strategies that drive operational efficiency while protecting the planet for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Strategic Approach */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Our Strategic <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '550px', margin: '0 auto 3rem' }}>
            A structured, proven process from discovery to long-term success
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '1.5rem' }} className="stagger-children">
            {strategicApproach.map((item) => (
              <div key={item.step} className="glow-card reveal-scale" style={{ textAlign: 'center' }}>
                <div className="glow-card-inner" style={{ padding: '2rem 1.5rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'white',
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Sarvam */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Why Partner With <span className="text-gradient">Sarvam</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '550px', margin: '0 auto 3rem' }}>
            Five pillars that make us your ideal environmental partner
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '1.5rem' }} className="stagger-children">
            {whyPartner.map((item, i) => (
              <div key={i} className="glow-card reveal-scale">
                <div className="glow-card-inner" style={{ padding: '2rem', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="icon-container" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                      <item.icon size={24} color="var(--color-primary)" />
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.title}</h3>
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
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
                  border: '1px solid rgba(14, 165, 233, 0.1)',
                }}>
                  <Zap size={18} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div style={{ marginBottom: '5rem' }} id="team">
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Meet Our <span className="text-gradient">Leadership Team</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
            Guided by experts committed to environmental excellence and sustainable innovation.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }} className="stagger-children">
            {[
              {
                name: 'Dr. Ram Konale',
                role: 'Director- Technical and Compliance',
                bio: 'A visionary leader with extensive experience in driving sustainable environmental solutions and corporate strategy.',
                linkedin: '#',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop'
              },
              {
                name: 'Mr. Shreyash Thorat',
                role: 'Director- Business Growth & Strategy',
                bio: 'An esteemed expert providing strategic guidance on advanced environmental technologies and regulatory compliance frameworks.',
                linkedin: '#',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop'
              }
            ].map((member, i) => (
              <div key={i} className="glow-card reveal-scale team-card-container" style={{ textAlign: 'center', width: 'min(420px, 100%)' }}>
                <div className="glow-card-inner card-border-animated" style={{ padding: '3.5rem 2.5rem', height: '100%' }}>
                  <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    margin: '0 auto 2rem',
                    padding: '5px',
                    boxShadow: 'var(--shadow-xl)',
                    position: 'relative'
                  }}>
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid white' }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        className="team-card-img"
                      />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text)' }}>{member.name}</h3>
                  <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{member.role}</p>
                  <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>{member.bio}</p>

                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#0A66C2',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'transform 0.3s ease, color 0.3s ease, background 0.3s ease',
                    padding: '0.5rem 1.2rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(10, 102, 194, 0.08)'
                  }} className="hover-lift linkedin-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            .team-card-container:hover .team-card-img {
              transform: scale(1.1);
            }
            .linkedin-btn:hover {
              background: rgba(10, 102, 194, 0.15) !important;
            }
          `}</style>
        </div>

        {/* Trust Badges */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Our Strength</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }} className="stagger-children">
            {[
              { icon: ShieldCheck, label: 'Regulatory Expertise' },
              { icon: Award, label: 'Certified Professionals' },
              { icon: TreePine, label: 'Sustainable Approach' },
              { icon: Target, label: 'Results-Driven' },
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

        {/* Services Accordion */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted reveal" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '550px', margin: '0 auto 3rem' }}>
            Click on any service to explore what we offer
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {services.map((service) => {
              const Icon = service.icon;
              const isOpen = openService === service.slug;
              return (
                <div
                  key={service.slug}
                  className="glow-card reveal"
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onClick={() => toggle(service.slug)}
                >
                  <div className="glow-card-inner" style={{ padding: '1.75rem 2rem' }}>
                    {/* Header row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                      <div className="icon-container" style={{ width: '52px', height: '52px', flexShrink: 0 }}>
                        <Icon size={26} color={service.color === 'var(--color-primary)' ? '#10b981' : '#0ea5e9'} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>{service.title}</h3>
                        {!isOpen && (
                          <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0, display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {service.description}
                          </p>
                        )}
                      </div>
                      <ChevronDown
                        size={22}
                        color="var(--color-text-muted)"
                        style={{
                          flexShrink: 0,
                          transition: 'transform 0.35s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </div>

                    {/* Expanded content */}
                    {isOpen && (
                      <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '1.5rem' }}>
                        <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                          {service.description}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '0.75rem' }}>
                          {service.details.map((detail, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                              <CheckCircle2 size={18} color={service.color === 'var(--color-primary)' ? '#10b981' : '#0ea5e9'} style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
