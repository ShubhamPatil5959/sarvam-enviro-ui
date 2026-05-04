import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '4rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'white', padding: '0.25rem', borderRadius: '8px' }}>
              <img src="/SARVAM_LOGO.png" alt="Sarvam Enviro Logo" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em' }}>Sarvam Enviro</h3>
          </div>
          <p style={{ opacity: 0.7, lineHeight: 1.8 }}>Building a cleaner, greener, and sustainable future.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" className="footer-link" style={{ opacity: 0.7 }}>About Us</Link></li>
            <li><Link to="/services" className="footer-link" style={{ opacity: 0.7 }}>Services</Link></li>
            <li><Link to="/contact" className="footer-link" style={{ opacity: 0.7 }}>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Contact</h3>
          <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Head Office: Pune</p>
          <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>+91 91120 06989</p>
          <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>+91 82085 67560</p>
          <p style={{ opacity: 0.7 }}>info@sarvamenviro.com</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Sarvam Enviro Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
