import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
    return (
        <>
            <div className="project-card">
                <h2>{props.name}</h2>
                <p>{props.technologies}</p>
                {/* <p>{props.description}</p> */}
                <div className="project-links-wrapper">
                    <a href={props.site} target={'_blank'} rel={'noreferrer'}>Live Site</a>
                    <a href={props.code} target={'_blank'} rel={'noreferrer'}>Code</a>
                </div>
            </div>
        
        </>
    )
}