import React from 'react';

/**
 * Create a onClick() so that a functions can happen in the component 
 */

export default function Prompt(props){
    return(
        <div className="prompt">
            <h2>{props.currentPrompt.title}</h2>
            <p>{props.currentPrompt.scenario}</p>
        </div>
    )
}