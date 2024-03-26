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
        <div className='p-container-main'>
            <div className="p-container">
                <p className='blue'>Portfolio</p>
                <ul>
                    {projectsData.map((project) => (
                        <li key={project.key}>
                            <p>{project.name}</p>
                            <img src={project.image}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Projects;