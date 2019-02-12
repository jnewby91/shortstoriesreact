import React, {Component} from 'react'; 
import './story.css'; 


class StoryForm extends Component { 

    render() {
        return (
            <form className="storyForm">
                <label for="title" id="title">Title</label>
                <input id="title"type="text" name="title" />
                <label for="story" id="story" >Short Story</label>
                <textarea name="story" id="story" cols="30" rows="10">
                    Create one to two paragraphs describing your writing prompt. 
                </textarea>
                <input name="submit" type="submit" value="Submit" />
            </form>
        )
    }
}

export default StoryForm; 
