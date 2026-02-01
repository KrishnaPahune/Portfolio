import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx' 
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx' 
export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


