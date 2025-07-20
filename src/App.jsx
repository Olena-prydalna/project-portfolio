import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(/images/background.jpg)",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
