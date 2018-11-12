import React from 'react'
import Register from './Register'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  UserReducer: {

    token: ''
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  /** Store */
  let store = mockStore(initialState)

  /** mount component */
  let wrapper = shallow(<Register store={store} />, { initialState })

  /** expect render  */
  expect(wrapper).toMatchSnapshot()
})
