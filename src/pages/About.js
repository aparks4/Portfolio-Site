import ContactLinks from "../components/ContactLinks";
import Bio from "../components/Bio";
import SkillsList from "../components/SkillsList";


function About() {
    return (
        <div className='page' id='about'>
            <h1>About</h1>
            <Bio />
            <SkillsList />
        </div>
    )
}

export default About;