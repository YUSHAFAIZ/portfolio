import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
      </main>
      <main>
        <About />
      </main>
      <main>
        <Experience />
      </main>
      <main>
        <Skills />
      </main>
      <main>
        <Projects />
      </main>
      <main>
        <Contact />
      </main>
      <main>
        <Footer />
      </main>
    </div>
  );
}

export default App;