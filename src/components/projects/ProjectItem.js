import React from 'react';

const ProjectItem = (project) => {
    
    const style = (project.data.id % 3 === 2) ? {borderTop: '5px solid #34e27a'} : {borderTop: '5px solid #0070f3'};
    
    return(
        <div className="project-inner" style={style}>
            <h4>{project.data.name}</h4>
            <p>{project.data.about}</p>
            <div className="project-button">
            <a rel="noreferrer" target="_blank" href={project.data.DeployUrl}>Deploy</a>
            <a rel="noreferrer" target="_blank" className="green-btn" href={project.data.GitUrl}>Github</a> 
            </div>             
        </div>
    )
}
export default ProjectItem;