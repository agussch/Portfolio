import React, { useState, useEffect } from 'react';
import "./projects.css";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchProjectsData = async () => {
            try {
                const response = await fetch('../../../data/projects.json');
                const data = await response.json();
                console.log(data);
                setProjectsData(data);
            } catch (error) {
                console.error('Error fetching projects data:', error);
            }
        };
        fetchProjectsData();
    }, []);

    return (
        <section className='p-container-main' id='projects'>
            <div className="p-container">
                <p className='blue'>Portfolio</p>
                <ul>
                    {projectsData.map((project, index) => (
                        <li key={project.key} className={index % 2 === 0 ? 'left' : 'right'}>
                            <div className="card-projects">
                                <div className="img-project">
                                    <img src={project.image} alt="" />
                                </div>
                                <div className="info-project">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech">
                                        <ul>
                                            {Object.values(project.tech).map((tech, index) => (
                                                <li key={index} className={`tech-item ${tech.toLowerCase()}`}>
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <ul className='main-visit'>
                                        <li>Code</li>
                                        <li><p className='visit'><a href={project.url}>Live Demo</a></p></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Projects;