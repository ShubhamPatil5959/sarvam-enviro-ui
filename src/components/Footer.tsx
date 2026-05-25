import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '4rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'white', padding: '0.25rem', borderRadius: '8px' }}>
              <img src="/SARVAM_LOGO_PL.png" alt="Sarvam Enviro Logo" style={{ height: '200px', objectFit: 'contain' }} />
            </div>
          </div>
          <p style={{ opacity: 0.7, lineHeight: 1.8, marginBottom: '1.5rem' }}>Building a cleaner, greener, and sustainable future.</p>
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
          <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Head Office: Pimpari Chinchwad, Pune- 411027</p>
          <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>+91 91120 06989</p>
          <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>+91 9763830668</p>
          <p style={{ opacity: 0.7 }}>info@sarvamenviro.com</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '0.05em' }}>FOLLOW US ON</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li>
              <a href="https://www.linkedin.com/company/sarvam-enviro-solutions" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.9 }} className="footer-link-premium">
                <div style={{ background: 'white', color: '#0A66C2', width: '32px', height: '32px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/sarvamenviro" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.9 }} className="footer-link-premium">
                <div style={{ background: 'white', color: '#1877F2', width: '32px', height: '32px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Facebook</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@sarvamenviro.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.9 }} className="footer-link-premium">
                <div style={{ background: '#E3F2FD', color: '#1976D2', width: '32px', height: '32px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>info@sarvamenviro.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Sarvam Enviro Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
