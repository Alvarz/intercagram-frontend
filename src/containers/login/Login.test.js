import React from 'react'
import Login from './Login'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  UserReducer: {
    token: 'thisisthetoken'
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  /** Store */
  let store = mockStore(initialState)

  /** mount component */
  let wrapper = shallow(<Login store={store} />, { initialState })

  /** expect render  */
  expect(wrapper).toMatchSnapshot()
})
