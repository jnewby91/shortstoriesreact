import React,{Component} from 'react'; 
import './accountPage.css'; 
import {Link} from 'react-router-dom';
import Sidebar from 'react-sidebar'; 
import Collections from './collection'; 




class AccountPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: true
        }; 
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this); 
    }
    
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen:open}); 
    }
    render(){

        return(
        <div className="accountPage">
            <nav>
                <h1>Logo</h1>
                <ul>
                    <Link to="stories"><li>Stories</li></Link>
                    <Link to="submit-writing-prompt"><li>Submit Writing Prompt</li></Link>
                </ul>
            </nav>

            <Sidebar  
                sidebar={
                    <div>
                        <h2>Jnewby</h2>
                        <p className="tagline">This is what stories mean to me!</p>
                      
                        <div className="buttonPanel">
                            <Link to="create-a-story-page"> 
                            <div className="button">
                                {/* <img src="../5173a43b9c.png" alt="plusicon.png"/> */}
                                <p>Create Story</p>
                            </div> 
                            </Link>
                        <div className="button">
                            {/* <img src="../5173a43b9c.png" alt="plusicon.png"/> */}
                            <p>Create Prompt</p>
                        </div>
                        <div className="button">
                            {/* <img src="./icons/b7c37c5a9e.png" alt="personicon.png"/> */}
                            <p>Settings</p>
                        </div> 
                        <div className="button">
                            {/* <img src="https://drive.google.com/file/d/1I7CDOykwu9_Et1r1eN22nXQjqSEC4QM2/view?usp=sharing" alt="logout.png"/> */}
                            <p>Logout</p>
                        </div>     
                        </div>
                </div>
                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                /**
                 * position: fixed;
                 * top: 50px;
                 *  margin-top: 30px;
                 *  height: 100%;
                 * width: 200px;
                 * padding: 1%;
                 *  background-color: lightgrey;
                 */
                styles={{ sidebar: { background: "lightgrey", top: 30, marginTop:100, width: 200, padding: 20 } }}
            >
            
            <button onClick={() => this.onSetSidebarOpen(true)}>
            
            
            </button>

            </Sidebar>

            <h2 className='pageTitle'>Collections</h2>
            
            <Collections 
                title = {'Title'}
                category = {'category'}
                story = {'Lorem '}
                date = {'1/10/2019'}
            />


            <Collections 
                title = {'Title'}
                category = {'category'}
                story = {'Lorem '}
                date = {'1/10/2019'}
            />
        </div>
        )
    }
}

export default AccountPage; 