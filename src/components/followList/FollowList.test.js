import React from 'react'
import FollowList from './FollowList'
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

const follow = {}
let followList = [follow, follow, follow]

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<FollowList store={store} followList={followList} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
