import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import swal from 'sweetalert';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

class GoalieEdit extends Component {
    state = {
        fname: '',
        lname: '',
        dob: '',
        catches: '',
        team: '',
        league: '',
        height: '',
        weight: '',
        epurl: '',
        net_coverage: '',
        nc_comments: '',
        quickness: '',
        quickness_comments: '',
        rebound_control: '',
        rc_comments: '',
        competitiveness: '',
        comp_comments: '',
        skills: '',
        skills_comments: '',
        psych: '',
        psych_comments: '',
        where: '',
        style: '',
        personality: '',
        round: '',
        id: this.props.match.params.id
    }


    componentDidMount() {
        this.props.goalieProfile.map((player) => {
            return (
                this.setState({
                    fname: player.fname,
                    lname: player.lname,
                    dob: player.dob,
                    catches: player.catches,
                    team: player.team,
                    league: player.league,
                    height: player.height,
                    weight: player.weight,
                    epurl: player.epurl,
                    net_coverage: player.net_coverage,
                    nc_comments: player.nc_comments,
                    quickness: player.quickness,
                    quickness_comments: player.quickness_comments,
                    rebound_control: player.rebound_control,
                    rc_comments: player.rc_comments,
                    competitiveness: player.competitiveness,
                    comp_comments: player.comp_comments,
                    skills: player.skills,
                    skills_comments: player.skills_comments,
                    psych: player.psych,
                    psych_comments: player.psych_comments,
                    where: player.where,
                    style: player.style,
                    personality: player.personality,
                    round: player.round
                })
            )
        })
    }

