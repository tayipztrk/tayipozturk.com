import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectsList = () => {
    const projectsDatas = [
    {
        id: 1,
        name: 'Emaily',
        about:'My Full-stack app with react, redux, node.js , express and mongodb',
        DeployUrl: 'https://nameless-thicket-00661.herokuapp.com/',
        GitUrl: 'https://github.com/tayipztrk/Emaily', 
    },
    {
        id: 2,
        name: 'BrandColors',
        about:'BrandColors Demo with React',
        DeployUrl: 'https://tayipztrk-brandcolors.netlify.app/',
        GitUrl: 'https://github.com/tayipztrk/BrandColors', 
    },
    {
        id: 3,
        name: 'React-Widgets',
        about:'Wikipedia Api , Google Translate Api using with react',
        DeployUrl: 'https://tayipztrk-react-widgets.netlify.app/',
        GitUrl: 'https://github.com/tayipztrk/React-Widgets', 
    },
    {
        id: 4,
        name: 'Cars',
        about:'Html Css Jquery Font-awesome',
        DeployUrl: 'https://tayipztrk.github.io/Cars_Template/',
        GitUrl: 'https://github.com/tayipztrk/Cars_Template', 
    },
    {
        id: 5,
        name: 'React-Streamy',
        about:'React Redux Redux-Thunk Google Auth Redux-Form Lodash Semantic-ui',
        DeployUrl: '',
        GitUrl: 'https://github.com/tayipztrk/Streamy', 
    },
    {
        id: 6,
        name: 'Manage-Employees',
        about:'React simple form project',
        DeployUrl: 'https://tayipztrk-manage-employees.netlify.app/',
        GitUrl: 'https://github.com/tayipztrk/Streamy', 
    },
    {
        id: 7,
        name: 'Spend Money',
        about:'Money spending with react.js',
        DeployUrl: 'https://tayipztrk-spend-money.netlify.app/',
        GitUrl: 'https://github.com/tayipztrk/Manage-Employees', 
    },
    {
        id: 8,
        name: '50-html-css-projects',
        about:'50 html-css-javascript projects',
        DeployUrl: 'https://tayipztrk.github.io/50-html-css-projects/',
        GitUrl: 'https://github.com/tayipztrk/50-html-css-projects', 
    }
    ];
    return(
        <>
        <div id="projectss" className="projects-list">
            {projectsDatas.map((project) => (
                <ProjectItem key={project.id} data={project}/>
        ))}
            
        </div>
        <div id="scroll-contact"></div>
        </>
    )
}

export default ProjectsList;