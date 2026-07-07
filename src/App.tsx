import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <CompetitiveProgramming />
        <Projects />
      </main>
      <footer className="py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Sahil Kulhar. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
