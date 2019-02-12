import React from 'react'; 

export default function Prompt(props){
    return(
        <div className="prompt">
            <h2>{props.title}</h2>
            <p>{props.scenario}</p>
            <button >Different Scenario</button>
        </div>
    )
}