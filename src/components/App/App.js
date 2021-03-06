import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Home from '../Home/Home';

import Forwards from '../Forwards/Forwards';
import Defense from '../Defense/Defense';
import Goalies from '../Goalies/Goalies';

import ForwardProfile from '../ForwardProfile/ForwardProfile';
import DefenseProfile from '../DefenseProfile/DefenseProfile';
import GoalieProfile from '../GoalieProfile/GoalieProfile';

import ForwardEdit from '../ForwardEdit/ForwardEdit';
import DefenseEdit from '../DefenseEdit/DefenseEdit';
import GoalieEdit from '../GoalieEdit/GoalieEdit'

import CreateForward from '../CreateForward/CreateForward';
import CreateDefense from '../CreateDefense/CreateDefense';
import CreateGoalie from '../CreateGoalie/CreateGoalie';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <ScrollToTopOnMount />
          <Nav />
          <div className="content">
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              <ProtectedRoute
                exact
                path="/home"
                component={Home}
              />
              <ProtectedRoute
                exact
                path="/forwards"
                component={Forwards}
              />
              <ProtectedRoute
                exact
                path="/defense"
                component={Defense}
              />
              <ProtectedRoute
                exact
                path="/goalies"
                component={Goalies}
              />
              <ProtectedRoute
                exact
                path="/createforward"
                component={CreateForward}
              />
              <ProtectedRoute
                exact
                path="/createdefense"
                component={CreateDefense}
              />
              <ProtectedRoute
                exact
                path="/creategoalie"
                component={CreateGoalie}
              />
              <ProtectedRoute
                path='/forwardprofile/:id'
                render={({ match }) => <ForwardProfile match={match} />}
              />
              <ProtectedRoute
                path='/defenseprofile/:id'
                render={({ match }) => <DefenseProfile match={match} />}
              />
              <ProtectedRoute
                path='/goalieprofile/:id'
                render={({ match }) => <GoalieProfile match={match} />}
              />
              <ProtectedRoute
                path='/forwardedit/:id'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/defenseedit/:id'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/goalieedit/:id'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/top'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dtop'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/gtop'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/basic'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dbasic'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/gbasic'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/skating'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dskating'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/netcoverage'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/puckskills'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dpuckskills'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/quickness'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/competitiveness'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dcompetitiveness'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/reboundcontrol'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/physical'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dphysical'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/skills'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/hockeyiq'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dhockeyiq'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/gcompetitiveness'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              <ProtectedRoute
                path='/defensive'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/ddefensive'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/psych'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dpsych'
                render={({ match }) => <DefenseEdit match={match} />}
              />
              <ProtectedRoute
                path='/gpsych'
                render={({ match }) => <GoalieEdit match={match} />}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>Please log in to view this page (404).</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
