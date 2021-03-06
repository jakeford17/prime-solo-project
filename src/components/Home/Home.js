import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';

class Home extends Component {
  forwardClick = () => {
    this.props.history.push(`/createforward`);
  }

  defenseClick = () => {
    console.log("DEFENSE CLICKED");
    this.props.history.push(`/createdefense`);
  }

  goalieClick = () => {
    console.log("GOALIE CLICKED");
    this.props.history.push(`/creategoalie`);
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="positionHeader">Welcome, {this.props.user.username}!</h1>
          <p>
            Welcome to Hockey Prospect DB, a site used to help track NHL prospects for next June's NHL Entry Draft!
          </p>
          <h2 className="createHeader">Create a New Player</h2>
          <button className="mainButton" onClick={this.forwardClick}>CREATE FORWARD</button>
          <button className="mainButton" onClick={this.defenseClick}>CREATE DEFENSEMAN</button>
          <button className="mainButton" onClick={this.goalieClick}>CREATE GOALTENDER</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export const history = createHashHistory()
export default connect(mapStateToProps)(Home);
