import { education, experience, personal, profile, projects } from "@/content";
import StackTags from "./StackTags";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <main>
      {/* 1. $ whoami */}
      <section className="whoami" aria-labelledby="name">
        <p className="prompt">whoami</p>
        <h1 className="name" id="name">
          {profile.name}
          <span className="cursor" aria-hidden="true" />
        </h1>
        <p className="summary">{profile.summary}</p>
        {profile.workingTowards && (
          <p className="working-towards">
            <span className="label">working towards:</span> {profile.workingTowards}
          </p>
        )}
        <p className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </p>
      </section>

      {/* 2. $ cat experience.log */}
      <section className="section" aria-labelledby="exp">
        <h2 className="prompt" id="exp">
          cat experience.log
        </h2>
        <ol className="experience output">
          {experience.map((r) => (
            <li className="role" key={`${r.org}-${r.title}`}>
              <span className="dates">{r.dates}</span>
              <div className="detail">
                <span className="title">{r.title}</span> <span className="org">@ {r.org}</span>
                <p className="note">{r.note}</p>
                {r.stack && <StackTags items={r.stack} />}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. $ cat education.txt */}
      <section className="section" aria-labelledby="edu">
        <h2 className="prompt" id="edu">
          cat education.txt
        </h2>
        <ul className="education output">
          {education.map((e) => (
            <li key={`${e.school}-${e.degree}`}>
              <p>
                <span className="title">{e.degree}</span>{" "}
                <span className="org">
                  — {e.school}, {e.year}
                </span>
              </p>
              {e.note && <p className="note">{e.note}</p>}
            </li>
          ))}
        </ul>
      </section>

      {/* 4. $ ls projects */}
      <section className="section" aria-labelledby="proj">
        <h2 className="prompt" id="proj">
          ls projects
        </h2>
        <div className="projects output">
          {projects.map((p) => (
            <article className="card" key={p.name}>
              <div className="card-head">
                <h3>
                  <a href={p.href}>{p.name}/</a>
                </h3>
                <span className="stack">{p.stack}</span>
              </div>
              <p className="desc">{p.desc}</p>
              {p.hardestPart && <p className="note"># hardest part: {p.hardestPart}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* 5. $ cat personal.txt */}
      <section className="section" aria-labelledby="personal">
        <h2 className="prompt" id="personal">
          cat personal.txt
        </h2>
        <ul className="personal output">
          {personal.map((p) => (
            <li key={p.title}>
              <span className="title">{p.title}</span>
              {p.detail && <span className="org"> — {p.detail}</span>}
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <span className="exit">exit</span>
        <span className="footer-right">
          <span>{profile.footer}</span>
          <ThemeToggle />
        </span>
      </footer>
    </main>
  );
}
