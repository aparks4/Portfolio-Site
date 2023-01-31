import ProjectCard from "../components/ProjectCard";

function Test(props) {
    return (
        <div id="projects">
            <h1>featured projects</h1>
            <div id="test-div-wrapper">
                <ProjectCard id={'war-card'} name={'War'} liveSite={'https://aparks4.github.io/War-Browser-Game/'} code={'https://github.com/aparks4/War-Browser-Game'} description={'HTML | CSS | JavaScript'}/>
                <ProjectCard id={'dbtrip-card'} name={'DB Trippin'} liveSite={'https://arynsgaproject.herokuapp.com/users/login'} code={'https://github.com/aparks4/DBTrippin'} description={'Express | Node.js | MongoDB | Mongoose'}/>
                <ProjectCard id={'incantations-card'} name={'Incantations for Spotify'} liveSite={'https://beamish-eclair-ddafee.netlify.app'} code={'https://github.com/basementlivin/Incantations-for-Spotify'} description={'React | Express | Node.js | JWT'} />
                <ProjectCard id={'elevation-card'} name={'Elevation Climbing'} liveSite={'https://github.com/aparks4/Elevation-Climbing-Frontend'} code={'https://github.com/aparks4/Elevation-Climbing-Backend'} description={'Django | Python | React | Node.js | PostgreSQL'} />
            </div>
        </div>
    )
}

export default Test;