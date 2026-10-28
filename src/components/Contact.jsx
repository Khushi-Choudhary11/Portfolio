import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import { socialLinks } from "../data/social";
import Reveal from "./Reveal";

function Peaks() {
  return (
    <svg viewBox="0 0 320 260" aria-hidden="true">
      <g stroke="#E8C982" fill="none" strokeWidth="1" opacity="0.8">
        <path d="M0 250 90 120l40 50 70-120 120 200" />
        <path d="M60 250 130 170l30 30 40-60 60 110" opacity="0.5" />
        <path d="M200 50l-12 40 18 20-14 30M90 120l-8 30 14 18" opacity="0.5" />
        <path d="M0 250h320" opacity="0.4" />
      </g>
      <g color="#E8C982" transform="translate(240 24)"><svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 0c.6 6.4 5 11 12 12-7 1-11.4 5.6-12 12-.6-6.4-5-11-12-12 7-1 11.4-5.6 12-12Z" fill="currentColor" /></svg></g>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="card contact-card glow" style={{ "--gx": "90%", "--gy": "80%" }}>
          <div>
            <span className="eyebrow">Contact</span>
            <h2 style={{ marginTop: 18 }}>Let's build something <em style={{ color: "var(--gold)" }}>amazing</em> together.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Open to meaningful opportunities, collaborative projects, and conversations about AI, data, and technology.
            </p>
            <div className="contact-links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon size={16} strokeWidth={1.5} /> {label === "Email" ? profile.email : label}
                </a>
              ))}
            </div>
            <a href={`mailto:${profile.email}?subject=Hello%20Khushi`} className="btn btn-gold">Say Hello <ArrowRight size={16} /></a>
          </div>
          <div className="contact-art"><Peaks /></div>
        </Reveal>
      </div>
    </section>
  );
}
