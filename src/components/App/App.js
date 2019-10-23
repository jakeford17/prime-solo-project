import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Home from '../Home/Home';

import Forwards from '../Forwards/Forwards';
import Defense from '../Defense/Defense';

import ForwardProfile from '../ForwardProfile/ForwardProfile';
import DefenseProfile from '../DefenseProfile/DefenseProfile';

import ForwardEdit from '../ForwardEdit/ForwardEdit';
import DefenseEdit from '../DefenseEdit/DefenseEdit';

import CreateForward from '../CreateForward/CreateForward';
import CreateDefense from '../CreateDefense/CreateDefense';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
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
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              {/* <ProtectedRoute
                exact
                path="/home"
                component={Home}
              /> */}
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
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
                path="/createforward"
                component={CreateForward}
              />
              <ProtectedRoute
                exact
                path="/createdefense"
                component={CreateDefense}
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
                path='/forwardedit/:id'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/defenseedit/:id'
                render={({ match }) => <DefenseEdit match={match} />}
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
                path='/basic'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dbasic'
                render={({ match }) => <DefenseEdit match={match} />}
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
                path='/puckskills'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dpuckskills'
                render={({ match }) => <DefenseEdit match={match} />}
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
                path='/physical'
                render={({ match }) => <ForwardEdit match={match} />}
              />
              <ProtectedRoute
                path='/dphysical'
                render={({ match }) => <DefenseEdit match={match} />}
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
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>Please log in to view this page (404).</h1>} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
