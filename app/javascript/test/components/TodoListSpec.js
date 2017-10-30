import TodoList from '../../react/components/TodoList'

import { mount } from 'enzyme'
import React from 'react'

describe('TodoList', () => {
  let completed, items, page
  items = [
    { id: 1, description: 'one' },
    { id: 2, description: 'two' },
    { id: 3, description: 'three' }
  ]

  beforeEach(() => {
    page = mount(
      <TodoList
        items={items}
        completed={completed}
      />
    )
  })

  it('should render an ordered list tag', () => {
    expect(page.find('ol').length).toEqual(1)
  })

  it('should render one list item tag for each valid item it receives as props', () => {

    expect(page.find('li').length).toEqual(3)
  })
})
