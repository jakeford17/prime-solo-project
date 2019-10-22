import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import Moment from 'react-moment';
import { Icon, InlineIcon } from '@iconify/react'; 
import hockeyPuck from '@iconify/icons-mdi/hockey-puck';

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
        <tr className="positiontr" key={forwardItem.id}>
          <td className="positiontd">
            <button className="profileButton" onClick={() => this.forwardProfile(forwardItem)}><Icon icon={hockeyPuck} /></button>
          </td>
          <td className="positiontd">
            {forwardItem.fname}
          </td>
          <td className="positiontd">
            {forwardItem.lname}
          </td>
          <td className="positiontd">
            {forwardItem.team}
          </td>
          <td className="positiontd">
            {forwardItem.league}
          </td>
          <td className="positiontd">
            <Moment format="MM/DD/YY">{forwardItem.dob}</Moment>
          </td>
          <td className="positiontd">
            {forwardItem.height}
          </td>
          <td className="positiontd">
            {forwardItem.weight}
          </td>
          <td className="positiontd" className="positionRightTD">
            {forwardItem.round}
          </td>
        </tr>
      )
    })
    return (
      <>
        <h1>FORWARDS</h1>
        <div>
          <table className="positionTable" class="sortable">
            <thead className="positionTableHeader">
              <tr className="positiontr">
                <th className="positionTableProfileHead" scope="col">Profile</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Team</th>
                <th scope="col">League</th>
                <th scope="col">DOB</th>
                <th scope="col">Height</th>
                <th scope="col">Weight</th>
                <th colspan="9" scope="col" className="positionRightTD">Exp. Round</th>
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