import Nav from "../components/Nav";
import ContactLinks from "../components/ContactLinks";
import Bio from "../components/Bio";


function About() {
    return (
        <div id='about'>
            <h1>About</h1>
            <Nav />
            <ContactLinks />
            <Bio />
        </div>
    )
}

export default About;