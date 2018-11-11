import { Component } from 'react'

export default class SearchFormCtrl extends Component {

  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  /*
   * handle the submit of search form
   * @param {object} e
   * @return {void}
   */
  handleSearch = (e) => {
    /** using arrow function to not bind it in constructor */
    e.preventDefault()
    const query = this.state.value
    this.props.search(query.trim())
  }
  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChange = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ value: e.target.value })
  }
}
