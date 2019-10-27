import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Moment from 'react-moment';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';


// import {
//     HashRouter as Router,
//     Link
//   } from 'react-router-dom';

class GoalieProfile extends Component {
    componentDidMount() {
        this.getGoalieInfo();
    }

    componentDidUpdate() {
        this.props.dispatch({ type: 'GET_ONE_GOALIE', payload: this.props.match.params.id })
    }

    getGoalieInfo = () => {
        this.props.dispatch({ type: 'GET_ONE_GOALIE', payload: this.props.match.params.id })
    }

    editClick = () => {
        console.log("Edit clicked");
        this.props.history.push(`/goalieedit/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div>
                <ScrollToTopOnMount />
                {this.props.goalieProfile.map((oneGoalie) => {
                    return (
                        <div key={oneGoalie.id}>
                            <h1 className="positionHeader">{oneGoalie.fname} {oneGoalie.lname}</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Team:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.team}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>League:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.league}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Catches:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.catches}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>DOB:</strong>
                                        </td>
                                        <td>
                                            <Moment format="MM/DD/YY">{oneGoalie.dob}</Moment>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Height:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.height}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Weight:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.weight}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Where He Plays:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.where}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Playing Style:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.style}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Playing Personality:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.personality}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Expected Draft Round:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.round}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="epRow" className="profiletd" colSpan="2">
                                            <a href={oneGoalie.epurl} target="_blank" rel="noopener noreferrer">EliteProspects Page</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2 className="positionHeader">EVALUATION</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">NET COVERAGE</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.net_coverage}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.nc_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">QUICKNESS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.quickness}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.quickness_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">REBOUND CONTROL</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.rebound_control}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.rc_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">COMPETITIVENESS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.competitiveness}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.comp_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">SKILLS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Skills:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.skills}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.skills_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">PSYCHOLOGICAL FACTORS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.psych}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneGoalie.psych_comments}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
                <br />
                <button className="mainButton" onClick={this.editClick}>Edit Profile</button>
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapStateToProps = state => ({
    goalieProfile: state.goalieProfile
})

export default withRouter(connect(mapStateToProps)(GoalieProfile));