import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PostList from './components/PostList'
import AppLogin from './components/AppLogin'
import AppHeader from './components/AppHeader'
import NotFound from './components/NotFound'
import NonAuthenticatedRoute from './components/NonAuthenticatedRoute'
import ProtectedRoute from './components/ProtectedRoute'
import SinglePost from './components/SinglePost'
import './App.css'
import { connect } from 'react-redux';

class App extends Component {

  render () {

    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <Switch>
            <NonAuthenticatedRoute
              path='/login'
              user={this.props.user}
              component={AppLogin}
            />
            <ProtectedRoute
              exact
              path="/posts"
              user={this.props.user}
              component={PostList}
            />
            <Redirect from="/" to="/posts" exact />
            <ProtectedRoute
              path="/posts/:id"
              user={this.props.user}
              component={SinglePost}
            />
            <Route
              path="/not-found"
              component={NotFound}
            />
            <Redirect from="" to="/not-found" />
          </Switch>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.user // userSelector(state),
  }
}

export default connect(
  mapStateToProps
)(App);
