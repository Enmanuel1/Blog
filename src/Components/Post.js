import React, { Component } from 'react';
import Posts from './PostComponent'
import FloatButton from './FloatButtonComponent'
import '../css/PostComponent.css'
import firebase from 'firebase';
class Post extends Component{
	state = {posts:[]}

	getPosts(){
		let previusPost = this.state.posts;
		let postDatabase = firebase.database().ref('posts');
		postDatabase.on('child_added', snap =>{
			previusPost.push({
                id:snap.key,
                post:snap.val()
			})
			this.setState({posts:previusPost});
		});
       
	}

	componentWillMount(){
		this.getPosts();
	}

render(){
	// let {title,postImg, description, authorName, authorAvatar}
	//<Posts title={item.}/>
	let {posts} = this.state;
	console.log(posts);

/*

		
*/
	return(
			<div className="Post">
			
			<div className="Content">
				<div className="postMainContainer">
					<h1>Posts</h1>
			{
				posts?
				posts.map(item =>(
					<Posts key={item.id}
					title={item.post.titulo}
					postImg={item.post.imgPath}
					description={item.post.descripcion}
					authorName={item.post.author.displayName}
					authorAvatar={item.post.author.avatar}
					/>
				))
				: <h2>Ningún post creado</h2>
			}
					</div>
				</div>

				<FloatButton/>
			</div>
		);
	}

}

export default Post;