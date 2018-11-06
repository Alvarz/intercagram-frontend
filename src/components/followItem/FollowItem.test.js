import React from 'react'
import ReactDOM from 'react-dom'
import FollowItem from './FollowItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FollowItem />, div)
  ReactDOM.unmountComponentAtNode(div)
})
