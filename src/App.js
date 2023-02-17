import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Header";
import NavBar from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;