import React from 'react'
import CommentList from './CommentList'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

let initialState = {

}

let comment = {
  user: {
    picProfile: 'http://www.pic.com'
  }
}

let commentList = [comment, comment]

it('renders without crashing', () => {
  let mockStore = configureStore()

  // Store
  let store = mockStore(initialState)

  // Wrappeamos el componente
  let wrapper = shallow(<CommentList comments={commentList} store={store} />, { initialState })

  // Validamos que renderice.
  expect(wrapper).toMatchSnapshot()
})
