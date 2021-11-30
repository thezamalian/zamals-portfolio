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
    <div className="App container">
      {/* <NavBar /> */}
      {/* Download Resume  */}
      <NavBar />

      <div id="home" style={{ height: "400px", marginTop: '40px' }}>
        <Home />
      </div>
      <div id="projects" style={{ height: "300px" }}>
        <Projects />
      </div>
      <div id="skills" style={{ height: "300px" }} >
        <Skills />
      </div>
      <div id="about" style={{ height: "400px" }} >
        <About />
      </div>
      <div id="contact" style={{ height: "300px" }} >
        <Contact />
      </div>

      {/* <div className="row">
        
        <div className="col-12 col-md-8 " style={{ marginLeft: '10%' }}>
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">

            <div id="scrollspyHeading1" style={{ height: "400px" }}>
              <Home />
            </div>
            <div id="scrollspyHeading2" style={{ height: "300px" }}>
              <Projects />
            </div>
            <div id="scrollspyHeading3" style={{ height: "300px" }} >
              <Skills />
            </div>
            <div id="scrollspyHeading4" style={{ height: "400px" }} >
              <About />
            </div>
            <div id="scrollspyHeading5" style={{ height: "300px" }} >
              <Contact />
            </div>

          </div>
        </div>

      </div> */}

      <Footer />

    </div>
  );
}

export default App;
