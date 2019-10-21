import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

// import {
//     HashRouter as Router,
//     Link
//   } from 'react-router-dom';

class ForwardProfile extends Component {
    componentDidMount() {
        this.getForwardInfo();
    }

    // componentDidUpdate() {
    //     this.props.dispatch({ type: 'GET_ONE_FORWARD', payload: this.props.match.params.id })
    // }

    getForwardInfo = () => {
        this.props.dispatch({ type: 'GET_ONE_FORWARD', payload: this.props.match.params.id })
    }

    editClick = () => {
        console.log("Edit clicked");
        this.props.history.push(`/forwardedit/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div>
                {this.props.forwardProfile.map((oneForward) => {
                    return (
                        <div key={oneForward.id}>
                            <h1>{oneForward.fname} {oneForward.lname}</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Team:</strong>
                                        </td>
                                        <td>
                                            {oneForward.team}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>League:</strong>
                                        </td>
                                        <td>
                                            {oneForward.league}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Position:</strong>
                                        </td>
                                        <td>
                                            {oneForward.position}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Shoots:</strong>
                                        </td>
                                        <td>
                                            {oneForward.shoots}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>DOB:</strong>
                                        </td>
                                        <td>
                                            {oneForward.dob}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Player Type:</strong>
                                        </td>
                                        <td>
                                            {oneForward.player_type}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Expected Draft Round:</strong>
                                        </td>
                                        <td>
                                            {oneForward.round}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <a href={oneForward.epurl} target="_blank" rel="noopener noreferrer">EliteProspects Page</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2>EVALUATION</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan="2">
                                            <h3>SKATING</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.skating}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.skating_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <h3>PUCK SKILLS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.puck_skills}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.puck_skills_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <h3>COMPETITIVENESS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.competitiveness}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.comp_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <h3>PHYSICALITY</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.physicality}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.phys_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <h3>HOCKEY SENSE</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.iq}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.iq_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <h3>DEFENSIVE PLAY</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.defense}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.def_comments}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <h3>PSYCHOLOGICAL FACTORS</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Rating:</strong>
                                        </td>
                                        <td>
                                            {oneForward.psych}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneForward.psych_comments}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
                <br />
                <button className="createPosition" onClick={this.editClick}>Edit Profile</button>
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapStateToProps = state => ({
    forwardProfile: state.forwardProfile
})

export default withRouter(connect(mapStateToProps)(ForwardProfile));