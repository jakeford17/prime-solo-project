import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import swal from 'sweetalert';

class CreateGoalie extends Component {
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
        round: ''
    }

    fnameChange = (event) => {
        this.setState({
            fname: event.target.value,
        })
    }

    lnameChange = (event) => {
        this.setState({
            lname: event.target.value,
        })
    }

    catchesChange = (event) => {
        this.setState({
            catches: event.target.value,
        })
    }

    teamChange = (event) => {
        this.setState({
            team: event.target.value,
        })
    }

    leagueChange = (event) => {
        this.setState({
            league: event.target.value,
        })
    }

    dobChange = (event) => {
        this.setState({
            dob: event.target.value,
        })
    }

    heightChange = (event) => {
        this.setState({
            height: event.target.value,
        })
    }

    weightChange = (event) => {
        this.setState({
            weight: event.target.value,
        })
    }

    whereChange = (event) => {
        this.setState({
            where: event.target.value,
        })
    }

    styleChange = (event) => {
        this.setState({
            style: event.target.value,
        })
    }

    personalityChange = (event) => {
        this.setState({
            personality: event.target.value,
        })
    }

    roundChange = (event) => {
        this.setState({
            round: event.target.value,
        })
    }

    epChange = (event) => {
        this.setState({
            epurl: event.target.value,
        })
    }

    netCovChange = (event) => {
        this.setState({
            net_coverage: event.target.value,
        })
    }

    netCovComChange = (event) => {
        this.setState({
            nc_comments: event.target.value,
        })
    }

    quicknessChange = (event) => {
        this.setState({
            quickness: event.target.value,
        })
    }

    quicknessComChange = (event) => {
        this.setState({
            quickness_comments: event.target.value,
        })
    }

    competitivenessChange = (event) => {
        this.setState({
            competitiveness: event.target.value,
        })
    }

    compComChange = (event) => {
        this.setState({
            comp_comments: event.target.value,
        })
    }

    reboundChange = (event) => {
        this.setState({
            rebound_control: event.target.value,
        })
    }

    reboundComChange = (event) => {
        this.setState({
            rc_comments: event.target.value,
        })
    }

    skillsChange = (event) => {
        this.setState({
            skills: event.target.value,
        })
    }

    skillsComChange = (event) => {
        this.setState({
            skills_comments: event.target.value,
        })
    }

    psychChange = (event) => {
        this.setState({
            psych: event.target.value,
        })
    }

    psychComChange = (event) => {
        this.setState({
            psych_comments: event.target.value,
        })
    }

    backClick = (id) => {
        swal({
            title: "Are you sure?",
            text: "If you go back without saving, your new profile will be lost.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.history.push(`/home`)
                } else {
                    return;
                }
            });
    }

    submitClick = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_NEW_GOALIE', payload: this.state });
        swal({
            title: "Player created.",
            text: "Your new goaltender saved to the database!",
            icon: "success",
        });
        this.props.history.push(`/home`);
    }

    render() {
        return (
            <div>
                <h1 className="positionHeader">Create Goaltender</h1>
                <Tabs>
                    <TabList>
                        <Tab>Basic Info</Tab>
                        <Tab>Net Coverage</Tab>
                        <Tab>Quickness</Tab>
                        <Tab>Rebound Control</Tab>
                        <Tab>Competitiveness</Tab>
                        <Tab>Skills</Tab>
                        <Tab>Psychological Factors</Tab>
                        <Tab>Submit</Tab>
                    </TabList>
                    <TabPanel>
                        <h2 className="positionHeader">Basic Information</h2><br />
                        <label>First Name:</label><br /><input className="longInput" onChange={this.fnameChange} value={this.state.fname} /><br />
                        <label>Last Name:</label><br /><input className="longInput" onChange={this.lnameChange} value={this.state.lname} /><br />
                        <label>Catches (L or R):</label><br /><input className="shortInput" maxlength="1" onChange={this.catchesChange} value={this.state.catches} /><br />
                        <label>Team:</label><br /><input className="longInput" onChange={this.teamChange} value={this.state.team} /><br />
                        <label>League:</label><br /><input className="longInput" onChange={this.leagueChange} value={this.state.league} /><br />
                        <label>DOB (MM/DD/YY):</label><br /><input maxlength="8" onChange={this.dobChange} value={this.state.dob} /><br />
                        <label>Height (ex: 5-11):</label><br /><input className="shortInput" maxlength="4" onChange={this.heightChange} value={this.state.height} /><br />
                        <label>Weight (lbs.):</label><br /><input className="shortInput" maxlength="3" onChange={this.weightChange} value={this.state.weight} /><br />
                        <label>Where Does He Play?</label><br /><br />
                            <input className="radioInput" type="radio" name="where" value="Top of Crease" onChange={(event) => this.whereChange(event)} checked={this.state.where === "Top of Crease"} /> Top of Crease
                            <input className="radioInput" type="radio" name="where" value="Mostly in Paint" onChange={(event) => this.whereChange(event)} checked={this.state.where === "Mostly in Paint"} /> Mostly in Paint
                        <br /><br />
                        <label>What Style Does He Play?</label><br /><br />
                            <input className="radioInput" type="radio" name="style" value="Quick Reaction" onChange={(event) => this.styleChange(event)} checked={this.state.style === "Quick Reaction"} /> Quick Reaction
                            <input className="radioInput" type="radio" name="style" value="Positional Angle" onChange={(event) => this.styleChange(event)} checked={this.state.style === "Positional Angle"} /> Positional Angle
                        <br /><br />
                        <label>Crease Personality:</label><br /><br />
                            <input className="radioInput" type="radio" name="personality" value="Aggressive/Intense" onChange={(event) => this.personalityChange(event)} checked={this.state.personality === "Aggressive/Intense"} /> Aggressive/Intense
                            <input className="radioInput" type="radio" name="personality" value="Calm/Laid Back" onChange={(event) => this.personalityChange(event)} checked={this.state.personality === "Calm/Laid Back"} /> Calm/Laid Back
                        <br /><br />
                        <label>Expected Round:</label><br /><br />
                        <input className="radioInput" type="radio" name="round" value="1" onChange={(event) => this.roundChange(event)} checked={this.state.round === "1"} /> 1
                            <input className="radioInput" type="radio" name="round" value="2" onChange={(event) => this.roundChange(event)} checked={this.state.round === "2"} /> 2
                            <input className="radioInput" type="radio" name="round" value="3" onChange={(event) => this.roundChange(event)} checked={this.state.round === "3"} /> 3
                            <input className="radioInput" type="radio" name="round" value="4" onChange={(event) => this.roundChange(event)} checked={this.state.round === "4"} /> 4
                            <input className="radioInput" type="radio" name="round" value="5" onChange={(event) => this.roundChange(event)} checked={this.state.round === "5"} /> 5
                            <input className="radioInput" type="radio" name="round" value="6" onChange={(event) => this.roundChange(event)} checked={this.state.round === "6"} /> 6
                            <input className="radioInput" type="radio" name="round" value="7" onChange={(event) => this.roundChange(event)} checked={this.state.round === "7"} /> 7
                            <input className="radioInput" type="radio" name="round" value="Undrafted" onChange={(event) => this.roundChange(event)} checked={this.state.round === "Undrafted"} /> Undrafted<br /><br />
                        <label>EliteProspects Page URL:</label><br /><input className="superLongInput" onChange={this.epChange} value={this.state.epurl} /><br />
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Net Coverage</h2>
                        <div>
                            <label>Net Coverage Grade:</label>
                            <input className="radioInput" type="radio" name="net_coverage" value="1" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "1"} /> 1
                            <input className="radioInput" type="radio" name="net_coverage" value="2" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "2"} /> 2
                            <input className="radioInput" type="radio" name="net_coverage" value="3" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "3"} /> 3
                            <input className="radioInput" type="radio" name="net_coverage" value="4" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "4"} /> 4
                            <input className="radioInput" type="radio" name="net_coverage" value="5" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "5"} /> 5
                            <input className="radioInput" type="radio" name="net_coverage" value="6" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "6"} /> 6
                            <input className="radioInput" type="radio" name="net_coverage" value="7" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "7"} /> 7
                            <input className="radioInput" type="radio" name="net_coverage" value="8" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "8"} /> 8
                            <input className="radioInput" type="radio" name="net_coverage" value="9" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "9"} /> 9
                            <input className="radioInput" type="radio" name="net_coverage" value="10" onChange={(event) => this.netCovChange(event)} checked={this.state.net_coverage === "10"} /> 10<br /><br />
                            <label>Net Coverage Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.netCovComChange} value={this.state.nc_comments} />
                            <h3 className="positionHeader">What to Watch:</h3>
                            <ul>
                                <li>Angles initial setup (how well he covers angles on initial shots)</li>
                                <li>Lateral angle coverage (how good his angles are after moving laterally</li>
                                <li>Butterfly coverage upper corners (how well he covers upper corners when in butterfly)</li>
                                <li>Butterfly coverage lower corners (how well he covers lower corners when in butterfly)</li>
                                <li>Five-hole coverage (how well he covers his five hole when in butterfly)</li>
                                <li>Square to shooter (consistency of squaring himself to the puck carrier)</li>
                                <li>Spreading out the body (spreading out to eliminate holes in stance)</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Quickness</h2>
                        <div>
                            <label>Quickness Grade:</label>
                            <input className="radioInput" type="radio" name="quickness" value="1" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "1"} /> 1
                            <input className="radioInput" type="radio" name="quickness" value="2" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "2"} /> 2
                            <input className="radioInput" type="radio" name="quickness" value="3" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "3"} /> 3
                            <input className="radioInput" type="radio" name="quickness" value="4" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "4"} /> 4
                            <input className="radioInput" type="radio" name="quickness" value="5" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "5"} /> 5
                            <input className="radioInput" type="radio" name="quickness" value="6" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "6"} /> 6
                            <input className="radioInput" type="radio" name="quickness" value="7" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "7"} /> 7
                            <input className="radioInput" type="radio" name="quickness" value="8" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "8"} /> 8
                            <input className="radioInput" type="radio" name="quickness" value="9" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "9"} /> 9
                            <input className="radioInput" type="radio" name="quickness" value="10" onChange={(event) => this.quicknessChange(event)} checked={this.state.quickness === "10"} /> 10<br /><br />
                            <label>Quickness Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.quicknessComChange} value={this.state.quickness_comments} />
                            <h3 className="positionHeader">What to Watch:</h3>
                            <ul>
                                <li>Recovery (how fast he recovers to his feet for a rebound attempt)</li>
                                <li>Glove hand (quickness of glove hand)</li>
                                <li>Reactions (quickness of reactions and reflexes)</li>
                                <li>Lateral quickness (lateral movement across crease)</li>
                                <li>Getting set (quickness setting up for initial shots and rebounds)</li>
                                <li>Post to post (quickness moving from post to post)</li>
                                <li>Gathering loose pucks (quickness recovering loose pucks)</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Rebound Control</h2>
                        <div>
                            <label>Rebound Control Grade:</label>
                            <input className="radioInput" type="radio" name="rebound_control" value="1" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "1"} /> 1
                            <input className="radioInput" type="radio" name="rebound_control" value="2" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "2"} /> 2
                            <input className="radioInput" type="radio" name="rebound_control" value="3" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "3"} /> 3
                            <input className="radioInput" type="radio" name="rebound_control" value="4" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "4"} /> 4
                            <input className="radioInput" type="radio" name="rebound_control" value="5" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "5"} /> 5
                            <input className="radioInput" type="radio" name="rebound_control" value="6" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "6"} /> 6
                            <input className="radioInput" type="radio" name="rebound_control" value="7" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "7"} /> 7
                            <input className="radioInput" type="radio" name="rebound_control" value="8" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "8"} /> 8
                            <input className="radioInput" type="radio" name="rebound_control" value="9" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "9"} /> 9
                            <input className="radioInput" type="radio" name="rebound_control" value="10" onChange={(event) => this.reboundChange(event)} checked={this.state.rebound_control === "10"} /> 10<br /><br />
                            <label>Rebound Control Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.reboundComChange} value={this.state.rc_comments} />
                            <h3 className="positionHeader">What to Watch:</h3>
                            <ul>
                                <li>Rebounds low shots (directing the puck out of danger with stick and pads on low shots)</li>
                                <li>Rebounds high shots (trapping the puck with body to eliminate rebounds)</li>
                                <li>Blocker control (directing the puck out of danger effectively with blocker hand)</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Competitiveness</h2>
                        <div>
                            <label>Competitiveness Grade:</label>
                            <input className="radioInput" type="radio" name="competitive" value="1" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "1"} /> 1
                            <input className="radioInput" type="radio" name="competitive" value="2" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "2"} /> 2
                            <input className="radioInput" type="radio" name="competitive" value="3" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "3"} /> 3
                            <input className="radioInput" type="radio" name="competitive" value="4" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "4"} /> 4
                            <input className="radioInput" type="radio" name="competitive" value="5" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "5"} /> 5
                            <input className="radioInput" type="radio" name="competitive" value="6" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "6"} /> 6
                            <input className="radioInput" type="radio" name="competitive" value="7" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "7"} /> 7
                            <input className="radioInput" type="radio" name="competitive" value="8" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "8"} /> 8
                            <input className="radioInput" type="radio" name="competitive" value="9" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "9"} /> 9
                            <input className="radioInput" type="radio" name="competitive" value="10" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "10"} /> 10<br /><br />
                            <label>Competitiveness Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.compComChange} value={this.state.comp_comments} />
                            <h3 className="positionHeader">What to Watch:</h3>
                            <ul>
                                <li>Drive and determination (how much drive and determination he shows)</li>
                                <li>Challenging shooters (how well he moves out to challenge shooters)</li>
                                <li>Work ethic (how well he competes regardless of the score)</li>
                                <li>Holding ground (strength at holding ground with traffic in front and players cutting to the net)</li>
                                <li>Communication (how well he communicates with his teammates/defense)</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Skills</h2>
                        <div>
                            <label>Skills Grade:</label>
                            <input className="radioInput" type="radio" name="skills" value="1" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "1"} /> 1
                            <input className="radioInput" type="radio" name="skills" value="2" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "2"} /> 2
                            <input className="radioInput" type="radio" name="skills" value="3" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "3"} /> 3
                            <input className="radioInput" type="radio" name="skills" value="4" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "4"} /> 4
                            <input className="radioInput" type="radio" name="skills" value="5" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "5"} /> 5
                            <input className="radioInput" type="radio" name="skills" value="6" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "6"} /> 6
                            <input className="radioInput" type="radio" name="skills" value="7" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "7"} /> 7
                            <input className="radioInput" type="radio" name="skills" value="8" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "8"} /> 8
                            <input className="radioInput" type="radio" name="skills" value="9" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "9"} /> 9
                            <input className="radioInput" type="radio" name="skills" value="10" onChange={(event) => this.skillsChange(event)} checked={this.state.skills === "10"} /> 10<br /><br />
                            <label>Skills Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.skillsComChange} value={this.state.skills_comments} />
                            <h3 className="positionHeader">What to Watch:</h3>
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
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Psychological Factors</h2>
                        <div>
                            <label>Psychological Factors Grade:</label>
                            <input className="radioInput" type="radio" name="psychological" value="1" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "1"} /> 1
                            <input className="radioInput" type="radio" name="psychological" value="2" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "2"} /> 2
                            <input className="radioInput" type="radio" name="psychological" value="3" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "3"} /> 3
                            <input className="radioInput" type="radio" name="psychological" value="4" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "4"} /> 4
                            <input className="radioInput" type="radio" name="psychological" value="5" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "5"} /> 5
                            <input className="radioInput" type="radio" name="psychological" value="6" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "6"} /> 6
                            <input className="radioInput" type="radio" name="psychological" value="7" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "7"} /> 7
                            <input className="radioInput" type="radio" name="psychological" value="8" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "8"} /> 8
                            <input className="radioInput" type="radio" name="psychological" value="9" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "9"} /> 9
                            <input className="radioInput" type="radio" name="psychological" value="10" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "10"} /> 10<br /><br />
                            <label>Psychological Factors Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.psychComChange} value={this.state.psychComments} />
                            <h3 className="positionHeader">What to Watch:</h3>
                            <ul>
                                <li>Confidence (how well he shows confidence while playing)</li>
                                <li>Bouncing back (how he responds after a bad goal or bad game)</li>
                                <li>Pressure situations (performing in big games, making big saves/keeping team in game)</li>
                                <li>Consistency (consistency of play over the course of a game/season)</li>
                                <li>Focus and concentration (how well he concentrates throughout the game)</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="positionHeader">Submit</h2>
                        <p>Be sure to review your information before submitting your evaluation. If you need to change something after submitting, go to the player's profile page and click "Edit".</p>
                        <button className="mainButton" onClick={this.submitClick}>SUBMIT EVALUATION</button>
                    </TabPanel>
                </Tabs>
                <button className="mainButton" onClick={() => this.backClick()}>BACK TO HOME</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(CreateGoalie);