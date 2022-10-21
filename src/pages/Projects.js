import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

function Projects(props) {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <Nav />
            <div className='projects-container'>
                <ProjectCard name={'War'} img={'https://i.imgur.com/ZM6e4qM.jpg'} />
                <ProjectCard name={'DB Trippin'} img={'https://i.imgur.com/ZM6e4qM.jpg'}/>
                <ProjectCard name={'Incantations for Spotify'} img={'https://i.imgur.com/ZM6e4qM.jpg'}/>
                <ProjectCard name={'Elevation Climbing'} img={'https://i.imgur.com/ZM6e4qM.jpg'}/>
            </div>
        </div>
    )
}

export default Projects;