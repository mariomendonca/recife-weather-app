import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Testing from './pages/Cep'
import Weather from './pages/Weather'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/forecast' component={Testing} />
        <Route path='/' component={Weather} />
      </Switch>
    </BrowserRouter>
  )
}