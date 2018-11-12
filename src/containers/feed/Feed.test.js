import React from 'react'
import Feed from './Feed'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  FeedReducer: {
    feed: {
      pics: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // mount the component
  let wrapper = shallow(<Feed store={store} />, { initialState })

  // match snapshot
  expect(wrapper).toMatchSnapshot()
})
