import { Component } from 'react'

export default class ProfileCtrl extends Component {
  constructor (props) {
    super(props)
    this.totalImage = 20
    console.log('Profile container')
  }

  componentWillMount () {
    let id = this.props.match.params.id
    this.props.getUser(id)

    this.props.fetchUserPics(id)
  }
}
