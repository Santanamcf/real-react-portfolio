import React from 'react';

import React from 'react';
import portfolio from '../assests/portfolio.json'

function Card(props) {
    return (
        <div className='card' class="p-3 mb-2 bg-dark text-white" >
            <div className='img-container'>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className='content'>
                <ul>
                    <li>
                        <p className='project-title'>{props.name}</p>
                    </li>
                    <li>
                        <p className='project-description'>{props.description}</p>
                    </li>
                    <li>
                        <a href={props.github} target="">Github Link</a>
                    </li>
                    <li>
                        <a href={props.applink} target="">Deployed App Link</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function Container(props) {
    return <div className='container'>{props.children}</div>;
}

export default function Portfolio() {
    return (
        <>
        <div className='portfolio'>
            <h1 className='title'>My Projects</h1>
        </div>
        <Container>
            {portfolio.map((project) => (
                <Card
                name={project.name}
                id={project.id}
                image={project.image}
                github={project.github}
                applink={project.applink}
                description={project.description}
                />
            ))}
        </Container>
        </>
    )
}