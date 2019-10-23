import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Moment from 'react-moment';

// import {
//     HashRouter as Router,
//     Link
//   } from 'react-router-dom';

class DefenseProfile extends Component {
    componentDidMount() {
        this.getDefenseInfo();
    }

    // componentDidUpdate() {
    //     this.getDefenseInfo();
    // }

    getDefenseInfo = () => {
        this.props.dispatch({ type: 'GET_ONE_DEFENSE', payload: this.props.match.params.id })
    }

    editClick = () => {
        console.log("Edit clicked");
        this.props.history.push(`/defenseedit/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div>
                {this.props.defenseProfile.map((oneDefense) => {
                    return (
                        <div key={oneDefense.id}>
                            <h1>{oneDefense.fname} {oneDefense.lname}</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Team:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.team}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>League:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.league}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Shoots:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.shoots}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>DOB:</strong>
                                        </td>
                                        <td>
                                            <Moment format="MM/DD/YY">{oneDefense.dob}</Moment>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Height:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.height}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Weight:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.weight}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Player Type:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.player_type}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Expected Draft Round:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.round}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="epRow" className="profiletd" colSpan="2">
                                            <a href={oneDefense.epurl} target="_blank" rel="noopener noreferrer">EliteProspects Page</a>
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
                                            {oneDefense.skating}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.skating_comments}
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
                                            {oneDefense.puck_skills}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.puck_skills_comments}
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
                                            {oneDefense.competitiveness}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.comp_comments}
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
                                            {oneDefense.physicality}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.phys_comments}
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
                                            {oneDefense.iq}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.iq_comments}
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
                                            {oneDefense.defense}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.def_comments}
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
                                            {oneDefense.psych}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Comments:</strong>
                                        </td>
                                        <td>
                                            {oneDefense.psych_comments}
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
    defenseProfile: state.defenseProfile
})

export default withRouter(connect(mapStateToProps)(DefenseProfile));