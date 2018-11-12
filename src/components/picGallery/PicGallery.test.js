import React from 'react'
import PicGallery from './PicGallery'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

}

let pic = {
  _id: 'k12h3jk12hb'
}

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<PicGallery pic={pic} store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
