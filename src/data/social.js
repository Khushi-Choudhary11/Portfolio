import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";
import { profile } from "./profile";

export const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Kaggle", href: profile.links.kaggle, Icon: SiKaggle },
].filter((l) => l.href);
