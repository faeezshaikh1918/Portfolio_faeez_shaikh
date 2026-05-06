import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0D0D0D' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
}
