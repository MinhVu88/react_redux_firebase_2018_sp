import React from 'react';

const RandomizeTextColor = EnhancedComponent => {
    const colors = ['red', 'green', 'blue', 'black', 'pink', 'yellow'];

    const randomColor = colors[Math.floor(Math.random() * (colors.length - 1))];

    const className = `${randomColor}-text`;

    /*
    - The RandomizeTextColor() function returns an anon function, that takes props as a parameter
    
    - This anon function returns EnhancedComponent wrapped inside JSX
    
    - So when a regular component is passed to RandomizeTextColor(), the extra feature it gets is 
      being able to colorize any text within it randomly, based on the colors array here

    - Props of the regular component (if there are any) are also passed into its enhanced version
      by using the spread operator in <EnhancedComponent /> in the JSX
    */
    return props => {
        return (
            <div className={className}>
                <EnhancedComponent {...props}/>
            </div>
        )
    };
};

export default RandomizeTextColor;