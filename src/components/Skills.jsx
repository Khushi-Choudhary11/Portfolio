import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, skills } from "../data/skills";
import { SectionHead } from "./Reveal";

export default function Skills() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? skills : skills.filter((s) => s.cat === cat);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead eyebrow="Skills" title={<>Tools I <em>work with</em></>} />
        <div className="filters" role="group" aria-label="Filter skills by category">
          {categories.map((c) => (
            <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <motion.ul layout className="skill-grid" style={{ listStyle: "none" }} aria-live="polite">
          <AnimatePresence mode="popLayout">
            {shown.map(({ name, icon: Icon }) => (
              <motion.li
                layout key={name} className="card card-hover skill" title={name}
                initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.22 }}
              >
                <Icon aria-hidden="true" strokeWidth={1.4} />
                {name}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
