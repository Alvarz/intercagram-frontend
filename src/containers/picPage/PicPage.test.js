import React from 'react'
import PicPage from './PicPage'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  PicReducer: {
    pic: {
      pic: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<PicPage store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
