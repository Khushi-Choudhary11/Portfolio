import { profile } from "../data/profile";
import Reveal from "./Reveal";
import { NamedIcon, Sparkle } from "./Icons";

const values = [
  ["Analytical Thinker", "brain"], ["Product Builder", "hammer"], ["Lifelong Learner", "book"], ["Impact Driven", "sparkles"],
];

export default function About() {
  const { about } = profile;
  return (
    <section id="about" className="section glow" style={{ "--gx": "20%", "--gy": "40%" }}>
      <div className="container about-grid">
        <Reveal className="portrait-wrap">
          <div className="portrait">
            <img src={profile.images.heroCrop} alt="Illustrated workspace: a girl at her laptop with a golden retriever asleep beside her" loading="lazy" width="760" height="488" />
          </div>
          <p className="hand">“{about.annotation}”</p>
        </Reveal>

        <div className="about-text">
          <Reveal>
            <span className="eyebrow">About me</span>
            <h2 className="h-section">More than <em>just code</em>… <Sparkle /></h2>
          </Reveal>
          <Reveal delay={0.08} style={{ marginTop: 22 }}>
            {about.bio.map((p) => <p key={p} className="lead">{p}</p>)}
          </Reveal>

          <ul className="values" style={{ listStyle: "none" }}>
            {values.map(([label, icon], i) => (
              <Reveal as="li" key={label} delay={0.1 + i * 0.06} className="card value card-hover">
                <span className="icon-ring"><NamedIcon name={icon} /></span>
                {label}
              </Reveal>
            ))}
          </ul>

          <Reveal as="dl" className="details" delay={0.2}>
            {about.details.map((d) => (
              <div key={d.label}><dt>{d.label}</dt><dd>{d.value}</dd></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
