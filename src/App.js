import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/Contacts";
import Footer from "./components/Footer/footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
