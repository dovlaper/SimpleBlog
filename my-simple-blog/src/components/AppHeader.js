import React from 'react'
import { Link } from 'react-router-dom'

export default function AppHeader ({ user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
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
            <span>{ user.email }</span>
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