import { Component } from 'react'

export default class AppCtrl extends Component {
  componentWillMount () {
    this.getMe()
  }

  async getMe () {
    this.props.getMe()
  }
}
