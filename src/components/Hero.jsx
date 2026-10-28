import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { NamedIcon, Socials, Sparkle } from "./Icons";

const EASE = [0.22, 1, 0.36, 1];
const rise = (delay) => ({ initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, ease: EASE, delay } });

export default function Hero() {
  const { cgpa, credits } = profile.education.metrics;
  const metrics = [
    { value: `${projects.length}+`, label: "Major Projects" },
    credits && { value: credits, label: "Credits Completed" },
    cgpa && { value: cgpa, label: "CGPA" },
  ].filter(Boolean);

  return (
    <section id="home" className="hero">
      <div className="hero-art">
        <img
          src={profile.images.hero} width="2172" height="488" fetchPriority="high"
          alt="Illustration of a girl working at a laptop late at night beside a sleeping golden retriever, in black and gold"
        />
      </div>

      <div className="container hero-grid">
        <div>
          <motion.span className="eyebrow" {...rise(0.05)}>{profile.eyebrow}</motion.span>
          <motion.h1 className="h-display" style={{ marginTop: 22 }} {...rise(0.12)}>
            <span className="hi">Hi, I'm</span>
            <span className="name">{profile.name}</span>
            <Sparkle />
          </motion.h1>
          <motion.p className="hero-role" {...rise(0.22)}>{profile.role}</motion.p>
          <motion.p className="lead" style={{ marginTop: 10 }} {...rise(0.28)}>{profile.tagline}</motion.p>

          <motion.ul className="hero-pills" aria-label="Focus areas" {...rise(0.34)} style={{ listStyle: "none" }}>
            {profile.focus.map((f) => <li key={f} className="pill">{f}</li>)}
          </motion.ul>

          <motion.div className="hero-actions" {...rise(0.4)}>
            <a href="#projects" className="btn btn-gold">View My Work <ArrowRight size={16} /></a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn btn-ghost" download>Download Resume <Download size={16} /></a>
            )}
            {!profile.resumeUrl && <a href="#contact" className="btn btn-ghost">Get in Touch</a>}
          </motion.div>

          <motion.div {...rise(0.46)}><Socials /></motion.div>
        </div>

        <motion.aside className="hero-side" aria-label="At a glance" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}>
          <ul className="card traits" style={{ listStyle: "none" }}>
            {profile.traits.map((t) => (
              <li key={t.title} className="trait">
                <span className="icon-ring"><NamedIcon name={t.icon} /></span>
                <span><strong>{t.title}</strong><small>{t.sub}</small></span>
              </li>
            ))}
          </ul>
          <div className="card metrics" style={{ "--n": metrics.length }}>
            {metrics.map((m) => (
              <p key={m.label} className="metric"><b>{m.value}</b><span>{m.label}</span></p>
            ))}
          </div>
        </motion.aside>
      </div>

      <p className="hand hero-hand" aria-hidden="true">Ideas · Code · Impact</p>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About"><span>SCROLL</span><i /></a>
    </section>
  );
}
