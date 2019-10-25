import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import Moment from 'react-moment';
import { Icon } from '@iconify/react';
import hockeyPuck from '@iconify/icons-mdi/hockey-puck';
import swal from 'sweetalert';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

class Goalies extends Component {
  componentDidMount() {
    this.getDefense()
  }

  getDefense() {
    this.props.dispatch({ type: 'GET_GOALIE' });
  }

  goalieProfile = (goalie) => {
    console.log("Evaluation Clicked")
    this.props.history.push(`/goalieprofile/${goalie.id}`)
  }

  handleDeleteAll = (id) => {
    swal({
      title: "ARE YOU SURE?",
      text: "This action will delete all goaltenders from the database. Once deleted, these files cannot be recovered.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({ type: 'DELETE_ALL_GOALIE', payload: id });
          swal("All goaltenders deleted.", {
            icon: "success",
          });
          this.props.history.push(`/goalies`);
        } else {
          swal("Goaltenders not deleted.");
        }
      });
  }

  render() {
    let goalie = this.props.goalie.map((goalieItem) => {
      return (
        <tr className="positiontr" key={goalieItem.id}>
          <td className="positiontd">
            <button className="profileButton" onClick={() => this.goalieProfile(goalieItem)}><Icon icon={hockeyPuck} /></button>
          </td>
          <td className="positiontd">
            {goalieItem.fname}
          </td>
          <td className="positiontd">
            {goalieItem.lname}
          </td>
          <td className="positiontd">
            {goalieItem.team}
          </td>
          <td className="positiontd">
            {goalieItem.league}
          </td>
          <td className="positiontd">
            <Moment format="MM/DD/YY">{goalieItem.dob}</Moment>
          </td>
          <td className="positiontd">
            {goalieItem.height}
          </td>
          <td className="positiontd">
            {goalieItem.weight}
          </td>
          <td className="positiontd" className="positionRightTD">
            {goalieItem.round}
          </td>
        </tr>
      )
    })
    return (
      <>
        <h1>GOALTENDERS</h1>
        <div>
          <ScrollToTopOnMount />
          <table className="positionTable">
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
              {goalie}
            </tbody>
          </table>
        </div>
        <button className="mainButton" onClick={() => this.handleDeleteAll(this.props.match.params.id)}>DELETE ALL GOALTENDERS</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  goalie: state.goalie
})

export const history = createHashHistory()
export default connect(mapStateToProps)(Goalies);