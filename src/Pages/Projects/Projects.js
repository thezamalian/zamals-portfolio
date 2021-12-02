import React from 'react';

import './Projects.css';

const projects = [
    {
        id: 1,
        name: "Brainy Drone",
        img: "https://i.ibb.co/ykZ1P61/01-brainy-drone.png",
        shortDetails: " An E-Commerce website to sell & buy Drones with Authentication system. Used React to allow users to instantaneously make & manage orders interface without reloading. Built Admin panel to Manage all orders & products, Make admin & Add product without reloading.",

        liveLink: "https://brainy-drone.web.app/",
        clientLink: "https://github.com/thezamalian/brainy-drone",
        serverLink: "https://github.com/thezamalian/brainy-drone-server"
    },
    {
        id: 2,
        name: "SpicyX Tourism",
        img: "https://i.ibb.co/qyvZMKN/02-spicyx-tourism.png",
        shortDetails: "A service providing a website for Tourism with Authentication system. A user can manage his orders without reloading because of React. An admin section to manage all orders & add new packages.",

        liveLink: "https://spicyx-tourism.web.app/",
        clientLink: "https://github.com/thezamalian/spicyx-tourism",
        serverLink: "https://github.com/thezamalian/spicyx-tourism-server"
    },
    {
        id: 3,
        name: "Doctor Mama",
        img: "https://i.ibb.co/7Sqx9Y8/03-doctor-mama.png",
        shortDetails: "A doctors portal with authentication & single page routing system. Patients can make appointment and get prescription with login & without reloading. A logged in patient can book any of our service & get the treatment he/she wants",

        liveLink: "https://doctor-mamma.web.app/",
        clientLink: "https://github.com/thezamalian/doctor-mama",
        serverLink: "https://github.com/thezamalian/doctor-mama-server"
    },
    /* {
        id: 4,
        name: "Science Mode",
        img: "https://i.ibb.co/X7XZ0pY/04-science-mode.png",
        shortDetails: "If you’re near the downstairs island, look for a bulletin board titled “Science Hopes and Dreams.” It’s filled with quotes from our 1st-through-5th grade science students, articulating what they’d like to achieve or try in science this year. You’ll see “study the human body and go to Bridgewalk Pond more often,” “make chain reactions and potions,” “do a lot of partner work,” or “catch a bug and study it.” Like most years, “explosions” are a common theme.",

        liveLink: "https://review-website-thezamalian.netlify.app/",
        clientLink: "https://github.com/thezamalian/science-mode",
        serverLink: "https://github.com/thezamalian/science-mode-server"
    }, */
];

// const project = projects[0];

const Projects = () => {
    // const [dir, setDir] = useState('left');
    // const array = [1, 2, 3, 4];

    return (
        <div id="projects ">
            <h1>All of my Projects</h1>

            <div className="my-container">
                {
                    projects.map(project => <section
                        key={project.id}
                        className="my-card"
                        // { setDir(n%2 === 0 ?'right' : 'left') }
                        data-aos={`fade-${projects.indexOf(project) % 2 === 0 ? 'right' : 'left'}`}
                    >
                        <img src={project.img} alt="..." />
                        <div>
                            <h3>{project.name}</h3>
                            <p>{project.shortDetails}</p>

                            <a href={project.liveLink} className="button me-2" target="_blank" rel="noreferrer">Live Site</a>
                            <a href={project.clientLink} className="button me-2" target="_blank" rel="noreferrer">Client Side</a>
                            <a href={project.serverLink} className="button " target="_blank" rel="noreferrer">Server Side</a>
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