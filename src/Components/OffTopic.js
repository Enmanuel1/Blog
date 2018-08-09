import React, { Component } from 'react';
import Posts from './OffTopicComponent'
import CreateOffTopic from './FloatButtonOffTopic'
import firebase from 'firebase'
class OffTopic extends Component{
	state = { posts: [] }

	getPosts() {
		let previusPost = this.state.posts;
		let postDatabase = firebase.database().ref('offTopic');
		postDatabase.on('child_added', snap => {
			previusPost.push({
				id: snap.key,
				post: snap.val()
			})
			this.setState({ posts: previusPost });
		});

	}

	componentWillMount() {
		this.getPosts();
	}

render(){
	let { posts } = this.state;
	console.log(posts);
	return(
			<div className="OffTopic">
			<div className="Content">
				<div className="postMainContainer">
					<h1>Off Topic</h1>
					{
						posts ?
							posts.map(item => (
								<Posts key={item.id}
									title={item.post.titulo}
									postImg={item.post.OffimgPath}
									description={item.post.descripcion}
									authorName={item.post.author.displayName}
									authorAvatar={item.post.author.avatar}
								/>
							))
							: <h2>Ningún post creado</h2>
					}
				</div>
			</div>
				<CreateOffTopic/>
			</div>
		);
	}

}

export default OffTopic;