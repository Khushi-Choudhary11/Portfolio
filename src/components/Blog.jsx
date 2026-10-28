import { ArrowRight } from "lucide-react";
import { posts, readingTime } from "../data/blog";
import { profile } from "../data/profile";
import Reveal, { SectionHead } from "./Reveal";

// Each card borrows a different crop of the site artwork as its cover.
const covers = ["58% 45%", "80% 30%", "97% 70%"];

export default function Blog() {
  return (
    <section id="blog" className="section glow" style={{ "--gx": "85%", "--gy": "30%" }}>
      <div className="container">
        <SectionHead
          eyebrow="Blog"
          title={<>Thoughts, learnings <em>and more</em></>}
          lead="Notes from building things. The first essays are being written now."
        />
        <div className="blog-grid">
          {posts.map((p, i) => {
            const published = Boolean(p.date && p.body);
            return (
              <Reveal as="article" key={p.slug} delay={i * 0.08} className="card card-hover post">
                <div className="post-cover">
                  <img src={profile.images.hero} alt="" loading="lazy" width="2172" height="488" style={{ objectPosition: covers[i % covers.length] }} />
                  {!published && <span className="draft">In the works</span>}
                </div>
                <div className="post-body">
                  <div className="project-tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  {published ? (
                    <p className="post-meta">
                      {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · {readingTime(p.body)}
                      <a href={`#blog-${p.slug}`} style={{ marginLeft: 12, color: "var(--gold)" }}>Read article <ArrowRight size={12} /></a>
                    </p>
                  ) : (
                    <p className="post-meta">Coming soon</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
