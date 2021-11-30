import React, { useState } from 'react';

import './Projects.css';

const projects = [
    {
        id: 1,
        name: "Brainy Drone",
        img: "https://i.ibb.co/rwNnWt8/subtle-cinematics-K-BZx-Fwbm-E-unsplash.jpg",
        shortDetails: " An E-Commerce website to sell & buy Drones with Authentication system.",

        liveLink: "https://brainy-drone.web.app/",
        clientLink: "https://github.com/thezamalian/brainy-drone",
        serverLink: "https://github.com/thezamalian/brainy-drone-server"
    }
];

const project = projects[0];

const Projects = () => {
    // const [dir, setDir] = useState('left');
    const array = [1, 2, 3, 4];

    return (
        <div id="projects ">
            <h2>All of my Projects</h2>

            <div className="my-container">
                {
                    array.map(n => <section
                        key={n}
                        className="my-card"
                        // { setDir(n%2 === 0 ?'right' : 'left') }
                        data-aos={`fade-${n % 2 === 0 ? 'right' : 'left'}`}
                    >
                        <img src={project.img} alt="..." />
                        <div>
                            <h3>{project.name}</h3>
                            <p>{project.shortDetails}</p>
                            <a href="/" className="button">See Details</a>
                        </div>
                    </section>)
                }

            </div>

            {/* <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    array.map(n => <div class="col" key={n}>
                        <div class="card h-100 bg-dark bg-opacity-75 text-white">
                            <img src={project.img} class="card-img-top " alt="..." style={{ width: '50%' }} />
                            <div class="card-body">
                                <h5 class="card-title">{project.name}</h5>
                                <p class="card-text">{project.shortDetails}</p>
                            </div>

                            <button className="btn btn-info w-100">See Details</button>

                        </div>

                    </div>)
                }
            </div> */}
        </div>
    );
};

export default Projects;