import React from 'react';

export default function ProjectSummary({project}) {
    return (
        <div className='project-summary card z-depth-0'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{project.title}</span>
                <p>Posted by....</p>
                <p className='grey-text'>8th Apr 2020</p>
            </div>
        </div>
    );
};
