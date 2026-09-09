import { Reveal } from "./Reveal";

type SectionHeadProps = {
  number: string;
  title: string;
};

export function SectionHead({ number, title }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <span className="num">{number}</span>
      <h2>{title}</h2>
    </Reveal>
  );
}
