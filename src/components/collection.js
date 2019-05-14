import React from 'react'; 
import {Link} from 'react-router-dom'; 
import '../components/collection.js'

//Make a prop that allows the readonly property to be added| This is why I made props.editable
//onChange need to be able to update the value of title and story

export default function Collections(props) {
    return(
        <div className= "collections">
            <input 
                value={props.title} 
                readOnly={props.editing} 
                // onChange={props.onChange}
            />
            <p>{props.category}</p> 
            <textarea 
                value={props.story}  
                readOnly={props.editing} 
                // onChange={props.onChange}
            ></textarea>
            <p>{props.date}</p> 
        </div>
    )
}