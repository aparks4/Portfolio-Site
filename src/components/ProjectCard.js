function ProjectCard(props) {
    return (
        <a href={props.href} target={'_blank'} rel={'noreferrer'}>
            <div className='project-card' id={props.id}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </a>
    )
}

export default ProjectCard;