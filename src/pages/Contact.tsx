export default function Contact() {
  return (
    <div className="section container animate-fade-in">
      <h1 className="h1 animate-slide-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>Contact Us</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Contact Info */}
        <div className="animate-slide-up delay-100">
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass hover-lift" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Office Locations</strong>
              <p className="text-muted">Nagpur & Pune</p>
            </div>
            <div className="glass hover-lift" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</strong>
              <p className="text-muted">+91 8208 567 560</p>
            </div>
            <div className="glass hover-lift" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</strong>
              <p className="text-muted">info@sahyadrienviro.com (Placeholder)</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass hover-lift animate-slide-up delay-200" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: 'rgba(255,255,255,0.5)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
              <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: 'rgba(255,255,255,0.5)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
              <textarea placeholder="How can we help you?" rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: 'rgba(255,255,255,0.5)', outline: 'none' }} />
            </div>
            <button type="button" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
