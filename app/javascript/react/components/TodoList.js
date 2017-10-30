import React from 'react'

const TodoList = props => {
  let listItems

  if (props.completed) {
    listItems = props.items.map(item => {
      return(<li key={item.id}><s>{item.description}</s></li>)
    })
  } else {
    listItems = props.items.map(item => {
      return(<li key={item.id}>{item.description}</li>)
    })
  }

  return(
    <ol>
      {listItems}
    </ol>
  )
}

export default TodoList
