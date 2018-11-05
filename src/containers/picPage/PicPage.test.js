import React from 'react'
import ReactDOM from 'react-dom'
import PicPage from './PicPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PicPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})
