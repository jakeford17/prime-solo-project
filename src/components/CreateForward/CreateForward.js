import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class CreateForward extends Component {
    state = {
        fname: '',
        lname: '',
        position: '',
        shoots: '',
        team: '',
        league: '',
        dob: '',
        height: '',
        weight: '',
        epurl: '',
        playerType: '',
        round: '',
        skating: '',
        skatingComments: '',
        puckSkills: '',
        puckSkillsComments: '',
        competitiveness: '',
        compComments: '',
        physical: '',
        physicalComments: '',
        hockeyIQ: '',
        hockeyIQComments: '',
        defense: '',
        defenseComments: '',
        psych: '',
        psychComments: '',
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

    positionChange = (event) => {
        this.setState({
            position: event.target.value,
        })
    }

    shotChange = (event) => {
        this.setState({
            shoots: event.target.value,
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

    typeChange = (event) => {
        this.setState({
            playerType: event.target.value,
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

    skatingChange = (event) => {
        this.setState({
            skating: event.target.value,
        })
    }

    skatingComChange = (event) => {
        this.setState({
            skatingComments: event.target.value,
        })
    }

    puckSkillsChange = (event) => {
        this.setState({
            puckSkills: event.target.value,
        })
    }

    puckSkillsComChange = (event) => {
        this.setState({
            puckSkillsComments: event.target.value,
        })
    }

    competitivenessChange = (event) => {
        this.setState({
            competitiveness: event.target.value,
        })
    }

    compComChange = (event) => {
        this.setState({
            compComments: event.target.value,
        })
    }

    physicalChange = (event) => {
        this.setState({
            physical: event.target.value,
        })
    }

    physicalComChange = (event) => {
        this.setState({
            physicalComments: event.target.value,
        })
    }

    iqChange = (event) => {
        this.setState({
            hockeyIQ: event.target.value,
        })
    }

    iqComChange = (event) => {
        this.setState({
            hockeyIQComments: event.target.value,
        })
    }

    defenseChange = (event) => {
        this.setState({
            defense: event.target.value,
        })
    }

    defenseComChange = (event) => {
        this.setState({
            defenseComments: event.target.value,
        })
    }

    psychChange = (event) => {
        this.setState({
            psych: event.target.value,
        })
    }

    psychComChange = (event) => {
        this.setState({
            psychComments: event.target.value,
        })
    }

    backClick = () => {
        this.props.history.push(`/home`)
    }

    submitClick = (event) => {
        event.preventDefault();
        console.log('From comments: ', this.state);
        this.props.dispatch({ type: 'POST_NEW_FORWARD', payload: this.state });
        this.props.history.push(`/home`);
    }

    render() {
        return (
            <div>
                <h1>Create Forward</h1>
                <Tabs>
                    <TabList>
                        <Tab>Basic Info</Tab>
                        <Tab>Skating</Tab>
                        <Tab>Puck Skills</Tab>
                        <Tab>Competitiveness</Tab>
                        <Tab>Physical Play</Tab>
                        <Tab>Hockey Sense</Tab>
                        <Tab>Defensive Play</Tab>
                        <Tab>Psychological Factors</Tab>
                        <Tab>Submit</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Basic Information</h2><br />
                        <label>First Name:</label><br /><input onChange={this.fnameChange} value={this.state.fname} /><br />
                        <label>Last Name:</label><br /><input onChange={this.lnameChange} value={this.state.lname} /><br />
                        <label>Position:</label><br /><input onChange={this.positionChange} value={this.state.position} /><br />
                        <label>Shoots:</label><br /><input onChange={this.shotChange} value={this.state.shoots} /><br />
                        <label>Team:</label><br /><input onChange={this.teamChange} value={this.state.team} /><br />
                        <label>League:</label><br /><input onChange={this.leagueChange} value={this.state.league} /><br />
                        <label>DOB (MM/DD/YY):</label><br /><input onChange={this.dobChange} value={this.state.dob} /><br />
                        <label>Height:</label><br /><input onChange={this.heightChange} value={this.state.height} /><br />
                        <label>Weight:</label><br /><input onChange={this.weightChange} value={this.state.weight} /><br />
                        <label>Player Type:</label><br />
                            <input className="radioInput" type="radio" name="type" value="Skilled Forward" onChange={(event) => this.typeChange(event)} checked={this.state.playerType === "Skilled Forward"} /> Skilled Forward
                            <input className="radioInput" type="radio" name="type" value="Power Forward" onChange={(event) => this.typeChange(event)} checked={this.state.playerType === "Power Forward"} /> Power Forward
                            <input className="radioInput" type="radio" name="type" value="Role Player/Checker" onChange={(event) => this.typeChange(event)} checked={this.state.playerType === "Role Player/Checker"} /> Role Player/Checker
                        <br /><br />
                        <label>Expected Round:</label><br />
                        <input className="radioInput" type="radio" name="round" value="1" onChange={(event) => this.roundChange(event)} checked={this.state.round === "1"} /> 1
                            <input className="radioInput" type="radio" name="round" value="2" onChange={(event) => this.roundChange(event)} checked={this.state.round === "2"} /> 2
                            <input className="radioInput" type="radio" name="round" value="3" onChange={(event) => this.roundChange(event)} checked={this.state.round === "3"} /> 3
                            <input className="radioInput" type="radio" name="round" value="4" onChange={(event) => this.roundChange(event)} checked={this.state.round === "4"} /> 4
                            <input className="radioInput" type="radio" name="round" value="5" onChange={(event) => this.roundChange(event)} checked={this.state.round === "5"} /> 5
                            <input className="radioInput" type="radio" name="round" value="6" onChange={(event) => this.roundChange(event)} checked={this.state.round === "6"} /> 6
                            <input className="radioInput" type="radio" name="round" value="7" onChange={(event) => this.roundChange(event)} checked={this.state.round === "7"} /> 7
                            <input className="radioInput" type="radio" name="round" value="Undrafted" onChange={(event) => this.roundChange(event)} checked={this.state.round === "Undrafted"} /> Undrafted<br/><br/>
                            <label>EliteProspects Page:</label><br /><input onChange={this.epChange} value={this.state.epurl} /><br />
                    </TabPanel>
                    <TabPanel>
                        <h2>Skating</h2>
                        <div>
                            <label>Skating Grade:</label>
                            <input className="radioInput" type="radio" name="skating" value="1" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "1"} /> 1
                            <input className="radioInput" type="radio" name="skating" value="2" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "2"} /> 2
                            <input className="radioInput" type="radio" name="skating" value="3" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "3"} /> 3
                            <input className="radioInput" type="radio" name="skating" value="4" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "4"} /> 4
                            <input className="radioInput" type="radio" name="skating" value="5" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "5"} /> 5
                            <input className="radioInput" type="radio" name="skating" value="6" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "6"} /> 6
                            <input className="radioInput" type="radio" name="skating" value="7" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "7"} /> 7
                            <input className="radioInput" type="radio" name="skating" value="8" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "8"} /> 8
                            <input className="radioInput" type="radio" name="skating" value="9" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "9"} /> 9
                            <input className="radioInput" type="radio" name="skating" value="10" onChange={(event) => this.skatingChange(event)} checked={this.state.skating === "10"} /> 10<br /><br />
                            <label>Skating Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.skatingComChange} value={this.state.skatingComments} />
                            <h3></h3>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Puck Skills</h2>
                        <div>
                            <label>Puck Skills Grade:</label>
                            <input className="radioInput" type="radio" name="puckskills" value="1" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "1"}/> 1
                            <input className="radioInput" type="radio" name="puckskills" value="2" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "2"}/> 2
                            <input className="radioInput" type="radio" name="puckskills" value="3" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "3"}/> 3
                            <input className="radioInput" type="radio" name="puckskills" value="4" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "4"}/> 4
                            <input className="radioInput" type="radio" name="puckskills" value="5" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "5"}/> 5
                            <input className="radioInput" type="radio" name="puckskills" value="6" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "6"}/> 6
                            <input className="radioInput" type="radio" name="puckskills" value="7" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "7"}/> 7
                            <input className="radioInput" type="radio" name="puckskills" value="8" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "8"}/> 8
                            <input className="radioInput" type="radio" name="puckskills" value="9" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "9"}/> 9
                            <input className="radioInput" type="radio" name="puckskills" value="10" onChange={(event) => this.puckSkillsChange(event)} checked={this.state.puckSkills === "10"}/> 10<br /><br />
                            <label>Puck Skills Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.puckSkillsComChange} value={this.state.puckSkillsComments} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Competitiveness</h2>
                        <div>
                            <label>Competitiveness Grade:</label>
                            <input className="radioInput" type="radio" name="competitive" value="1" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "1"}/> 1
                            <input className="radioInput" type="radio" name="competitive" value="2" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "2"}/> 2
                            <input className="radioInput" type="radio" name="competitive" value="3" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "3"}/> 3
                            <input className="radioInput" type="radio" name="competitive" value="4" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "4"}/> 4
                            <input className="radioInput" type="radio" name="competitive" value="5" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "5"}/> 5
                            <input className="radioInput" type="radio" name="competitive" value="6" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "6"}/> 6
                            <input className="radioInput" type="radio" name="competitive" value="7" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "7"}/> 7
                            <input className="radioInput" type="radio" name="competitive" value="8" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "8"}/> 8
                            <input className="radioInput" type="radio" name="competitive" value="9" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "9"}/> 9
                            <input className="radioInput" type="radio" name="competitive" value="10" onChange={(event) => this.competitivenessChange(event)} checked={this.state.competitiveness === "10"}/> 10<br /><br />
                            <label>Competitiveness Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.compComChange} value={this.state.compComments} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Physical Play</h2>
                        <div>
                            <label>Physical Play Grade:</label>
                            <input className="radioInput" type="radio" name="physical" value="1" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "1"}/> 1
                            <input className="radioInput" type="radio" name="physical" value="2" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "2"}/> 2
                            <input className="radioInput" type="radio" name="physical" value="3" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "3"}/> 3
                            <input className="radioInput" type="radio" name="physical" value="4" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "4"}/> 4
                            <input className="radioInput" type="radio" name="physical" value="5" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "5"}/> 5
                            <input className="radioInput" type="radio" name="physical" value="6" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "6"}/> 6
                            <input className="radioInput" type="radio" name="physical" value="7" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "7"}/> 7
                            <input className="radioInput" type="radio" name="physical" value="8" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "8"}/> 8
                            <input className="radioInput" type="radio" name="physical" value="9" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "9"}/> 9
                            <input className="radioInput" type="radio" name="physical" value="10" onChange={(event) => this.physicalChange(event)} checked={this.state.physical === "10"}/> 10<br /><br />
                            <label>Physical Play Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.physicalComChange} value={this.state.physicalComments} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Hockey Sense</h2>
                        <div>
                            <label>Hockey Sense Grade:</label>
                            <input className="radioInput" type="radio" name="iq" value="1" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "1"}/> 1
                            <input className="radioInput" type="radio" name="iq" value="2" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "2"}/> 2
                            <input className="radioInput" type="radio" name="iq" value="3" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "3"}/> 3
                            <input className="radioInput" type="radio" name="iq" value="4" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "4"}/> 4
                            <input className="radioInput" type="radio" name="iq" value="5" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "5"}/> 5
                            <input className="radioInput" type="radio" name="iq" value="6" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "6"}/> 6
                            <input className="radioInput" type="radio" name="iq" value="7" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "7"}/> 7
                            <input className="radioInput" type="radio" name="iq" value="8" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "8"}/> 8
                            <input className="radioInput" type="radio" name="iq" value="9" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "9"}/> 9
                            <input className="radioInput" type="radio" name="iq" value="10" onChange={(event) => this.iqChange(event)} checked={this.state.hockeyIQ === "10"}/> 10<br /><br />
                            <label>Hockey Sense Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.iqComChange} value={this.state.hockeyIQComments} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Defensive Play</h2>
                        <div>
                            <label>Defensive Play Grade:</label>
                            <input className="radioInput" type="radio" name="defense" value="1" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "1"}/> 1
                            <input className="radioInput" type="radio" name="defense" value="2" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "2"}/> 2
                            <input className="radioInput" type="radio" name="defense" value="3" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "3"}/> 3
                            <input className="radioInput" type="radio" name="defense" value="4" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "4"}/> 4
                            <input className="radioInput" type="radio" name="defense" value="5" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "5"}/> 5
                            <input className="radioInput" type="radio" name="defense" value="6" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "6"}/> 6
                            <input className="radioInput" type="radio" name="defense" value="7" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "7"}/> 7
                            <input className="radioInput" type="radio" name="defense" value="8" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "8"}/> 8
                            <input className="radioInput" type="radio" name="defense" value="9" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "9"}/> 9
                            <input className="radioInput" type="radio" name="defense" value="10" onChange={(event) => this.defenseChange(event)} checked={this.state.defense === "10"}/> 10<br /><br />
                            <label>Defensive Play Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.defenseComChange} value={this.state.defenseComments} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Psychological Factors</h2>
                        <div>
                            <label>Psychological Factors Grade:</label>
                            <input className="radioInput" type="radio" name="psychological" value="1" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "1"}/> 1
                            <input className="radioInput" type="radio" name="psychological" value="2" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "2"}/> 2
                            <input className="radioInput" type="radio" name="psychological" value="3" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "3"}/> 3
                            <input className="radioInput" type="radio" name="psychological" value="4" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "4"}/> 4
                            <input className="radioInput" type="radio" name="psychological" value="5" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "5"}/> 5
                            <input className="radioInput" type="radio" name="psychological" value="6" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "6"}/> 6
                            <input className="radioInput" type="radio" name="psychological" value="7" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "7"}/> 7
                            <input className="radioInput" type="radio" name="psychological" value="8" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "8"}/> 8
                            <input className="radioInput" type="radio" name="psychological" value="9" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "9"}/> 9
                            <input className="radioInput" type="radio" name="psychological" value="10" onChange={(event) => this.psychChange(event)} checked={this.state.psych === "10"}/> 10<br /><br />
                            <label>Psychological Factors Comments:</label><br />
                            <textarea className="categoryComment" onChange={this.psychComChange} value={this.state.psychComments} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Submit</h2>
                        <p>Be sure to review your information before submitting your evaluation. If you need to change something after submitting, go to the player's profile page and click "Edit".</p>
                        <button className="createPosition" onClick={this.submitClick}>SUBMIT EVALUATION</button>
                    </TabPanel>
                </Tabs>
                <button className="createPosition" onClick={this.backClick}>BACK TO HOME</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(CreateForward);