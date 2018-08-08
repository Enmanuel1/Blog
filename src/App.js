import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent'
import Post from './Components/PostComponent'
import firebase from 'firebase'
/*Modales*/
import LoginModal from "./Components/LogInComponent";
import SignUpModal from "./Components/SignUpComponent";
import SearchModal from './Components/SearchComponent'
import EditModal from "./Components/EditUser";
import CreatePostModal from './Components/CreatePost'
/*Paginas*/
import PostPage from './Components/Post'
import OffTopicPage from "./Components/OffTopic";
import NosotrosPage from "./Components/Nosotros";
import FullPost from "./Components/FullPost";
import './css/App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

class App extends Component {

  constructor() {
    super()
    this.state = { posts: [] }
  }

  getPosts() {
    let previusPost = this.state.posts;
    let postDatabase = firebase.database().ref('posts');
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
  render() {
     let {posts} = this.state; 

    return (
      
      <Router> 
      <div className="App">
      
            <div>
              <div className="banner">
              <LoginModal />
              <SignUpModal />
              <SearchModal />
              <EditModal/>
              <CreatePostModal/>
                  <div className="header">
                    <HeaderComponent />
                  </div>
                  <div className="slogan-container">
                    <div className="slogan-title">
                      Comunidad para desarrolladores
                    </div>
                    <div className="slogan">
                      Ven a aprender y a compartir tus conocimientos con otros
                      desarrolladores
                  </div>
                  </div>

                </div>
                <div className="body">
                <Route path="/" exact strict render={
                 () => {
                  return (
                    <div>
                      {
                      posts?posts.map(item =>(
                      <Post 
                        pageTitle="Off Topics"
                        key={item.id}
                        title={item.post.titulo}
                        postImg={item.post.imgPath}
                        description={item.post.descripcion}
                        authorName={item.post.author.displayName}
                        authorAvatar={item.post.author.avatar}
                        />
                        )): <h2>Ningún post creado</h2>
                      }
                      </div>
                  )
                 }
                 }/>
                </div>
              </div>
            
          <Route path="/fullPost/:postName" component={(props)=> <FullPost {...props}/>}/>
          <Route path="/post" exact strict component={PostPage}/>
          <Route path="/offTopic" exact strict component={OffTopicPage} />
          <Route path="/nosotros" exact strict component={NosotrosPage} />
        </div>
      </Router>
      );
  }
}

export default App;
