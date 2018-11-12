import React from 'react'
import App from './App'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  UserReducer: {
    me: {
      user: {}
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // mount the component
  let wrapper = shallow(<App store={store} />, { initialState })

  // match snapshot
  expect(wrapper).toMatchSnapshot()
})
