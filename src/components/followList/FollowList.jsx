import React from 'react'
import './css/FollowList.scss'
import FollowListCtrl from './js/FollowListCtrl'

import FollowItem from '../followItem/FollowItem'

export default class FollowList extends FollowListCtrl {
  constructor (props) {
    super(props)

    this.followList = this.props.followList
    console.log(this.followsList, 'list')
  }

  render () {
    return (
      <section>
        <ul cassName='list-group'>
          {this.followList.map((follow, key) => {
            return (<li className='list-group-item' key={key}>
              <FollowItem followItem={follow} />
            </li>)
          })
          }
        </ul>
      </section>
    )
  }
}
