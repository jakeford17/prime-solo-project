import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forwards extends Component {
  componentDidMount() {
    this.getForwards()
  }

  getForwards() {
    this.props.dispatch({ type: 'GET_FORWARDS' });
  }

  render() {
    let forwards = this.props.forwards.map((forwardItem) => {
      return (
        <tr key={forwardItem.id}>
          <td>
            {forwardItem.round}
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
            <a href={forwardItem.epurl} target="_blank" rel="noopener noreferrer">EliteProspects</a>
          </td>
          <td>
            Evaluation
          </td>
        </tr>
      )
    })
    return (
      <>
        <h1>FORWARDS</h1>
        {/* <pre>{JSON.stringify(this.props.forwards)}</pre> */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Team</th>
                <th>League</th>
                <th>Height</th>
                <th>Weight</th>
                <th> </th>
                <th> </th>
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

export default connect(mapStateToProps)(Forwards);