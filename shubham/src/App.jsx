// import { useState } from "react";
import "./app.scss";
import Contact from "./component/contact/Contact";
import Intro from "./component/intro/Intro";
import Project from "./component/project/Project";
import Topbar from "./component/topbar/Topbar";
import { useState } from "react";
import Menu from "./component/menu/Menu";
import Notes from "./component/notes/Notes";
import About from "./component/About/About";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro />
        <About/>
        <Project />
        <Notes/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
