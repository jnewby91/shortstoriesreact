import React, { Component } from 'react';
  import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Logo</h1>
          <ul>
            <a href="#howItWorks"><li>Features</li></a>
              <Link to="stories"><li>Stories</li></Link>
              <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
              <Link to="sign-up"><li>Sign Up</li></Link>
              <Link to="log-in"><button>Log In</button></Link>
          </ul>
        </nav>
        <header>
          <h2>Writing Prompts</h2>
          <p>Come up with gripping, thought-provoking, and challenging writing scenarios from a single prompt!</p>
          <p>[HERO Image will go here]</p>
      </header>
        <section id="howItWorks"class="odd">
            <h2> How It Works</h2>
            <ol>
                <li>Create a new short story and you’ll be asked to Select from the Category of Writing Prompts. </li>
                <li>Next, a randomized prompt will be will be shown for you to write 1-2 paragraphs, 500-word 
                    limit, describing the short story given in the writing prompt scenario </li>
            </ol>
        </section>
        <section class="even">
            <h2>Sign-Up!</h2>
            <p> To get started writing scenarios, you’ll need an account. Fill out the fields below to create your user account! </p>
        </section>
        <section class="odd">
            <h2>Grow A Collection!</h2>
            <p>Grow your personal collection of short stories written overtime. Revisit, change, or delete the short stories written overtime. 
                Make story public so the other people can view your story publicly or keep it private in your account-It’s your choice!</p>
        </section>
        <section class="even">
            <h2>Submit Prompts</h2>
            <p>The Writing Prompts database is always growing!</p>
            <p>Submit a writing prompt and its category suggestion to have others create from your own scenarios. Our team will review the prompt to add twist and censor 
                any possible dark themes.</p>
        </section>
      </div>
    );
  }
}

export default App;
