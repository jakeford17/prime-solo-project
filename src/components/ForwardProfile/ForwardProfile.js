import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Moment from 'react-moment';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

class ForwardProfile extends Component {
    componentDidMount() {
        this.getForwardInfo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.forwardProfile !== prevProps.forwardProfile) {
            this.props.dispatch({ type: 'GET_ONE_FORWARD', payload: this.props.match.params.id })
        }
    }

    getForwardInfo = () => {
        this.props.dispatch({ type: 'GET_ONE_FORWARD', payload: this.props.match.params.id })
    }

    editClick = () => {
        console.log("Edit clicked");
        this.props.history.push(`/forwardedit/${this.props.match.params.id}`);
    }

    hiddenButtonClick = (event) => {
        this.props.dispatch({ type: 'GET_ONE_FORWARD', payload: this.props.match.params.id });
    }

    render() {
        return (
            <div>
                <ScrollToTopOnMount />
                {this.props.forwardProfile.map((oneForward) => {
                    return (
                        <div key={oneForward.id}>
                            <h1 className="positionHeader">{oneForward.fname} {oneForward.lname}</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Team:<button className="hiddenButton" onClick={() => this.hiddenButtonClick()}>UPDATE</button></strong>
                                        </td>
                                        <td>
                                            {oneForward.team}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>League:</strong>
                                        </td>
                                        <td>
                                            {oneForward.league}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Position:</strong>
                                        </td>
                                        <td>
                                            {oneForward.position}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Shoots:</strong>
                                        </td>
                                        <td>
                                            {oneForward.shoots}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>DOB:</strong>
                                        </td>
                                        <td>
                                            <Moment format="MM/DD/YY">{oneForward.dob}</Moment>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Height:</strong>
                                        </td>
                                        <td>
                                            {oneForward.height}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Weight:</strong>
                                        </td>
                                        <td>
                                            {oneForward.weight}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Player Type:</strong>
                                        </td>
                                        <td>
                                            {oneForward.player_type}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profiletd">
                                            <strong>Expected Draft Round:</strong>
                                        </td>
                                        <td>
                                            {oneForward.round}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="epRow" className="profiletd" colSpan="2">
                                            <a href={oneForward.epurl} target="_blank" rel="noopener noreferrer">EliteProspects Page</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2 className="positionHeader">EVALUATION</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan="2">
                                            <h3 className="positionHeader">SKATING</h3>
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
                                            <h3 className="positionHeader">PUCK SKILLS</h3>
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
                                            <h3 className="positionHeader">COMPETITIVENESS</h3>
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
                                            <h3 className="positionHeader">PHYSICALITY</h3>
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
                                            <h3 className="positionHeader">HOCKEY SENSE</h3>
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
                                            <h3 className="positionHeader">DEFENSIVE PLAY</h3>
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
                                            <h3 className="positionHeader">PSYCHOLOGICAL FACTORS</h3>
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
                <button className="mainButton" onClick={this.editClick}>Edit Profile</button>
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapStateToProps = state => ({
    forwardProfile: state.forwardProfile
})

export default withRouter(connect(mapStateToProps)(ForwardProfile));