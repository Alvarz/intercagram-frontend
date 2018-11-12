import React from 'react'
import Comment from './Comment'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

}

let comment = {
  user: {
    picProfile: 'http://www.pic.com'
  }
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<Comment store={store} comment={comment} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
