import React from 'react'
import Loading from './Loading'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  LoadingReducer: {
    loading: true
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<Loading store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
