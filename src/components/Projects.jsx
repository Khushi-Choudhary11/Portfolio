import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import { projects, openSource } from "../data/projects";
import { profile } from "../data/profile";
import Reveal, { SectionHead } from "./Reveal";
import ProjectVisual from "./ProjectVisual";

function ProjectCard({ p, onOpen, i }) {
  return (
    <Reveal as="article" delay={(i % 3) * 0.08} className="card card-hover project">
      <div className="project-visual"><ProjectVisual kind={p.visual} /></div>
      <div className="project-body">
        <div className="project-top">
          <span className="cat">{p.category}</span>
          {p.demo && <span className="badge-live">Live</span>}
        </div>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <div className="project-tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <div className="project-links">
          {p.caseStudy && <button onClick={() => onOpen(p)}>Case study <ArrowRight size={14} /></button>}
          {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source code on GitHub`}><Github size={14} /> Code</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}>Live demo <ArrowUpRight size={14} /></a>}
          {!p.repo && !p.demo && <span style={{ color: "var(--muted)", fontSize: 12.5 }}>Team repository · link coming soon</span>}
        </div>
      </div>
    </Reveal>
  );
}

function CaseStudy({ p, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); prev?.focus?.(); };
  }, [onClose]);

  const { problem, approach, architecture } = p.caseStudy;
  return (
    <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="card modal" role="dialog" aria-modal="true" aria-labelledby="cs-title" tabIndex={-1} ref={ref}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close case study"><X size={18} /></button>
        <span className="eyebrow">{p.category} · {p.year}</span>
        <h3 id="cs-title">{p.title}</h3>
        <div className="project-tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <h4>Problem</h4><p>{problem}</p>
        <h4>Approach</h4><p>{approach}</p>
        <h4>Architecture & tools</h4>
        <ul>{architecture.map((a) => <li key={a}>{a}</li>)}</ul>
        <div className="hero-actions" style={{ marginTop: 32 }}>
          {p.demo && <a className="btn btn-gold" href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}
          {p.repo && <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noreferrer"><Github size={16} /> View code</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section id="projects" className="section glow">
      <div className="container">
        <SectionHead
          eyebrow="Featured projects"
          title={<>Turning ideas into <em>real solutions</em></>}
          lead="Selected projects at the intersection of AI, data, and useful products."
          action={<a className="btn btn-ghost btn-sm" href={`${profile.links.github}?tab=repositories`} target="_blank" rel="noreferrer">View All Projects <ArrowRight size={15} /></a>}
        />
        <div className="project-grid">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} onOpen={setOpen} />)}
        </div>

        <Reveal style={{ marginTop: 64 }}>
          <span className="eyebrow">Open source</span>
        </Reveal>
        <div className="oss">
          {openSource.map((o, i) => (
            <Reveal key={o.repo} delay={i * 0.08}>
              <a href={o.url} target="_blank" rel="noreferrer" className="card card-hover">
                <span className="icon-ring"><Github size={18} /></span>
                <span><small>{o.repo}</small><strong>{o.title}</strong><p>{o.note}</p></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>{open && <CaseStudy p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
