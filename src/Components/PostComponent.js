import React, { Component } from 'react';
import image from '../Images/correct2-too-small.jpg'
import UserImage from '../Ico-img/user.png'
import {Link} from 'react-router-dom'
import '../css/PostComponent.css'
class PostComponent extends Component {
    render(){
        let {title,postImg, description, authorName, authorAvatar} = this.props;
        let _title = title? title.split(' ').join('_') : '';
        return(
          <Link to={`/fullPost/${_title}`} >
            <div className="Content">
            <h1>{this.title}</h1>
            <div className="postMainContainer">
            <div className="postContainer">
              <div className="postImage">
                <img src={postImg? postImg: image} alt={title} />
              </div>
              <div className="postTitle">
                <h3>
                  {title}
                </h3>
              </div>
              <div className="postDescription">
                <p>
                  {description}
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={authorAvatar?authorAvatar:UserImage} alt={authorName}/>
                </div>
                <div className="AuthorName">{authorName}</div>
              </div>
            </div>
          </div>
            
            
            </div>
            </Link>

          );
    }
}
export default PostComponent;