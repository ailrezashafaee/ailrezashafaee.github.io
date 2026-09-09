import { contactLinks } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHead number="04" title="Contact" />
      <Reveal as="p" className="contact-lead" delay={1}>
        Open to working-student and part-time roles in machine learning, data and backend
        engineering. Based in Bonn, happy to travel across NRW.
      </Reveal>
      <ul className="links">
        {contactLinks.map((link, index) => (
          <Reveal as="li" delay={index + 2} key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
              <i />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