    handleBack = (id) => {
        swal({
            title: "Are you sure?",
            text: "If you go back without saving, your changes will be lost.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.history.push(`/goalieprofile/${this.props.match.params.id}`)
                } else {
                    return;
                }
            });
    }

    handleSave = (id) => {
        this.props.dispatch({ type: 'UPDATE_GOALIE', payload: this.state });
        this.setState({
            state: this.state
        })
        swal({
            title: "Player saved.",
            text: "Your player changes were saved in the database!",
            icon: "success",
        });
        this.props.history.push(`/goalieprofile/${this.props.match.params.id}`)
    }

    handleChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
        console.log("State: ", this.state)
    }

    handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this player's file.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.dispatch({ type: 'DELETE_GOALIE', payload: id });
                    swal("Player deleted.", {
                        icon: "success",
                    });
                    this.props.history.push(`/goalies`);
                } else {
                    swal("Player not deleted.");
                }
            });
    }

    render() {
        return (
            <div>
                <ScrollToTopOnMount />
                {this.props.goalieProfile.map((oneGoalie) => {
                    return (
                        <div key={oneGoalie.id}>
                            <a id="gtop"></a><h1>Edit Profile: {oneGoalie.fname} {oneGoalie.lname}</h1>
                            <h2>Page Navigation</h2>
                            <ul className="edit-nav">
                                <li className="edit-nav-li"><a href="#gtop">Top of Page</a></li>
                                <li className="edit-nav-li"><a href="#gbasic">Basic Info</a></li>
                                <li className="edit-nav-li"><a href="#netcoverage">Net Coverage</a></li>
                                <li className="edit-nav-li"><a href="#quickness">Quickness</a></li>
                                <li className="edit-nav-li"><a href="#reboundcontrol">Rebound Control</a></li>
                                <li className="edit-nav-li"><a href="#skills">Skills</a></li>
                                <li className="edit-nav-li"><a href="#gcompetitiveness">Competitiveness</a></li>
                                <li className="edit-nav-li"><a href="#gpsych">Psychological Factors</a></li>
                            </ul>
                            <a id="dbasic"></a><h2>Basic Info</h2>&nbsp;<a href="#gtop">Top of Page</a><br /><br />
                            First Name:<br />
                            <input className="longInput" label="First Name" variant="filled" value={this.state.fname} onChange={(event) => this.handleChange(event, "fname")} /><br /><br />
                            Last Name:<br />
                            <input className="longInput" label="Last Name" variant="filled" value={this.state.lname} onChange={(event) => this.handleChange(event, "lname")} /><br /><br />
                            DOB (MM/DD/YY):<br />
                            <input label="DOB" maxlength="8" variant="filled" value={this.state.dob} onChange={(event) => this.handleChange(event, "dob")} /><br /><br />
                            Catches:<br />
                            <input maxlength="1" className="shortInput" label="Catches" variant="filled" value={this.state.catches} onChange={(event) => this.handleChange(event, "catches")} /><br /><br />
                            Team:<br />
                            <input label="Team" variant="filled" value={this.state.team} onChange={(event) => this.handleChange(event, "team")} /><br /><br />
                            League:<br />
                            <input label="League" variant="filled" value={this.state.league} onChange={(event) => this.handleChange(event, "league")} /><br /><br />
                            Height:<br />
                            <input maxlength="4" className="shortInput" label="Height" variant="filled" value={this.state.height} onChange={(event) => this.handleChange(event, "height")} /><br /><br />
                            Weight:<br />
                            <input maxlength="3" className="shortInput" label="Weight" variant="filled" value={this.state.weight} onChange={(event) => this.handleChange(event, "weight")} /><br /><br />
                            Where He Plays:<br />
                            <input label="Player Type" variant="filled" value={this.state.where} onChange={(event) => this.handleChange(event, "where")} /><br /><br />
                            Playing Style:<br />
                            <input label="Player Type" variant="filled" value={this.state.style} onChange={(event) => this.handleChange(event, "style")} /><br /><br />
                            Personality:<br />
                            <input label="Player Type" variant="filled" value={this.state.personality} onChange={(event) => this.handleChange(event, "personality")} /><br /><br />
                            Expected Draft Round:<br />
                            <input maxlength="9" className="shortInput" label="Round" variant="filled" value={this.state.round} onChange={(event) => this.handleChange(event, "round")} /><br /><br />
                            EliteProspects URL:<br />
                            <input className="superLongInput" label="EliteProspects" variant="filled" value={this.state.epurl} onChange={(event) => this.handleChange(event, "epurl")} /><br /><br />
                            <h2>Net Coverage</h2>&nbsp;<a href="#gtop">Top of Page</a><a id="netcoverage"></a><br /><br />
                            Net Coverage Rating:<br />
                            <input maxlength="2" className="shortInput" label="Net Coverage" variant="filled" value={this.state.net_coverage} onChange={(event) => this.handleChange(event, "net_coverage")} /><br /><br />
                            Net Coverage Comments:<br />
                            <textarea className="categoryComment" label="Net Coverage Comments" variant="filled" value={this.state.nc_comments} onChange={(event) => this.handleChange(event, "nc_comments")} /><br /><br />
                            <h4>What to Watch:</h4>
                            <ul>
                                <li>Angles initial setup (how well he covers angles on initial shots)</li>
                                <li>Lateral angle coverage (how good his angles are after moving laterally</li>
                                <li>Butterfly coverage upper corners (how well he covers upper corners when in butterfly)</li>
                                <li>Butterfly coverage lower corners (how well he covers lower corners when in butterfly)</li>
                                <li>Five-hole coverage (how well he covers his five hole when in butterfly)</li>
                                <li>Square to shooter (consistency of squaring himself to the puck carrier)</li>
                                <li>Spreading out the body (spreading out to eliminate holes in stance)</li>
                            </ul>
                            <a id="quickness"></a><h2>Quickness</h2>&nbsp;<a href="#gtop">Top of Page</a><br /><br />
                            Quickness Rating:<br />
                            <input maxlength="2" className="shortInput" label="Quickness" variant="filled" value={this.state.quickness} onChange={(event) => this.handleChange(event, "quickness")} /><br /><br />
                            Quickness Comments:<br />
                            <textarea className="categoryComment" label="Quickness Comments" variant="filled" value={this.state.quickness_comments} onChange={(event) => this.handleChange(event, "quickness_comments")} /><br /><br />
                            <h4>What to Watch:</h4>
                            <ul>
                                <li>Recovery (how fast he recovers to his feet for a rebound attempt)</li>
                                <li>Glove hand (quickness of glove hand)</li>
                                <li>Reactions (quickness of reactions and reflexes)</li>
                                <li>Lateral quickness (lateral movement across crease)</li>
                                <li>Getting set (quickness setting up for initial shots and rebounds)</li>
                                <li>Post to post (quickness moving from post to post)</li>
                                <li>Gathering loose pucks (quickness recovering loose pucks)</li>
                            </ul>
                            <a id="reboundcontrol"></a><h2>Rebound Control</h2>&nbsp;<a href="#gtop">Top of Page</a><br /><br />
                            Rebound Control Rating:<br />
                            <input maxlength="2" className="shortInput" label="Rebound Control" variant="filled" value={this.state.rebound_control} onChange={(event) => this.handleChange(event, "rebound_control")} /><br /><br />
                            Rebound Control Comments:<br />
                            <textarea className="categoryComment" label="Rebound Control Comments" variant="filled" value={this.state.rc_comments} onChange={(event) => this.handleChange(event, "rc_comments")} /><br /><br />
                            <h4>What to Watch:</h4>
                            <ul>
                                <li>Rebounds low shots (directing the puck out of danger with stick and pads on low shots)</li>
                                <li>Rebounds high shots (trapping the puck with body to eliminate rebounds)</li>
                                <li>Blocker control (directing the puck out of danger effectively with blocker hand)</li>
                            </ul>
                            <a id="gcompetitiveness"></a><h2>Competitiveness</h2>&nbsp;<a href="#gtop">Top of Page</a><br /><br />
                            Competitiveness Rating:<br />
                            <input maxlength="2" className="shortInput" label="Competitiveness" variant="filled" value={this.state.competitiveness} onChange={(event) => this.handleChange(event, "competitiveness")} /><br /><br />
                            Competitiveness Comments:<br />
                            <textarea className="categoryComment" label="Competitiveness Comments" variant="filled" value={this.state.comp_comments} onChange={(event) => this.handleChange(event, "comp_comments")} /><br /><br />
                            <h4>What to Watch:</h4>
                            <ul>
                                <li>Drive and determination (how much drive and determination he shows)</li>
                                <li>Challenging shooters (how well he moves out to challenge shooters)</li>
                                <li>Work ethic (how well he competes regardless of the score)</li>
                                <li>Holding ground (strength at holding ground with traffic in front and players cutting to the net)</li>
                                <li>Communication (how well he communicates with his teammates/defense)</li>
                            </ul>
                            <a id="skills"></a><h2>Skills</h2>&nbsp;<a href="#gtop">Top of Page</a><br /><br />
                            Skills Rating:<br />
                            <input maxlength="2" className="shortInput" label="Skills" variant="filled" value={this.state.skills} onChange={(event) => this.handleChange(event, "skills")} /><br /><br />
                            Skills Comments:<br />
                            <textarea className="categoryComment" label="Skills Comments" variant="filled" value={this.state.skills_comments} onChange={(event) => this.handleChange(event, "skills")} /><br /><br />
                            <h4>What to Watch:</h4>
                            <ul>
                                <li>Reading the play (how well he reads what is developing in front of him)</li>
                                <li>Skating ability (overall skating ability)</li>
                                <li>Balance (how good is his balance is his stance and in lateral movements?)</li>
                                <li>Screens (ability to track the puck through traffic)</li>
                                <li>Patience (resists committing too soon)</li>
                                <li>Wrap arounds (ability to block wrap-around attempts)</li>
                                <li>Stopping puck behind the net (stopping/controlling the puck on dump-ins)</li>
                                <li>Moving puck (effectively handling the puck to help teammates)</li>
                                <li>Athleticism (athletic ability and ability to make acrobatic saves)</li>
                                <li>Stick control (uses stick to poke check and disrupt pass attempts)</li>
                                <li>Breakaways (performance on breakaways, penalty shots, and/or shootout attempts)</li>
                                <li>Flexibility (overall flexibility)</li>
                            </ul>
                            <a id="gpsych"></a><h2>Psychological Factors</h2>&nbsp;<a href="#gtop">Top of Page</a><br /><br />
                            Psychological Factors Rating:<br />
                            <input maxlength="2" className="shortInput" label="Psychological" variant="filled" value={this.state.psych} onChange={(event) => this.handleChange(event, "psych")} /><br /><br />
                            Psychological Factors Comments:<br />
                            <textarea className="categoryComment" label="Psychological Comments" variant="filled" value={this.state.psych_comments} onChange={(event) => this.handleChange(event, "psych_comments")} />
                            <h4>What to Watch:</h4>
                            <ul>
                                <li>Confidence (how well he shows confidence while playing)</li>
                                <li>Bouncing back (how he responds after a bad goal or bad game)</li>
                                <li>Pressure situations (performing in big games, making big saves/keeping team in game)</li>
                                <li>Consistency (consistency of play over the course of a game/season)</li>
                                <li>Focus and concentration (how well he concentrates throughout the game)</li>
                            </ul>

                        </div>
                    )
                })}
                <br />
                <button className="mainButton" onClick={this.handleBack}>Cancel</button>
                <button className="mainButton" onClick={this.handleSave}>Save Changes</button>
                <button className="mainButton" onClick={() => this.handleDelete(this.props.match.params.id)}>Delete Player</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    goalieProfile: state.goalieProfile
})

export default withRouter(connect(mapStateToProps)(GoalieEdit));