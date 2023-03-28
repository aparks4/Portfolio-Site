import '../static/styles/Projects.css';
import { ProjectCard } from "../components/ProjectCard"


export const ProjectsPage = (props) => {
    return (
        <>
            <div className="projects-page">
                <div className="projects-container">
                    <ProjectCard 
                        name={'Every Body Retreats'} 
                        stack={'React | Node.js | Django | PostgreSQL'}
                        image={'https://i.imgur.com/bXK816W.png'}
                        description={`A website for the nonprofit organization to house links to event registration forms (they use Google forms), create blog posts to share their story (in the works), and accept donations from interested parties (in the works).`} 
                        site={'https://everybodyretreats.com'} 
                        code={'https://github.com/aparks4/every-body-site'} 
                    />
                    <ProjectCard 
                        name={'Talk-Thru'} 
                        stack={'React | Express | TypeScript | MySQL'}
                        image={'https://i.imgur.com/fhEYK7n.png'}
                        site={'https://talkthru.netlify.app/'} 
                        code={'https://github.com/PeterSYoo/talkthru-frontend'} 
                        description={'A video chat app for paired learning and mentorship'}
                    />
                    <ProjectCard 
                        name={'Incantations for Spotify'}  
                        stack={'React | Express | Node.js | JWT'} 
                        image={'https://i.imgur.com/fhEYK7n.png'}
                        description={'A Halloween-themed playlist generator for Spotify users'}
                        site={'https://beamish-eclair-ddafee.netlify.app/'} 
                        code={'https://github.com/basementlivin/Incantations-for-Spotify'} 
                    />
                    <ProjectCard 
                        name={'DB Trippin'} 
                        stack={'Express | Node.js | MongoDB | Mongoose'} 
                        image={'https://i.imgur.com/bXK816W.png'}
                        description={'A web application for collaborative planning and travel blogging'}
                        site={'https://arynsgaproject.herokuapp.com/users/login'} 
                        code={'https://github.com/aparks4/DBTrippin'} 
                    />
                </div>
            </div>
        </>
    )
}