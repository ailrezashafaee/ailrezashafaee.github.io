import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="hero">
      <Reveal as="p" className="kicker">
        Bonn, Germany · <span className="pulse" /> open to working-student roles
      </Reveal>

      <h1>
        <span className="mask">
          <span className="line">Alireza</span>
        </span>
        <span className="mask">
          <span className="line">Shafaee</span>
        </span>
      </h1>

      <div className="hero-meta">
        <Reveal as="p" className="lead" delay={1}>
          Data scientist and software engineer. I take things from raw data to a running,
          monitored service — and occasionally to the App&nbsp;Store.
        </Reveal>
        <Reveal as="p" className="sub" delay={2}>
          M.Sc. Computer Science at the University of Bonn. Previously a year as a data
          scientist at an automotive manufacturer, shipping optimization and forecasting
          systems into production.
        </Reveal>
      </div>

      <Reveal className="scroll-hint" delay={3}>
        <span>Scroll</span>
        <i />
      </Reveal>
    </section>
  );
}
