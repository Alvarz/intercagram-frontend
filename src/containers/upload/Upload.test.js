import React from 'react'
import Upload from './Upload'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  UploadReducer: {
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
  let wrapper = shallow(<Upload store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
