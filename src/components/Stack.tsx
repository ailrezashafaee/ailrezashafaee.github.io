import { stack } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHead number="03" title="Stack" />
      <dl className="stack">
        {stack.map((entry, index) => (
          <Reveal delay={index + 1} key={entry.label}>
            <dt>{entry.label}</dt>
            <dd>{entry.items}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
