import React from 'react'
import FollowItem from './FollowItem'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  FollowReducer: {
    isFollower: true
  },
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

  // Wrappeamos el componente
  let wrapper = shallow(<FollowItem store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
