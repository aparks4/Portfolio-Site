function ProjectCard(props) {
    return (
            <div className='project-card' id={props.id}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className='project-btns'>
                    <a href={props.liveSite} target={'_blank'} rel={'noreferrer'}><button className='project-btn'>Live Site</button></a>
                    <a href={props.code} target={'_blank'} rel={'noreferrer'}><button className='project-btn'>Code</button></a>
                </div>
            </div>
    )
}

export default ProjectCard;