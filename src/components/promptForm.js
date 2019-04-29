import React from 'react'; 
import { connect } from 'react-redux';
import { createAPrompt } from '../actions/prompts';

class PromptForm extends React.Component{
    constructor(props){
    super(props);
        this.state= {
            title: '',
            scenario: '',
            category: 'Adventure' 
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleScenarioChange = this.handleScenarioChange.bind(this)
    }
   
    handleTitleChange(event){
        console.log(event);
        this.setState({
            title: event.target.value
        });
    }
    
    handleScenarioChange(event){
        console.log(event);
        this.setState({
            scenario: event.target.value
        });
    }

    handleCategoryChange(event){
        console.log(event);
        this.setState({
            category: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault(); 
        const title = this.state.title; 
        const scenario = this.state.scenario; 
        const category = this.state.category; 
        this.props.dispatch(createAPrompt(title, scenario, category)); 

    }


    render(){
        return(
            <form className="promptForm" onSubmit={(e)=>{ this.handleSubmit(e)}}> 
                <label htmlFor="title">Title</label>
                <input 
                    id="prompt_title"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={(e)=>{this.handleTitleChange(e)}}
                />
                <label htmlFor="scenario">Scenario</label>
                <input 
                    id="prompt_scenario"
                    type="text"
                    name="scenario"
                    value={this.state.scenario}
                    onChange={(e)=>{this.handleScenarioChange(e)}}
                />
                <label htmlFor="category">Category</label>
                <select 
                    id="prompt_category"
                    name="category"
                    value={this.state.category}
                    onChange={(e)=>{this.handleCategoryChange(e)}}
                 >
                    <option value="Adventure">Adventure</option>
                    <option value="Real-Event">Real-Event</option>
                    <option value="Drama">Drama</option>
                    <option value="Sports">Sports</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        )
    }
}


export default connect() (PromptForm); 