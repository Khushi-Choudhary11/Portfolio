import { Brain, Hammer, BookOpen, Sparkles, Briefcase, Languages, Trophy } from "lucide-react";
import { socialLinks } from "../data/social";

const map = { brain: Brain, hammer: Hammer, book: BookOpen, sparkles: Sparkles, briefcase: Briefcase, languages: Languages, trophy: Trophy };

export function NamedIcon({ name, size = 18 }) {
  const Icon = map[name] ?? Sparkles;
  return <Icon size={size} strokeWidth={1.4} aria-hidden="true" />;
}

// Four-point star used as the refined sparkle accent.
export function Sparkle({ className = "sparkle" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.6 6.4 5 11 12 12-7 1-11.4 5.6-12 12-.6-6.4-5-11-12-12 7-1 11.4-5.6 12-12Z" fill="currentColor" />
    </svg>
  );
}

export function Socials({ className = "socials" }) {
  return (
    <div className={className}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          <Icon size={18} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
