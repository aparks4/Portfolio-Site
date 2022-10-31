import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import ContactLinks from "../components/ContactLinks";

function Projects(props) {
    return (
        <div className='page' id='projects'>
            <div className='projects-container'>
                <ProjectCard id={'war-card'} name={'War'} liveSite={'https://aparks4.github.io/War-Browser-Game/'} code={'#'} description={'HTML | CSS | JavaScript'}/>
                <ProjectCard id={'dbtrip-card'} name={'DB Trippin'} liveSite={'https://arynsgaproject.herokuapp.com/users/login'} code={'#'} description={'Express | Node.js | MongoDB | Mongoose'}/>
                <ProjectCard id={'incantations-card'} name={'Incantations for Spotify'} liveSite={'https://632d4dba13263e422f1d773d--prismatic-kangaroo-4608c3.netlify.app/'} code={'#'} description={'React | Express | Node.js | JWT'} />
                <ProjectCard id={'elevation-card'} name={'Elevation Climbing'} liveSite={'#'} code={'#'} description={'Django | Python | React | Node.js | PostgreSQL'} />
            </div>
        </div>
    )
}

export default Projects;