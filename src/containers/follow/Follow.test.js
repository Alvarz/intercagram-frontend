import React from 'react'
import ReactDOM from 'react-dom'
import Follow from './Follow'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Follow />, div)
  ReactDOM.unmountComponentAtNode(div)
})