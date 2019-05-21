import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser, userSelector, userFullNameSelector } from '../store/users';

function AppHeader ({ user, usersName, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <ul className="navbar-nav">
        {
          user && (
            <li className="nav-item nav-link">
              <Link to="/posts">Posts</Link>
            </li>
          )
        }
      </ul>
      {
        user && (
          <span>
            <span>{ usersName }</span>
            <button
              className="btn ml-2 btn-sm btn-info"
              type="button"
              onClick={onLogout}
            >
              Log Out
            </button>
          </span>
        )
      }
    </nav>
  )
}

function mapStateToProps(state) {
  return {
    user: userSelector(state),
    usersName: userFullNameSelector(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(setUser(null))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
