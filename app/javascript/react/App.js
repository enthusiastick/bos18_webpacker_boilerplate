import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import BooYaa from './components/BooYaa'

const App = props => {
  return(
    <BrowserRouter>
      <Route exact path='/' component={BooYaa} />
    </BrowserRouter>
  )
}

export default App
