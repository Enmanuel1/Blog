import React, { Component } from 'react';
import image from '../Images/correct2-too-small.jpg'
import UserImage from '../Ico-img/user.png'
import { Link } from 'react-router-dom'
import '../css/PostComponent.css'
class OffTopicComponent extends Component {
    render() {
        let { title, postImg, description, authorName, authorAvatar } = this.props;
        let _title = title ? title.split(' ').join('_') : '';
        return (

            <div className="prueba">

                <Link to={`/fullOffTopic/${_title}`} >
                    <div className="postContainer">
                        <div className="postImage">
                            <img src={postImg ? postImg : image} alt={title} />
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
                                <img src={authorAvatar ? authorAvatar : UserImage} alt={authorName} />
                            </div>
                            <div className="AuthorName">{authorName}</div>
                        </div>
                    </div>
                </Link>

            </div>

        );
    }
}
export default OffTopicComponent;