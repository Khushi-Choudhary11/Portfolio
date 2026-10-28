import { experience } from "../data/experience";
import Reveal, { SectionHead } from "./Reveal";
import { NamedIcon } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" className="section glow" style={{ "--gx": "15%", "--gy": "30%" }}>
      <div className="container">
        <SectionHead eyebrow="Experience" title={<>Learning <em>by doing</em></>} />
        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.org} delay={i * 0.08} className="t-item">
              <span className="icon-ring"><NamedIcon name={e.icon} /></span>
              <article className="card t-card">
                <p className="t-date">{e.period}</p>
                <div>
                  <h3>{e.role}</h3>
                  <p className="org">{e.org}</p>
                  <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  {e.tech.length > 0 && <div className="t-tech">{e.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
