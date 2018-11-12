import React from 'react'
import UserProfile from './UserProfile'
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

  // mount to component
  let wrapper = shallow(<UserProfile store={store} />, { initialState })

  // expect
  expect(wrapper).toMatchSnapshot()
})
