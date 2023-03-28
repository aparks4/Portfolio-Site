import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ProjectCard = (props) => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return (
        <>
            {/* <div className="project-card">
                <h2>{props.name}</h2>
                <p>{props.technologies}</p>
                <div className="project-links-wrapper">
                    <a href={props.site} target={'_blank'} rel={'noreferrer'}>Live Site</a>
                    <a href={props.code} target={'_blank'} rel={'noreferrer'}>Code</a>
                </div>
            </div> */}
            <div className="project-wrapper" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {hover ?
                    <div className="project-hover-wrapper">
                        <p>{props.description}</p>
                        <div className="project-links-wrapper">
                            <a href={props.site} target={'_blank'} rel={'noreferrer'}>Live Site</a>
                            <a href={props.code} target={'_blank'} rel={'noreferrer'}>Code</a>
                        </div>
                    </div>
                :
                <>
                    <div className="project-image" style={{'background-image': `url(${props.image})`}}></div>
                    <div className="project-text-wrapper">
                        <h2>{props.name}</h2>
                        <p>{props.stack}</p>
                    </div>
                </>
                }
            </div>
        
        </>
    )
}