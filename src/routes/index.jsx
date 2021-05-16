import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home-routes'

export default function AppRoot() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  )
}
