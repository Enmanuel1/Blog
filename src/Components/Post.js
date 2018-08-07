import React, { Component } from 'react';
import Posts from './PostComponent'
import FloatButton from './FloatButtonComponent'
class Post extends Component{
render(){
	return(
			<div className="Post">
				<Posts pageTitle = "Posts"/>
				<FloatButton/>
			</div>
		);
	}

}

export default Post;