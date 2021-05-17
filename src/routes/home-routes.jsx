import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/Home'

export default function HomeRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  )
}
