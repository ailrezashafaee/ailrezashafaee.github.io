import { navLinks } from "../data";

type TopBarProps = {
  stuck: boolean;
  onToggleTheme: () => void;
};

export function TopBar({ stuck, onToggleTheme }: TopBarProps) {
  return (
    <header className={stuck ? "topbar stuck" : "topbar"}>
      <a className="brand" href="#top">
        AS
      </a>
      <nav>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="theme"
        type="button"
        onClick={onToggleTheme}
        aria-label="Toggle colour scheme"
      >
        <span className="theme-dot" />
      </button>
    </header>
  );
}
