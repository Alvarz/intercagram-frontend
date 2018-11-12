import React from 'react'
import Profile from './Profile'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  UserReducer: {
    user: {
      user: []
    },
    picList: {
      pics: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<Profile store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
