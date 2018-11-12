import React from 'react'
import UploadForm from './UploadForm'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<UploadForm store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
