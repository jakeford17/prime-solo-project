import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import swal from 'sweetalert';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

class DefenseEdit extends Component {
    state = {
        fname: '',
        lname: '',
        dob: '',
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
        round: '',
        id: this.props.match.params.id
    }


    componentDidMount() {
        this.props.defenseProfile.map((player) => {
            return (
                this.setState({
                    fname: player.fname,
                    lname: player.lname,
                    dob: player.dob,
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
                    this.props.history.push(`/defenseprofile/${this.props.match.params.id}`)
                } else {
                    return;
                }
            });
    }

    handleSave = (id) => {
        this.props.dispatch({ type: 'UPDATE_DEFENSE', payload: this.state });
        this.setState({
            state: this.state
        })
        swal({
            title: "Player saved.",
            text: "Your player changes were saved in the database!",
            icon: "success",
        });
        this.props.history.push(`/defenseprofile/${this.props.match.params.id}`)
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
                    this.props.dispatch({ type: 'DELETE_DEFENSE', payload: id });
                    swal("Player deleted.", {
                        icon: "success",
                    });
                    this.props.history.push(`/defense`);
                } else {
                    swal("Player not deleted.");
                }
            });
    }

    render() {
        return (
            <div>
                <ScrollToTopOnMount />
                {this.props.defenseProfile.map((oneDefense) => {
                    return (
                        <div key={oneDefense.id}>
                            <a id="dtop"></a><h1 className="positionHeader">Edit Profile: {oneDefense.fname} {oneDefense.lname}</h1>
                            <h2>Page Navigation</h2>
                            <ul className="edit-nav">
                                <li className="edit-nav-li"><a href="#dtop">Top of Page</a></li>
                                <li className="edit-nav-li"><a href="#dbasic">Basic Info</a></li>
                                <li className="edit-nav-li"><a href="#dskating">Skating</a></li>
                                <li className="edit-nav-li"><a href="#dpuckskills">Puck Skills</a></li>
                                <li className="edit-nav-li"><a href="#dcompetitiveness">Competitiveness</a></li>
                                <li className="edit-nav-li"><a href="#dphysical">Physicality</a></li>
                                <li className="edit-nav-li"><a href="#dhockeyiq">Hockey Sense</a></li>
                                <li className="edit-nav-li"><a href="#ddefensive">Defensive</a></li>
                                <li className="edit-nav-li"><a href="#dpsych">Psychological Factors</a></li>
                            </ul>
                            <a id="dbasic"></a><h2 className="positionHeader">Basic Info</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            First Name:<br />
                            <input className="longInput" label="First Name" variant="filled" value={this.state.fname} onChange={(event) => this.handleChange(event, "fname")} /><br />
                            Last Name:<br />
                            <input className="longInput" label="Last Name" variant="filled" value={this.state.lname} onChange={(event) => this.handleChange(event, "lname")} /><br />
                            DOB (MM/DD/YY):<br />
                            <input label="DOB" maxlength="8" variant="filled" value={this.state.dob} onChange={(event) => this.handleChange(event, "dob")} /><br />
                            Shoots (L or R):<br />
                            <input maxlength="1" className="shortInput" label="Shoots" variant="filled" value={this.state.shoots} onChange={(event) => this.handleChange(event, "shoots")} /><br />
                            Team:<br />
                            <input label="Team" variant="filled" value={this.state.team} onChange={(event) => this.handleChange(event, "team")} /><br />
                            League:<br />
                            <input label="League" variant="filled" value={this.state.league} onChange={(event) => this.handleChange(event, "league")} /><br />
                            Height (ex: 5-11):<br />
                            <input maxlength="4" className="shortInput" label="Height" variant="filled" value={this.state.height} onChange={(event) => this.handleChange(event, "height")} /><br />
                            Weight (lbs.):<br />
                            <input maxlength="3" className="shortInput" label="Weight" variant="filled" value={this.state.weight} onChange={(event) => this.handleChange(event, "weight")} /><br />
                            Player Type:<br />
                            <input label="Player Type" variant="filled" value={this.state.player_type} onChange={(event) => this.handleChange(event, "player_type")} /><br />
                            Expected Draft Round:<br />
                            <input maxlength="9" className="shortInput" label="Round" variant="filled" value={this.state.round} onChange={(event) => this.handleChange(event, "round")} /><br />
                            EliteProspects URL:<br />
                            <input className="superLongInput" label="EliteProspects" variant="filled" value={this.state.epurl} onChange={(event) => this.handleChange(event, "epurl")} /><br />
                            <h2 className="positionHeader">Skating</h2>&nbsp;<a href="#dtop">Top of Page</a><a id="dskating"></a><br /><br />
                            Skating Rating:<br />
                            <input maxlength="2" className="shortInput" label="Skating" variant="filled" value={this.state.skating} onChange={(event) => this.handleChange(event, "skating")} /><br /><br />
                            Skating Comments:<br />
                            <textarea className="categoryComment" label="Skating Comments" variant="filled" value={this.state.skating_comments} onChange={(event) => this.handleChange(event, "skating_comments")} /><br /><br />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Scoring drive (willing to battle, go to the net, and pay the price to score)</li>
                                <li>Work ethic (overall effort; works and competes every shift, no matter the score/venue</li>
                                <li>Attitude (level of maturity: well developed or "has a way to go")</li>
                                <li>Consistency (how consistent is his play over the course of a game/season, no matter the circumstances)</li>
                                <li>Forechecking (puck pursuit; fights through checks)</li>
                            </ul>
                            <a id="dpuckskills"></a><h2 className="positionHeader">Puck Skills</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            Puck Skills Rating:<br />
                            <input maxlength="2" className="shortInput" label="Puck Skills" variant="filled" value={this.state.puck_skills} onChange={(event) => this.handleChange(event, "puck_skills")} /><br /><br />
                            Puck Skills Comments:<br />
                            <textarea className="categoryComment" label="Puck Skills Comments" variant="filled" value={this.state.puck_skills_comments} onChange={(event) => this.handleChange(event, "puck_skills_comments")} /><br /><br />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Shot accuracy (does he hit the net/force the goalie to make saves?)</li>
                                <li>Shot strength (does he have a heavy shot?)</li>
                                <li>Shot release (ability to shoot without getting set, off the stickhandle)</li>
                                <li>Shot repertoire (quality of wrist, slap, snap, and backhand shots)</li>
                                <li>Stickhandling ability (can handle the puck at top speed; controls the puck in tight spaces and along boards)</li>
                                <li>Puck protection (ability to adjust body position and balance to keep/acquire the puck)</li>
                                <li>Faceoffs (gets possession of the puck and is used in all zones)</li>
                                <li>Giving a pass (delivers puck for easy handling; leads his man)</li>
                                <li>Receiving a pass (gets puck under control quickly; can receive on forehand, backhand, and in skates)</li>
                                <li>Scoring touch (can score in several ways; smart around the net/has a nose for the net)</li>
                            </ul>
                            <a id="dcompetitiveness"></a><h2 className="positionHeader">Competitiveness</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            Competitiveness Rating:<br />
                            <input maxlength="2" className="shortInput" label="Competitiveness" variant="filled" value={this.state.competitiveness} onChange={(event) => this.handleChange(event, "competitiveness")} /><br /><br />
                            Competitiveness Comments:<br />
                            <textarea className="categoryComment" label="Competitiveness Comments" variant="filled" value={this.state.comp_comments} onChange={(event) => this.handleChange(event, "comp_comments")} /><br /><br />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Scoring drive (willing to battle, go to the net, and pay the price to score)</li>
                                <li>Work ethic (overall effort; works and competes every shift, no matter the score/venue</li>
                                <li>Attitude (level of maturity: well developed or "has a way to go")</li>
                                <li>Consistency (how consistent is his play over the course of a game/season, no matter the circumstances)</li>
                                <li>Forechecking (puck pursuit; fights through checks)</li>
                            </ul>
                            <a id="dphysical"></a><h2 className="positionHeader">Physicality</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            Physicality Rating:<br />
                            <input maxlength="2" className="shortInput" label="Physicality" variant="filled" value={this.state.physicality} onChange={(event) => this.handleChange(event, "physicality")} /><br /><br />
                            Physicality Comments:<br />
                            <textarea className="categoryComment" label="Physicality Comments" variant="filled" value={this.state.phys_comments} onChange={(event) => this.handleChange(event, "phys_comments")} /><br /><br />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Boards and corner play (battles for loose pucks; willing to pay the price)</li>
                                <li>Physical presence (size and strength are used as an asset; tough to play against)</li>
                                <li>Conditioning (overall physical conditioning, build, strength, stamina, and durability; rarely misses games) </li>
                                <li>Hitting (takes the body and effectively separates opposition from the puck; willing to take a hit to make a play)</li>
                                <li>Fighting (willing to fight and is capable)</li>
                            </ul>
                            <a id="dhockeyiq"></a><h2 className="positionHeader">Hockey Sense</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            Hockey Sense Rating:<br />
                            <input maxlength="2" className="shortInput" label="IQ" variant="filled" value={this.state.iq} onChange={(event) => this.handleChange(event, "iq")} /><br /><br />
                            Hockey Sense Comments:<br />
                            <textarea className="categoryComment" label="IQ Comments" variant="filled" value={this.state.iq_comments} onChange={(event) => this.handleChange(event, "iq_comments")} /><br /><br />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Playmaking (vision, offensive imagination; sets teammates up for scoring chances)</li>
                                <li>Anticipation (reads and reacts to the play; gets himself in position before the play develops; sees opening for transition play)</li>
                                <li>Discipline (avoids bad penalties, accepts bad calls, not drawn into retaliation)</li>
                                <li>Decision making (ability to sort out options and make the best choices)</li>
                                <li>Play under pressure (good decision making when being pressured/forechecked)</li>
                                <li>Versatility (ability to play various positions, roles, special teams)</li>
                            </ul>
                            <a id="ddefensive"></a><h2 className="positionHeader">Defensive Play</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            Defensive Play Rating:<br />
                            <input maxlength="2" className="shortInput" label="Defense" variant="filled" value={this.state.defense} onChange={(event) => this.handleChange(event, "defense")} /><br /><br />
                            Defensive Play Comments:<br />
                            <textarea className="categoryComment" label="Defense Comments" variant="filled" value={this.state.def_comments} onChange={(event) => this.handleChange(event, "def_comments")} /><br /><br />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Defensive anticipation (reads the play, gap control)</li>
                                <li>Positioning (angles opponents, active away from the puck)</li>
                                <li>Backchecking (picks up man, returns hard to the defensive zone)</li>
                                <li>Defensive reliability (is he used in critical situations?)</li>
                            </ul>
                            <a id="dpsych"></a><h2 className="positionHeader">Psychological Factors</h2>&nbsp;<a href="#dtop">Top of Page</a><br /><br />
                            Psychological Factors Rating:<br />
                            <input maxlength="2" className="shortInput" label="Psychological" variant="filled" value={this.state.psych} onChange={(event) => this.handleChange(event, "psych")} /><br /><br />
                            Psychological Factors Comments:<br />
                            <textarea className="categoryComment" label="Psychological Comments" variant="filled" value={this.state.psych_comments} onChange={(event) => this.handleChange(event, "psych_comments")} />
                            <h4 className="w2w4">What to Watch:</h4>
                            <ul>
                                <li>Leadership (takes charge, displays on-ice leadership)</li>
                                <li>Communication (witnessed in-game examples of constructive discussions with teammates and coaches)</li>
                                <li>Confidence (displays noticeable confidence in on-ice activity)</li>
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
    defenseProfile: state.defenseProfile
})

export default withRouter(connect(mapStateToProps)(DefenseEdit));