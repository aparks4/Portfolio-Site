function ProjectCard(props) {
    return (
        <a href={props.href} target={'_blank'} rel={'noreferrer'}>
            <div className='project-card'>
                <h2>{props.name}</h2>
                <img src={props.img} alt={props.name} height='100vh' width='100vh'/>
                <p>description</p>
            </div>
        </a>
    )
}

export default ProjectCard;