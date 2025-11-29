
// pages/index.js
import { useState } from 'react';
import Pyramid from '../components/Pyramid';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Digital Support',
    message: '',
    details: ''
  });
  const [status, setStatus] = useState(null);
  const services = [
    'Digital Support',
    'Account Recovery Assistance',
    'Password Reset Support',
    'Login & Verification Help',
    'Device Setup Guidance',
    'Email Setup & Troubleshooting',
    'Payment Troubleshooting Guidance',
    'App / Website Navigation Help',
    'Remote Digital Help (General)'
  ];

  function updateField(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (res.ok) {
      setStatus('sent');
      setForm({ name:'', email:'', phone:'', serviceCategory:'Digital Support', message:'', details:'' });
    } else {
      setStatus('error: ' + (data.error || 'Unknown'));
    }
  }

  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', backgroundColor:'#0f7a46', minHeight:'100vh', color:'#fff' }}>
      <header style={{ display:'flex', justifyContent:'flex-end', padding:'22px 40px' }}>
        <nav>
          <a href="#" style={{ color:'#fff', marginRight:20 }}>Home</a>
          <a href="#contact" style={{ color:'#fff', marginRight:20 }}>Contact Us</a>
          <div style={{ display:'inline-block', position:'relative' }}>
            <button style={{ background:'#0b4f2e', color:'#fff', border:'none', padding:'8px 12px', borderRadius:6 }}>Our Services ▾</button>
            <div style={{ position:'absolute', right:0, marginTop:8, background:'#fff', color:'#000', padding:10, borderRadius:6, display:'none' }}>
              {/* optional dropdown */}
            </div>
          </div>
        </nav>
      </header>

      <main style={{ display:'flex', gap:30, alignItems:'center', padding:'40px 6%', maxWidth:1200, margin:'0 auto' }}>
        <section style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:18 }}>
            <Pyramid size={120} />
            <div>
              <div style={{ fontSize:22, fontWeight:700, color:'#ffd24d' }}>SURU DIGITAL CARE</div>
              <div style={{ color:'#e6f3ea', marginTop:6 }}>Digital Support & Assistance Services</div>
            </div>
          </div>

          <h1 style={{ fontSize:42, margin:'24px 0', color:'#fff' }}>DIGITAL SUPPORT & ASSISTANCE SERVICES</h1>

          <p style={{ fontSize:18, lineHeight:1.6, color:'#e6f3ea' }}>
            We provide remote digital assistance, online consulting & guidance, technical help, account support,
            and troubleshooting services. All services are delivered online and instantly — customers contact us
            through the form or the contact buttons.
          </p>

          <div style={{ marginTop:24, display:'flex', gap:12, alignItems:'center' }}>
            <a href="https://paypal.me/SuruSilver" target="_blank" rel="noreferrer"
               style={{ background:'#2fb6ff', color:'#04363a', padding:'12px 18px', borderRadius:10, textDecoration:'none', fontWeight:700 }}>Pay with PayPal</a>

            <a href="mailto:SuruDigitalCare@gmail.com" style={{ background:'#133a1f', color:'#fff', padding:'12px 18px', borderRadius:10, textDecoration:'none' }}>
              Email Us
            </a>

            <a href="https://wa.me/00918866362533?text=Hello%20SuruDigitalCare" target="_blank" rel="noreferrer"
               style={{ background:'#22c55e', color:'#04363a', padding:'12px 18px', borderRadius:10, textDecoration:'none', fontWeight:700 }}>
              WhatsApp
            </a>
          </div>

          <div style={{ marginTop:20, color:'#fff', textDecoration:'underline' }}>
            <a href="mailto:SuruDigitalCare@gmail.com" style={{ color:'#fff' }}>SuruDigitalCare@gmail.com</a>
          </div>
        </section>

        <aside id="contact" style={{ width:380 }}>
          <div style={{ background:'#ffd24d', borderRadius:12, padding:18, boxShadow:'0 12px 0 rgba(0,0,0,0.12)' }}>
            <h2 style={{ textAlign:'center', marginTop:0, color:'#063f27' }}>Contact Us</h2>

            <form onSubmit={handleSubmit} style={{ display:'grid', gap:10 }}>
              <input name="name" value={form.name} onChange={updateField} placeholder="Name" required
                     style={{ padding:12, borderRadius:8, border:'1px solid rgba(0,0,0,0.08)' }} />

              <input name="email" value={form.email} onChange={updateField} placeholder="Email" required
                     style={{ padding:12, borderRadius:8, border:'1px solid rgba(0,0,0,0.08)' }} />

              <input name="phone" value={form.phone} onChange={updateField} placeholder="Phone (optional)"
                     style={{ padding:12, borderRadius:8, border:'1px solid rgba(0,0,0,0.08)' }} />

              <select name="serviceCategory" value={form.serviceCategory} onChange={updateField} style={{ padding:12, borderRadius:8 }}>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <textarea name="message" value={form.message} onChange={updateField} placeholder="Explain your problem / service needed" required
                        style={{ padding:12, borderRadius:8, minHeight:100 }} />

              <textarea name="details" value={form.details} onChange={updateField} placeholder="Additional details (optional)" style={{ padding:12, borderRadius:8, minHeight:60 }} />

              <button type="submit" style={{ background:'#063f27', color:'#ffd24d', padding:12, borderRadius:8, fontWeight:700 }}>
                Submit Request
              </button>

              <div style={{ color:'#063f27', fontWeight:700 }}>
                Status: {status || 'idle'}
              </div>
            </form>
          </div>
        </aside>
      </main>

      <footer style={{ padding:'28px 6%', color:'#e6f3ea', textAlign:'center' }}>
        © {new Date().getFullYear()} Suru Digital Care — <a href="mailto:SuruDigitalCare@gmail.com" style={{ color:'#fff' }}>SuruDigitalCare@gmail.com</a>
      </footer>
    </div>
  );
}
