import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Download Resume  */}
      <Home />

      <Projects />
      <Skills />
      <About />
      <Contact />

      <Footer />

    </div>
  );
}

export default App;
