import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent'
import Post from './Components/PostComponent'
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
import './css/App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

class App extends Component {

  render() {
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
                      <Post pageTitle ="Articulos Recientes" />
                      </div>
                  )
                 }
                 }/>
                </div>
              </div>
            
          
          <Route path="/post" exact strict component={PostPage}/>
          <Route path="/offTopic" exact strict component={OffTopicPage} />
          <Route path="/nosotros" exact strict component={NosotrosPage} />
        </div>
      </Router>
      );
  }
}

export default App;
