import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PostList from './components/PostList'
import AppLogin from './components/AppLogin'
import AppHeader from './components/AppHeader'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    const user = localStorage.getItem('user')
    this.state = {
      user: user ? JSON.parse(user) : null,
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
        }
      ]
    }
  }

  handleLogin = (user) => {
    this.setState({
      user
    }, () => {
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  handleLogout = () => {
    this.setState({
      user: null,
    }, () => {
      localStorage.removeItem('user')
    })
  }

  render () {
    const AppLoginPage = () => {
      return (
        <AppLogin onLogin={this.handleLogin} />
      )
    }

    const PostListPage = () => {
      return (
        <PostList posts={this.state.posts} />
      )
    }

    return (
      <Router>
        <div className="App">
          <AppHeader
            user={this.state.user}
            onLogout={this.handleLogout}
          />
          <Switch>
            <Route
              path='/login'
              component={AppLoginPage}
            />
            <Route
              exact
              path="/posts"
              component={PostListPage}
            />

            {/* <Route
              path="/not-found"
              component={NotFound}
            /> */}
            <Redirect
              from=""
              to="/login"
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
