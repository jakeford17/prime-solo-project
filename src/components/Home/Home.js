import React, { Component } from 'react';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Home extends Component {
  forwardClick = () => {
    console.log("FORWARD CLICKED");
    this.props.history.push(`/createforward`);
  }

  defenseClick = () => {
    console.log("DEFENSE CLICKED");
    // this.props.history.push(`/edit/${this.props.match.params.id}`);
  }

  goalieClick = () => {
    console.log("GOALIE CLICKED");
    // this.props.history.push(`/edit/${this.props.match.params.id}`);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Welcome!</h1>
          <p>
            Welcome to Hockey Prospect DB, a site used to help track NHL prospects for next June's NHL Entry Draft!
          </p>
            <h2 className="createHeader">Create a New Player</h2>
            <button className="createPosition" onClick={this.forwardClick}>CREATE FORWARD</button>
            <button className="createPosition" onClick={this.defenseClick}>CREATE DEFENSEMAN</button>
            <button className="createPosition" onClick={this.goalieClick}>CREATE GOALTENDER</button>
        </div>
      </div>
    );
  }
}

export default Home;
