import React from 'react'
import Alert from './Alert'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  AlertReducer: {
    alert: {
      pics: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  /** mount componene */
  let wrapper = shallow(<Alert store={store} />, { initialState })

  /** expect render */
  expect(wrapper).toMatchSnapshot()
})
