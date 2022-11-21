import Nav from "../components/Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Scroll() {
    return (
        <div id="scroll-page">
            <Nav />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>

    )
}

export default Scroll;