import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function NonAuthenticatedRoute ({ component: Component, user, ...rest }) {
  return (
    <Route
      { ...rest }
      render={props => {
        return user ? (
          <Redirect to="/posts" />
        ) : (
          <Component { ...props } />
        )
      }}
    />
  )
}