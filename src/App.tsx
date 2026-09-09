import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { TopBar } from "./components/TopBar";
import { Work } from "./components/Work";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { progress, stuck } = useScrollProgress();
  const { toggle } = useTheme();

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${(progress * 100).toFixed(2)}%` }} />
      </div>

      <TopBar stuck={stuck} onToggleTheme={toggle} />

      <main id="top">
        <Hero />
        <Marquee />
        <Work />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
