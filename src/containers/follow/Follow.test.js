import React from 'react'
import Follow from './Follow'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  FollowReducer: {
    follow: {
      followers: [],
      following: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<Follow store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
