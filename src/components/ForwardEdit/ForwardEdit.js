import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

class ForwardEdit extends Component {
    state = {
        fname: '',
        lname: '',
        dob: '',
        position: '',
        shoots: '',
        team: '',
        league: '',
        height: '',
        weight: '',
        epurl: '',
        skating: '',
        skating_comments: '',
        puck_skills: '',
        puck_skills_comments: '',
        competitiveness: '',
        comp_comments: '',
        physicality: '',
        phys_comments: '',
        iq: '',
        iq_comments: '',
        defense: '',
        def_comments: '',
        psych: '',
        psych_comments: '',
        player_type: '',
        round: ''
    }


    componentDidMount() {
        this.props.forwardProfile.map((player) => {
            return (
                this.setState({
                    fname: player.fname,
                    lname: player.lname,
                    dob: player.dob,
                    position: player.position,
                    shoots: player.shoots,
                    team: player.team,
                    league: player.league,
                    height: player.height,
                    weight: player.weight,
                    epurl: player.epurl,
                    skating: player.skating,
                    skating_comments: player.skating_comments,
                    puck_skills: player.puck_skills,
                    puck_skills_comments: player.puck_skills_comments,
                    competitiveness: player.competitiveness,
                    comp_comments: player.comp_comments,
                    physicality: player.physicality,
                    phys_comments: player.phys_comments,
                    iq: player.iq,
                    iq_comments: player.iq_comments,
                    defense: player.defense,
                    def_comments: player.def_comments,
                    psych: player.psych,
                    psych_comments: player.psych_comments,
                    player_type: player.player_type,
                    round: player.round
                })
            )
        })
    }

    handleBack = () => {
        this.props.history.push(`/forwardprofile/${this.props.match.params.id}`)
    }

    handleSave = () => {
        console.log("HANDLE SAVE")
        this.props.dispatch({ type: 'FORWARD', payload: this.state });
        this.setState({
            state: this.state
        })
        this.handleBack();
    }

    handleChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
        console.log("State: ", this.state)
    }

    handleDelete = () => {
        console.log("HANDLE DELETE")
        // this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movieEdit });
        this.props.history.push(`/forwards`)
    }

    render() {
        return (
            <div>
                {this.props.forwardProfile.map((oneForward) => {
                    return (
                        <div key={oneForward.id}>
                            <h1>Edit Profile: {oneForward.fname} {oneForward.lname}</h1>
                            First Name:<br/>
                            <input label="First Name" variant="filled" value={this.state.fname} onChange={(event) => this.handleChange(event, "fname")} /><br/><br/>
                            Last Name:<br/>
                            <input label="Last Name" variant="filled" value={this.state.lname} onChange={(event) => this.handleChange(event, "lname")} /><br/><br/>
                            DOB (MM/DD/YY):<br/>
                            <input label="DOB" variant="filled" value={this.state.dob} onChange={(event) => this.handleChange(event, "dob")} /><br/><br/>
                            Position(s):<br/>
                            <input label="Position" variant="filled" value={this.state.position} onChange={(event) => this.handleChange(event, "position")} /><br/><br/>
                            Shoots:<br/>
                            <input label="Shoots" variant="filled" value={this.state.shoots} onChange={(event) => this.handleChange(event, "shoots")} /><br/><br/>
                            Team:<br/>
                            <input label="Team" variant="filled" value={this.state.team} onChange={(event) => this.handleChange(event, "team")} /><br/><br/>
                            League:<br/>
                            <input label="League" variant="filled" value={this.state.league} onChange={(event) => this.handleChange(event, "league")} /><br/><br/>
                            Height:<br/>
                            <input label="Height" variant="filled" value={this.state.height} onChange={(event) => this.handleChange(event, "height")} /><br/><br/>
                            Weight:<br/>
                            <input label="Weight" variant="filled" value={this.state.weight} onChange={(event) => this.handleChange(event, "weight")} /><br/><br/>
                            Player Type:<br/>
                            <input label="Player Type" variant="filled" value={this.state.player_type} onChange={(event) => this.handleChange(event, "player_type")} /><br/><br/>
                            Expected Draft Round:<br/>
                            <input label="Round" variant="filled" value={this.state.round} onChange={(event) => this.handleChange(event, "round")} /><br/><br/>
                            EliteProspects URL:<br/>
                            <input label="EliteProspects" variant="filled" value={this.state.epurl} onChange={(event) => this.handleChange(event, "epurl")} /><br/><br/>
                            Skating Rating:<br/>
                            <input label="Skating" variant="filled" value={this.state.skating} onChange={(event) => this.handleChange(event, "skating")} /><br/><br/>
                            Skating Comments:<br/>
                            <textarea label="Skating Comments" variant="filled" value={this.state.skating_comments} onChange={(event) => this.handleChange(event, "skating_comments")} /><br/><br/>
                            Puck Skills Rating:<br/>
                            <input label="Puck Skills" variant="filled" value={this.state.puck_skills} onChange={(event) => this.handleChange(event, "puck_skills")} /><br/><br/>
                            Puck Skills Comments:<br/>
                            <textarea label="Puck Skills Comments" variant="filled" value={this.state.puck_skills_comments} onChange={(event) => this.handleChange(event, "puck_skills_comments")} /><br/><br/>
                            Competitiveness Rating:<br/>
                            <input label="Competitiveness" variant="filled" value={this.state.competitiveness} onChange={(event) => this.handleChange(event, "competitiveness")} /><br/><br/>
                            Competitiveness Comments:<br/>
                            <textarea label="Competitiveness Comments" variant="filled" value={this.state.comp_comments} onChange={(event) => this.handleChange(event, "comp_comments")} /><br/><br/>
                            Physicality Rating:<br/>
                            <input label="Physicality" variant="filled" value={this.state.physicality} onChange={(event) => this.handleChange(event, "physicality")} /><br/><br/>
                            Physicality Comments:<br/>
                            <textarea label="Physicality Comments" variant="filled" value={this.state.phys_comments} onChange={(event) => this.handleChange(event, "phys_comments")} /><br/><br/>
                            Hockey Sense Rating:<br/>
                            <input label="IQ" variant="filled" value={this.state.iq} onChange={(event) => this.handleChange(event, "iq")} /><br/><br/>
                            Hockey Sense Comments:<br/>
                            <textarea label="IQ Comments" variant="filled" value={this.state.iq_comments} onChange={(event) => this.handleChange(event, "iq_comments")} /><br/><br/>
                            Defensive Play Rating:<br/>
                            <input label="Defense" variant="filled" value={this.state.defense} onChange={(event) => this.handleChange(event, "defense")} /><br/><br/>
                            Defensive Play Comments:<br/>
                            <textarea label="Defense Comments" variant="filled" value={this.state.def_comments} onChange={(event) => this.handleChange(event, "def_comments")} /><br/><br/>
                            Psychological Factors Rating:<br/>
                            <input label="Psychological" variant="filled" value={this.state.psych} onChange={(event) => this.handleChange(event, "psych")} /><br/><br/>
                            Psychological Factors Comments:<br/>
                            <textarea label="Psychological Comments" variant="filled" value={this.state.psych_comments} onChange={(event) => this.handleChange(event, "psych_comments")} />
                        </div>
                    )
                })}
                <br />
                <button className="createPosition" onClick={this.handleBack}>Cancel</button>
                <button className="createPosition" onClick={this.handleSave}>Save Changes</button>
                <button className="createPosition" onClick={this.handleDelete}>Delete Changes</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    forwardProfile: state.forwardProfile
})

export default withRouter(connect(mapStateToProps)(ForwardEdit));