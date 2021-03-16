import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Forecast from './pages/Forecast'
import Weather from './pages/Weather'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/forecast' component={Forecast} />
        <Route path='/' component={Weather} />
      </Switch>
    </BrowserRouter>
  )
}