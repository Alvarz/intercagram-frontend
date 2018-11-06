import React from 'react'
import './css/Follow.scss'
import FollowCtrl from './js/FollowCtrl'
import FollowList from '../../components/followList/FollowList'
// <Route path="/pic/:picId"   component={  } />
export default class Follow extends FollowCtrl {
  constructor (props) {
    super(props)

    this.id = this.props.match.params.id

    this.followList = []

    this.follow = {
      description: 'the description',
      user: {
        id: 1,
        name: 'john',
        lastname: 'doe',
        username: 'thecreatejohndoe',
        email: 'joendie@example.com'
      }
    }
    for (let i = 0; i < 6; i++) {
      this.followList.push(this.follow)
    }
  }
  render () {
    return (
      <div className='col-12 margin-bottom-50 margin-top-10'>
        <FollowList followList={this.followList} />
      </div>
    )
  }
}
