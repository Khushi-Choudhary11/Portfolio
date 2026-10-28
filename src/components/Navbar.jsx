import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { NAV } from "../data/nav";

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main > section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const wordmark = (
    <a href="#home" className="wordmark" aria-label={`${profile.name}, back to top`}>
      {profile.wordmark.replace(/\.$/, "")}<span>.</span>
    </a>
  );

  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          {wordmark}
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV.map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} className={active === id ? "active" : undefined} aria-current={active === id ? "true" : undefined}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-gold btn-sm">Let's Talk <ArrowRight size={15} /></a>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="drawer">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="drawer" className="drawer" role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          >
            <div className="drawer-head">
              {wordmark}
              <button className="menu-btn" onClick={() => setOpen(false)} aria-label="Close menu" autoFocus>
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <nav aria-label="Mobile">
              {NAV.map(([label, id], i) => (
                <motion.a
                  key={id} href={`#${id}`} onClick={() => setOpen(false)} className={active === id ? "active" : undefined}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <a href="#contact" className="btn btn-gold" onClick={() => setOpen(false)}>Let's Talk <ArrowRight size={16} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
