import "./App.css";
import Contacts from "./components/5.CONTACTS/Contacts";
import Home from "./components/2.HOME/Home";
import NavBar from "./components/1.NAV-BAR/NavBar";
import Projects from "./components/4.PROJECTS/Projects";
import Skills from "./components/3.SKILLS/Skills";

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
