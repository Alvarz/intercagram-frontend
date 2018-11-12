import React from 'react'
import SearchForm from './SearchForm'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<SearchForm store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
