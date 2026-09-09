import { roles } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Work() {
  return (
    <section id="work" className="section">
      <SectionHead number="01" title="Work" />
      <ul className="rows">
        {roles.map((role, index) => (
          <Reveal as="li" className="row" delay={index + 1} key={role.org + role.title}>
            <span className="row-year">{role.years}</span>
            <span className="row-title">{role.title}</span>
            <span className="row-org">{role.org}</span>
            <span className="row-note">{role.note}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
