import React from 'react';
import RandomizeTextColor from '../higher_order_components/RandomizeTextColor';

const About = () => {
    return (
        <div className='container'>
            <h4 className='center'>About</h4>
            <img src='https://i.ytimg.com/vi/33PdGM0o1XA/maxresdefault.jpg' alt='about'/>
            <h1 className='center'>Sometimes you will never know the value of a moment, until it becomes a memory (Dr. Seuss)</h1>
        </div>
    )
};

export default RandomizeTextColor(About);