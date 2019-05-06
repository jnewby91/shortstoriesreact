import React, { Component } from 'react';
import Navigator from './components/nav'

import './App.css';
import './grid.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <header>
          <p>Start new ideas from <span class='bold'>Scenarios. </span></p>
          <p class='normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod, pariatur ipsam harum repellendus ab doloribus enim dolore beatae est dignissimos nihil inventore, voluptatum, dolorum repudiandae maiores? Assumenda, similique animi.</p>

        </header>
        <section id="howItWorks"class="odd">
            <h2> Why You Should Join Spark</h2>
            <div class='row'> 
              <div class='col-3'> 
                  <div class='collection_icon'></div>
                  <h3>Make A Collection</h3>
                  <p>Grow your personal collection of short stories written overtime. Revisit, change, or delete the short stories written overtime. Make story public so the other people can view your story publicly or keep it private in your account-It’s your choice!</p>
              </div>

             <div class='col-3'>
             <div class='prompts_icon'></div> 
                  <h3>Submit Prompts</h3>
                  <p>Submit a writing prompt and its category suggestion to have others create from your own scenarios. Our team will review the prompt to add twist and censor 
              any possible dark themes.</p>
              </div>

              <div class='col-3'>
              <div class='share_icon'></div> 
                  <h3>Make A Collection</h3>
                  <p>Grow your personal collection of short stories written overtime. Revisit, change, or delete the short stories written overtime. Make story public so the other people can view your story publicly or keep it private in your account-It’s your choice!</p>
              </div>

              <div class='col-3'> 
              <div class='write_icon'></div>
                  <h3>Make A Collection</h3>
                  <p>Grow your personal collection of short stories written overtime. Revisit, change, or delete the short stories written overtime. Make story public so the other people can view your story publicly or keep it private in your account-It’s your choice!</p>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
