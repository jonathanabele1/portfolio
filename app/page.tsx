import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
