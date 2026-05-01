import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchInterests from './components/ResearchInterests';
import Projects from './components/Projects';
import FigureGallery from './components/FigureGallery';
import GitHubRepos from './components/GitHubRepos';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-navy min-h-screen text-brand-slate font-sans selection:bg-brand-teal/30 selection:text-brand-lightestSlate">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchInterests />
        <Projects />
        <FigureGallery />
        <GitHubRepos />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
