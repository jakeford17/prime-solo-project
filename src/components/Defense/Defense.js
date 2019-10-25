import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import Moment from 'react-moment';
import { Icon } from '@iconify/react';
import hockeyPuck from '@iconify/icons-mdi/hockey-puck';
import swal from 'sweetalert';

class Defense extends Component {
  componentDidMount() {
    this.getDefense()
  }

  getDefense() {
    this.props.dispatch({ type: 'GET_DEFENSE' });
  }

  defenseProfile = (defense) => {
    console.log("Evaluation Clicked")
    this.props.history.push(`/defenseprofile/${defense.id}`)
  }

  handleDeleteAll = (id) => {
    if (window.confirm("Are you sure want to delete all defensemen? This action cannot be undone.")) {
    } else {
      console.log("Delete rejected");
    }
  }

  handleDeleteAll = (id) => {
    swal({
        title: "ARE YOU SURE?",
        text: "This action will delete all defensemen from the database. Once deleted, these files cannot be recovered.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
              this.props.dispatch({ type: 'DELETE_ALL_DEFENSE', payload: id });
              swal("All defensemen deleted.", {
                    icon: "success",
                });
                this.props.history.push(`/defense`);
            } else {
                swal("Defensemen not deleted.");
            }
        });
  }

  render() {
    let defense = this.props.defense.map((defenseItem) => {
      return (
        <tr className="positiontr" key={defenseItem.id}>
          <td className="positiontd">
            <button className="profileButton" onClick={() => this.defenseProfile(defenseItem)}><Icon icon={hockeyPuck} /></button>
          </td>
          <td className="positiontd">
            {defenseItem.fname}
          </td>
          <td className="positiontd">
            {defenseItem.lname}
          </td>
          <td className="positiontd">
            {defenseItem.team}
          </td>
          <td className="positiontd">
            {defenseItem.league}
          </td>
          <td className="positiontd">
            <Moment format="MM/DD/YY">{defenseItem.dob}</Moment>
          </td>
          <td className="positiontd">
            {defenseItem.height}
          </td>
          <td className="positiontd">
            {defenseItem.weight}
          </td>
          <td className="positiontd" className="positionRightTD">
            {defenseItem.round}
          </td>
        </tr>
      )
    })
    return (
      <>
        <h1>DEFENSEMEN</h1>
        <div>
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
              {defense}
            </tbody>
          </table>
        </div>
        <button className="mainButton" onClick={() => this.handleDeleteAll(this.props.match.params.id)}>DELETE ALL DEFENSEMEN</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  defense: state.defense
})

export const history = createHashHistory()
export default connect(mapStateToProps)(Defense);