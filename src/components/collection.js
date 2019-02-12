import React from 'react'; 
import '../components/collection.js'

export default function Collections(props) {
    return(
        <div className= "collections">
            <h3>{props.title}</h3>
            <p>{props.category}</p>
            <p>{props.story}</p>
            <p>{props.date}</p> 
        </div>
    )
}