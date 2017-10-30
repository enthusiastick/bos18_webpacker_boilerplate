import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TodosIndex from './containers/TodosIndex'

const App = props => {
  return(
    <BrowserRouter>
      <Route exact path='/' component={TodosIndex} />
    </BrowserRouter>
  )
}

export default App
