import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-navy-900 dark:bg-navy-950 dark:text-navy-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
