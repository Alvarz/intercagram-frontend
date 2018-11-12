import React from 'react'
import Gallery from './Gallery'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  GalleryReducer: {
    feed: {
      pics: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<Gallery store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
