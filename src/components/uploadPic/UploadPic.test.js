import React from 'react'
import UploadPic from './UploadPic'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  UploadPicReducer: {
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
  let wrapper = shallow(<UploadPic store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
