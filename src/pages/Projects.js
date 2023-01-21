import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import ContactLinks from "../components/ContactLinks";

function Projects(props) {
    return (
        <div className='page' id='projects'>
            <div id='projects-h1'>
                <h1>Projects</h1>
            </div>
            <div className='projects-container'>
                <ProjectCard id={'war-card'} name={'War'} liveSite={'https://aparks4.github.io/War-Browser-Game/'} code={'https://github.com/aparks4/War-Browser-Game'} description={'HTML | CSS | JavaScript'}/>
                <ProjectCard id={'dbtrip-card'} name={'DB Trippin'} liveSite={'https://arynsgaproject.herokuapp.com/users/login'} code={'https://github.com/aparks4/DBTrippin'} description={'Express | Node.js | MongoDB | Mongoose'}/>
                <ProjectCard id={'incantations-card'} name={'Incantations for Spotify'} liveSite={'https://632d4dba13263e422f1d773d--prismatic-kangaroo-4608c3.netlify.app/'} code={'https://github.com/aparks4/Incantations-for-Spotify'} description={'React | Express | Node.js | JWT'} />
                <ProjectCard id={'elevation-card'} name={'Elevation Climbing'} liveSite={'https://github.com/aparks4/Elevation-Climbing-Frontend'} code={'https://github.com/aparks4/Elevation-Climbing-Backend'} description={'Django | Python | React | Node.js | PostgreSQL'} />
            </div>
        </div>
    )
}

export default Projects;