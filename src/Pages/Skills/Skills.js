import React from 'react';

const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    // "ES6",
    "ReactJS",
    "MaterialUI",
    "Bootstrap",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
]

const Skills = () => {
    return (
        <div className="my-3">
            <h1>My skills</h1>
            {/* <p>I am experienced in HTML/CSS, JavaScript, React, MaterialUI, Bootstrap, Node.js, Express.js and MongoDB.</p> */}

            {/* <div className="row row-cols-4 mx-auto"> */}
            {
                mySkills.map(skill => <h4 className="button me-2 mt-1 rounded shadow-lg s" >{skill}</h4>)
            }
        </div>
    );
};

export default Skills;