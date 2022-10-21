function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.name} height='100vh' width='100vh'/>
            <p>description</p>
        </div>
    )
}

export default ProjectCard;