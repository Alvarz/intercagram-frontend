import React from 'react'
import { connect } from 'react-redux'
import './css/Pic.scss'
import to from '../../utils/to'
import PicCtrl from './js/PicCtrl'
import { Link } from 'react-router-dom'
import {
  postLike, postLikeSuccess, postLikeFailure,
  removeLike, removeLikeSuccess, removeLikeFailure
} from '../../actions/LikeActions'
import { postComment, postCommentSuccess, postCommentFailure } from '../../actions/CommentActions'
class Pic extends PicCtrl {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.pic = this.props.pic

    this.withDescription = this.props.withDescription
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    let description, topDescription
    if (this.withDescription) {
      topDescription = (
        <div className='row'>
          <div className='col'>
            <div className='comment-thumbnail-container' >
              <Link className='' to={`/profile/${this.pic.user._id}`} >
                <img className='rounded-circle thumb-comment img-thumbnail' src='https://image.shutterstock.com/image-vector/female-profile-picture-placeholder-vector-260nw-450966937.jpg' alt='alt' />
              </Link>
            </div>
            <div className='col comment-textbox'>
              <div className='row'>
                <div className='col-12 align-left'>
                  <span className='pic-username'>{this.pic.user.nickname}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      description = (
        <div className='description margin-bottom-20 '>
          <ul className='row'>
            { (this.pic.wasLikedByUser) ? <li className='col'><button className='btn' onClick={(e) => this.unlike(e, this.pic)} ><i className='fas fa-heart' /> {this.pic.likes}</button></li> : <li className='col'><button className='btn ' onClick={(e) => this.like(e, this.pic)} ><i className='far fa-heart' /> {this.pic.likes} </button></li>}
            <li className='col'><button className='btn' onClick={(e) => this.leaveComment(e, this.pic)} ><i className='far fa-comment' /> {this.pic.commentsQty}</button></li>
          </ul>
          <p className='align-justify cut-text desc-pic'>{this.pic.description }</p>
        </div>
      )
    }

    return (
      <section>
        {topDescription}
        <div className='image margin-top-5'>
          <Link to={`/pic/${this.pic._id}`}> <img src={this.pic.url} alt='image' />
          </Link>
        </div>
        {description}
      </section>
    )
  }
}
/*
 * map state to props
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    likeList: state.LikeReducer.like
  }
}

/*
 * map dispatch to props
 * @param {object} state
 * @return {void}
 */
const mapDispatchToProps = (dispatch) => {
  return {
  /*
   * like a pic
   * @param {object} pic
   * @return {void}
   */
    postLike: async (pic) => {
      const [err, resp] = await to(dispatch(postLike(pic)).payload)
      if (err || !resp) {
        dispatch(postLikeFailure(err, resp))
        return
      }
      dispatch(postLikeSuccess(resp.docs))
    },
    /*
     * unlike a pic
     * @param {object} pic
     * @return {void}
     */
    removeLike: async (pic) => {
      const [err, resp] = await to(dispatch(removeLike(pic)).payload)
      if (err || resp) {
        dispatch(removeLikeFailure(err, resp))
        return
      }
      dispatch(removeLikeSuccess(resp.docs))
    },
    /*
     * post a comment
     * @param {object} pic
     * @return {void}
     */
    postComment: async (comment) => {
      const [err, resp] = await to(dispatch(postComment(comment)).payload)
      if (err || !resp) {
        dispatch(postCommentFailure(err, resp))
        return
      }
      dispatch(postCommentSuccess())
    }
  }
}
/** class exporter with redux connection */
export default connect(mapStateToProps, mapDispatchToProps)(Pic)
