import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import Moment from 'react-moment';
import { Icon } from '@iconify/react';
import hockeyPuck from '@iconify/icons-mdi/hockey-puck';
import swal from 'sweetalert';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

class Forwards extends Component {
  componentDidMount() {
    this.getForwards()
  }

  componentDidUpdate(prevProps) {
    if (this.props.forwards !== prevProps.forwards) {
      this.props.dispatch({ type: 'GET_FORWARDS' });
    }
  }

  getForwards() {
    this.props.dispatch({ type: 'GET_FORWARDS' });
  }

  forwardProfile = (forward) => {
    console.log("Evaluation Clicked")
    this.props.history.push(`/forwardprofile/${forward.id}`)
  }

  handleDeleteAll = (id) => {
    if (window.confirm("Are you sure want to delete all forwards? This action cannot be undone.")) {
    } else {
      console.log("Delete rejected");
    }
  }

  handleDeleteAll = (id) => {
    swal({
      title: "ARE YOU SURE?",
      text: "This action will delete all forwards from the database. Once deleted, these files cannot be recovered.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({ type: 'DELETE_ALL_FORWARDS', payload: id });
          swal("All forwards deleted.", {
            icon: "success",
          });
          this.props.history.push(`/forwards`);
        } else {
          swal("Forwards not deleted.");
        }
      });
  }

  render() {
    let deleteButton
    if (this.props.user.admin === 1) {
      deleteButton = <button className="mainButton" onClick={() => this.handleDeleteAll(this.props.match.params.id)}>DELETE ALL FORWARDS</button>
    } if (this.props.user.admin === 2) {
      deleteButton = <div></div>
    }

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
        <h1 className="positionHeader">FORWARDS</h1>
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
              {forwards}
            </tbody>
          </table>
        </div>
        {deleteButton}
      </>
    );
  }
}

const mapStateToProps = state => ({
  forwards: state.forwards,
  user: state.user
})

export const history = createHashHistory()
export default connect(mapStateToProps)(Forwards);