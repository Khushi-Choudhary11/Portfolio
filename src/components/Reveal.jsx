import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Fades and lifts children into view once. Reduced-motion users get the content
// immediately (MotionConfig reducedMotion="user" in App strips the transform).
export default function Reveal({ as = "div", delay = 0, y = 18, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, lead, action }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h-section">{title}</h2>
        {lead && <p className="lead" style={{ marginTop: 14 }}>{lead}</p>}
      </Reveal>
      {action && <Reveal delay={0.1}>{action}</Reveal>}
    </div>
  );
}
