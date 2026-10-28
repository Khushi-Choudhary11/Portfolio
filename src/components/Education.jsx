import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import Reveal, { SectionHead } from "./Reveal";

// Generic line drawing of a domed academic building (not an institutional emblem).
function Building() {
  const s = { stroke: "#E8C982", strokeWidth: 1, fill: "none", opacity: 0.75 };
  return (
    <svg viewBox="0 0 340 240" aria-hidden="true">
      <path {...s} d="M170 22v14M150 78c0-22 9-38 20-42 11 4 20 20 20 42" />
      <path {...s} d="M138 82h64M142 82v26M198 82v26M132 108h76" />
      <path {...s} d="M40 132 170 108l130 24M40 132h260" />
      {[60, 92, 124, 156, 184, 216, 248, 280].map((x) => <path key={x} {...s} d={`M${x} 140v64`} />)}
      <path {...s} d="M36 140h268M30 204h280M20 214h300M10 224h320" />
      <path {...s} d="M156 204v-32c0-8 6-14 14-14s14 6 14 14v32" />
      {[[70, 60], [270, 48], [300, 92], [40, 90]].map(([x, y]) => (
        <path key={x} fill="#E8C982" opacity="0.6" d={`M${x} ${y - 4}c.3 3 1.7 3.7 4 4-2.3.3-3.7 1-4 4-.3-3-1.7-3.7-4-4 2.3-.3 3.7-1 4-4Z`} />
      ))}
    </svg>
  );
}

export default function Education() {
  const e = profile.education;
  const metrics = [
    e.metrics.cgpa && [e.metrics.cgpa, "CGPA"],
    e.metrics.credits && [e.metrics.credits, "Credits Completed"],
    [`${projects.length}+`, "Major Projects"],
  ].filter(Boolean);

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead eyebrow="Education" title={<>IIT Madras <em>BS in Data Science</em></>} />
        <Reveal className="card edu">
          <div className="edu-main">
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <span className="icon-ring" style={{ width: 56, height: 56 }}><GraduationCap size={24} strokeWidth={1.3} /></span>
              <div>
                <h3>{e.institution}</h3>
                <p className="program">{e.program}</p>
                <p className="years">{e.years}</p>
              </div>
            </div>
            <div className="edu-metrics">
              {metrics.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}
            </div>
            <span className="eyebrow">Relevant coursework</span>
            <div className="project-tags" style={{ marginTop: 14 }}>
              {e.coursework.map((c) => <span key={c} className="pill">{c}</span>)}
            </div>
            <p className="edu-quote">“{e.quote}”</p>
          </div>
          <div className="edu-art"><Building /></div>
        </Reveal>
      </div>
    </section>
  );
}
