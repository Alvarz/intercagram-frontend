import React from 'react'
import { connect } from 'react-redux'
import './css/Pic.scss'
import PicCtrl from './js/PicCtrl'
import { Link } from 'react-router-dom'
import {
  postLike, postLikeSuccess, postLikeFailure,
  removeLike, removeLikeSuccess, removeLikeFailure
} from '../../actions/LikeActions'

class Pic extends PicCtrl {
  /*
   * constructor
   *
   * */
  constructor (props) {
    super(props)
    this.pic = this.props.pic

    this.withDescription = this.props.withDescription
  }

  /*
   * constructor
   *
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
            { (this.pic.wasLikedByUser) ? <li className='col'><i className='fas fa-heart' /><button onClick={(e) => this.unlike(e, this.pic)} /> {this.pic.likes}</li> : <li className='col'><i className='far fa-heart' /><button onClick={(e) => this.like(e, this.pic)} /> {this.pic.likes}</li>}
            <li className='col'><i className='far fa-comment' /> {this.pic.commentsQty}</li>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    likeList: state.LikeReducer.like
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLike: async (pic) => {
      try {
        const resp = await dispatch(postLike(pic)).payload
        dispatch(postLikeSuccess(resp.docs))
      } catch (err) {
        dispatch(postLikeFailure(err))
      }
    },
    removeLike: async (pic) => {
      try {
        const resp = await dispatch(removeLike(pic)).payload
        dispatch(removeLikeSuccess(resp.docs))
      } catch (err) {
        dispatch(removeLikeFailure(err))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pic)
