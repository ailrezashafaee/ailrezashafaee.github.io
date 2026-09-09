import { projects } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead number="02" title="Selected work" />
      <div className="cards">
        {projects.map((project, index) => (
          <Reveal as="article" className="card" delay={index + 1} key={project.name}>
            <div className="card-top">
              <h3>{project.name}</h3>
              <span className="tag">{project.tag}</span>
            </div>
            <p>{project.blurb}</p>
            <ul className="chips">
              {project.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
            {project.href ? (
              <div className="card-links">
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.hrefLabel}
                </a>
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
