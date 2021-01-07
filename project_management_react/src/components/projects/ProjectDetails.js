import React from 'react';

function ProjectDetails(props) {
    // Route info passed to this component via the props object automatically from the React Router
    console.log(typeof props ,props); 

    let id = props.match.params.id;

    console.log(typeof id, id);

    return (
        <div className='project-details container section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>project title - {id}</span>
                    <p>He who would live must fight. 
                    He who doesn't wish to fight in this world, 
                    where permanent struggle is the law of life, 
                    has not the right to exist</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by....</div>
                    <div>8th April 2020</div> 
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
