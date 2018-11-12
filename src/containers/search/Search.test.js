import React from 'react'
import Search from './Search'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

  SearchReducer: {
    stateAreSearchResult: true,
    picsList: {
      pics: []
    }
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<Search store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
