import '../static/styles/Projects.css';
import { ProjectCard } from "../components/ProjectCard"


export const ProjectsPage = (props) => {
    return (
        <>
            <div className="projects-page">
                <div className="projects-container">
                    <ProjectCard name={'Incantations for Spotify'} technologies={'React | Express | Node.js | JWT'} site={'https://beamish-eclair-ddafee.netlify.app/'} code={'https://github.com/basementlivin/Incantations-for-Spotify'} />
                    <ProjectCard name={'DB Trippin'} technologies={'Express | Node.js | MongoDB | Mongoose'} site={'https://arynsgaproject.herokuapp.com/users/login'} code={'https://github.com/aparks4/DBTrippin'} />
                    <ProjectCard name={'Talk-Thru'} technologies={'React | Express | TypeScript | MySQL'} site={'https://talkthru.netlify.app/'} code={'https://github.com/PeterSYoo/talkthru-frontend'} />
                    <ProjectCard name={'Every Body Retreats'} technologies={'React | Node.js | Django | PostgreSQL'} site={'https://everybodyretreats.com'} code={'https://github.com/aparks4/every-body-site'} />
                </div>
            </div>
        </>
    )
}