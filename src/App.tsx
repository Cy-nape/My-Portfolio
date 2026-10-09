import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ExtraCurricular from './components/ExtraCurricular';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <CompetitiveProgramming />
        <Certifications />
        <ExtraCurricular />
      </main>
      <footer className="py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Sahil Kulhar. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
