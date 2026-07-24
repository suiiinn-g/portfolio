import type { Content, Lang } from "@/lib/content";
import { bodyFont } from "@/lib/lang";
import Nav from "./Nav";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function HomePage({
  content,
  lang,
}: {
  content: Content;
  lang: Lang;
}) {
  return (
    <div className={bodyFont(lang)} data-lang={lang} lang={lang === "zh" ? "zh-CN" : "en"}>
      <Nav content={content.nav} lang={lang} />
      <main>
        <Hero content={content.hero} lang={lang} />
        <Stats stats={content.stats} lang={lang} />
        <About content={content.about} lang={lang} />
        <Education content={content.education} lang={lang} />
        <Experience content={content.experience} lang={lang} />
        <Projects content={content.projects} lang={lang} />
        <Skills content={content.skills} lang={lang} />
      </main>
      <Contact content={content.contact} lang={lang} />
    </div>
  );
}
