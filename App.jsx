import React from 'react'

const projects = [
  { title: 'Meteorite Decanter Case', tag:'Luxury Spirits', thumb:'https://images.unsplash.com/photo-1514362545857-3bc16c4c76f0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Emerald Gift Box Mechanism', tag:'Engineering + Art', thumb:'https://images.unsplash.com/photo-1617564934946-1f6b36f2c3c9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Balayan & Co Signature Bottle', tag:'Limited Edition', thumb:'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Da Vinci Cryptex Cap', tag:'Concept', thumb:'https://images.unsplash.com/photo-1501441858153-72662f58f0cb?q=80&w=1200&auto=format&fit=crop' },
]

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <div className="brand"><span style={{color:'#D4AF37'}}>Balayan</span> & Co</div>
          <nav className="muted">WORK · ABOUT · CONTACT</nav>
        </div>
      </header>

      <section className="hero">
        <div className="muted" style={{letterSpacing:'.35em',textTransform:'uppercase'}}>Luxury Packaging • Signature Bottles • Mechanical Art</div>
        <h1 style={{fontSize:48, margin:'12px 0 0'}}>Balayan & Co</h1>
        <div className="muted" style={{fontSize:22, marginTop:8}}>Crafting unforgettable cases & bottles for high-end spirits</div>
        <p className="muted" style={{marginTop:16, maxWidth:640}}>
          We design and engineer premium packaging that elevates your brand: gold-on-black aesthetics, heraldic details,
          and smooth lift mechanics that present your bottle like a work of art.
        </p>
        <div style={{marginTop:20}}><a className="button" href="#contact">Request a Quote</a></div>
      </section>

      <section className="section">
        <h2 style={{fontSize:28, marginBottom:12}}>Selected Work</h2>
        <div className="grid">
          {projects.map((p,i)=>(
            <article key={i} className="card">
              <img src={p.thumb} alt={p.title} />
              <div style={{padding:12}}>
                <div className="muted" style={{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase'}}>{p.tag}</div>
                <div style={{fontSize:18,marginTop:6}}>{p.title}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 style={{fontSize:28, marginBottom:12}}>About</h2>
        <p className="muted" style={{maxWidth:720}}>
          From fleur‑de‑lys accents to cryptic combination caps, we craft limited-run packaging for brands that demand distinction.
          Our pieces are designed for tactile magic: lids glide, trays lift, and bottles rise smoothly as the box opens.
        </p>
      </section>

      <section id="contact" className="section">
        <h2 style={{fontSize:28, marginBottom:12}}>Contact</h2>
        <p className="muted">Instagram: <a href="https://instagram.com/billionaire_signature" target="_blank" rel="noreferrer">@billionaire_signature</a></p>
        <p className="muted">Email: <a href="mailto:hello@balayan.co">hello@balayan.co</a></p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Balayan & Co — Luxury Packaging Atelier</footer>
    </div>
  )
}
