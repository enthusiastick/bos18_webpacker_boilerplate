import React, { Component } from 'react'

import TodoList from '../components/TodoList'

class TodosIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: [],
      incomplete: []
    }
  }

  componentWillMount() {
    fetch('/api/v1/todos.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => { return response.json() })
    .then(data => {
      this.setState({
        complete: data.complete,
        incomplete: data.incomplete
      })
    })
  }

  render() {
    return(
      <div>
        <h1>Todos</h1>
        <TodoList items={this.state.incomplete} />
        <h1>Completed</h1>
        <TodoList completed={true} items={this.state.complete} />
      </div>
    )
  }
}

export default TodosIndex
