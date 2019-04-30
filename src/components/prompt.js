import React from 'react';

/**
 * Create a onClick() so that a functions can happen in the component 
 */

export default function Prompt(props){
    return(
        <div className="prompt">
            <h2>{props.title}</h2>
            <p>{props.scenario}</p>
            <button >Different Scenario</button>
        </div>
    )
}