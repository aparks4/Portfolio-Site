import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

function Projects(props) {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <Nav />
            <div className='projects-container'>
                <ProjectCard name={'War'} img={'https://i.imgur.com/ZM6e4qM.jpg'} href={'https://aparks4.github.io/War-Browser-Game/'}/>
                <ProjectCard name={'DB Trippin'} img={'https://i.imgur.com/ZM6e4qM.jpg'} href={'https://arynsgaproject.herokuapp.com/users/login'}/>
                <ProjectCard name={'Incantations for Spotify'} img={'https://i.imgur.com/ZM6e4qM.jpg'} href={'https://632d4dba13263e422f1d773d--prismatic-kangaroo-4608c3.netlify.app/'}/>
                <ProjectCard name={'Elevation Climbing'} img={'https://i.imgur.com/ZM6e4qM.jpg'} href={'#'}/>
            </div>
        </div>
    )
}

export default Projects;