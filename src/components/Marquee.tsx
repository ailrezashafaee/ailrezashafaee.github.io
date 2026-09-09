import { marqueeItems } from "../data";

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <em>·</em>
          </span>
        ))}
      </div>
    </div>
  );
}
