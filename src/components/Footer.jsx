import { profile } from "../data/profile";
import { Socials } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-art" style={{ backgroundImage: `url(${profile.images.footer})` }} role="img"
        aria-label="Illustration of a girl and a golden retriever looking over a lakeside town under a starry sky" />
      <div className="container footer-bar">
        <p><strong>{profile.name}</strong>Built with curiosity and a little bit of gold.</p>
        <Socials />
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
