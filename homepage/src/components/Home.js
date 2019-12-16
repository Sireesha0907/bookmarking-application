import React, { Component } from 'react';
import fire from '../config/Fire';

class Home extends Component {
    logout = () => {
        fire.auth().signOut()
    }

    render() {
        return (
            <div>
               <h1>Bookmarking Application</h1>
                <button className="loginBtn" onClick={this.logout}>Exit</button>

            </div>
        );
    }

}
export default Home;