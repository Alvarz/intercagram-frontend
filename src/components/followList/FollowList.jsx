import React from 'react'
import './css/FollowList.scss'
import FollowListCtrl from './js/FollowListCtrl'

import FollowItem from '../followItem/FollowItem'

export default class FollowList extends FollowListCtrl {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)

    this.followList = this.props.followList

    console.log(this.followList)
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <section>
        <ul className='list-group'>
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
