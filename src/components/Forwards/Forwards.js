import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import Moment from 'react-moment';
import { Icon } from '@iconify/react';
import hockeyPuck from '@iconify/icons-mdi/hockey-puck';
import swal from 'sweetalert';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
// import { Table, } from 'semantic-ui-react';
// import _ from 'lodash';

// const colors = [
//   'black',
// ]

class Forwards extends Component {
  // state = {
  //   column: null,
  //   data: this.props.forwards,
  //   direction: null,
  // }

  // handleSort = (clickedColumn) => () => {
  //   const { column, data, direction } = this.state

  //   if (column !== clickedColumn) {
  //     this.setState({
  //       column: clickedColumn,
  //       data: _.sortBy(data, [clickedColumn]),
  //       direction: 'ascending',
  //     })

  //     return
  //   }

  //   this.setState({
  //     data: data.reverse(),
  //     direction: direction === 'ascending' ? 'descending' : 'ascending',
  //   })
  // }

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
    // const { column, data, direction } = this.state

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
        {/*<ScrollToTopOnMount/>
       <h1 className="positionHeader">FORWARDS</h1>
      <Table celled selectable color={colors} key={colors} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'profile' ? direction : null}
              >
                Profile
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'fname' ? direction : null}
                onClick={this.handleSort('fname')}
              >
                First Name
            </Table.HeaderCell>
            <Table.HeaderCell
                sorted={column === 'lname' ? direction : null}
                onClick={this.handleSort('lname')}
              >
                Last Name
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'team' ? direction : null}
                onClick={this.handleSort('team')}
              >
                Team
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'league' ? direction : null}
                onClick={this.handleSort('league')}
              >
                League
            </Table.HeaderCell>
            <Table.HeaderCell
                sorted={column === 'dob' ? direction : null}
                onClick={this.handleSort('dob')}
              >
                DOB
            </Table.HeaderCell>
            <Table.HeaderCell
                sorted={column === 'height' ? direction : null}
              >
                Height
            </Table.HeaderCell>
            <Table.HeaderCell
                sorted={column === 'weight' ? direction : null}
              >
                Weight
            </Table.HeaderCell>
            <Table.HeaderCell
                sorted={column === 'round' ? direction : null}
                onClick={this.handleSort('dob')}
              >
                Exp. Round
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {_.map(data, ({ id, fname, lname, team, league, dob, height, weight, round }) => (
              <Table.Row key={round}>
                <Table.Cell> <button className="profileButton" onClick={() => this.forwardProfile(id)}><Icon icon={hockeyPuck} /></button></Table.Cell>
                <Table.Cell>{fname}</Table.Cell>
                <Table.Cell>{lname}</Table.Cell>
                <Table.Cell>{team}</Table.Cell>
                <Table.Cell>{league}</Table.Cell>
                <Table.Cell><Moment format="MM/DD/YY">{dob}</Moment></Table.Cell>
                <Table.Cell>{height}</Table.Cell>
                <Table.Cell>{weight}</Table.Cell>
                <Table.Cell>{round}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {deleteButton} */}
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