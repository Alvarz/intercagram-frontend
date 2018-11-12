import React from 'react'
import Pic from './Pic'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  PicReducer: {
    feed: {
      pics: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  /** mount component */
  let wrapper = shallow(<Pic store={store} />, { initialState })

  /** expect render */
  expect(wrapper).toMatchSnapshot()
})
