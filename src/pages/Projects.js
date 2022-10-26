import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import ContactLinks from "../components/ContactLinks";

function Projects(props) {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <Nav />
            <ContactLinks />
            <div className='projects-container'>
                <ProjectCard id={'war-card'} name={'War'} href={'https://aparks4.github.io/War-Browser-Game/'} description={'HTML | CSS | JavaScript'}/>
                <ProjectCard id={'dbtrip-card'} name={'DB Trippin'} href={'https://arynsgaproject.herokuapp.com/users/login'} description={'Express | Node.js | MongoDB | Mongoose'}/>
                <ProjectCard id={'incantations-card'} name={'Incantations for Spotify'} href={'https://632d4dba13263e422f1d773d--prismatic-kangaroo-4608c3.netlify.app/'} description={'React | Express | Node.js | JWT'} />
                <ProjectCard id={'elevation-card'} name={'Elevation Climbing'} href={'#'} description={'Django | Python | React | Node.js | PostgreSQL'} />
            </div>
        </div>
    )
}

export default Projects;