import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';

class Forwards extends Component {
  componentDidMount() {
    this.getForwards()
  }

  getForwards() {
    this.props.dispatch({ type: 'GET_FORWARDS' });
  }

  forwardProfile = (forward) => {
    console.log("Evaluation Clicked")
    this.props.history.push(`/forwardprofile/${forward.id}`)
  }

  render() {
    let forwards = this.props.forwards.map((forwardItem) => {
      return (
        <tr key={forwardItem.id}>
          <td>
            <button className="profileButton" onClick={() => this.forwardProfile(forwardItem)}>&#x1f3d2;</button>
          </td>
          <td>
            {forwardItem.fname}
          </td>
          <td>
            {forwardItem.lname}
          </td>
          <td>
            {forwardItem.team}
          </td>
          <td>
            {forwardItem.league}
          </td>
          <td>
            {forwardItem.height}
          </td>
          <td>
            {forwardItem.weight}
          </td>
          <td>
            {forwardItem.round}
          </td>
        </tr>
      )
    })
    return (
      <>
        <h1>FORWARDS</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Team</th>
                <th>League</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Exp. Round</th>
              </tr>
            </thead>
            <tbody>
              {forwards}
            </tbody>
          </table>
        </div>

      </>
    );
  }
}

const mapStateToProps = state => ({
  forwards: state.forwards
})

export const history = createHashHistory()
export default connect(mapStateToProps)(Forwards);