import Nav from "../components/Nav";
import ContactLinks from "../components/ContactLinks";
import pdf from '../Resume.pdf'


function About() {
    return (
        <div id='about'>
            <h1>About</h1>
            <Nav />
            <ContactLinks />
            <a href={pdf} target='_blank' rel='noreferrer'>Check out my resume</a>
        </div>
    )
}

export default About;