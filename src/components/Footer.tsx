import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '4rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Sarvam Enviro</h3>
          <p className="text-muted" style={{ opacity: 0.8 }}>Building a cleaner, greener, and sustainable future.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/about" style={{ opacity: 0.8 }}>About Us</Link></li>
            <li><Link to="/services" style={{ opacity: 0.8 }}>Services</Link></li>
            <li><Link to="/contact" style={{ opacity: 0.8 }}>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Contact</h3>
          <p className="text-muted" style={{ opacity: 0.8 }}>Nagpur & Pune</p>
          <p className="text-muted" style={{ opacity: 0.8 }}>+91 8208 567 560</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="text-muted" style={{ opacity: 0.8 }}>© {new Date().getFullYear()} Sarvam Enviro Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
