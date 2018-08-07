import React, { Component } from 'react';
import image from '../Images/correct2-too-small.jpg'
import UserImage from '../Ico-img/user.png'
import '../css/PostComponent.css'
class PostComponent extends Component {
    render(){

        return(
            <div className="Content">
            <h1>{this.props.pageTitle}</h1>
            <div className="postMainContainer">
            <div className="postContainer">
              <div className="postImage">
                <img src={image} alt="PostImg" />
              </div>
              <div className="postTitle">
                <h3>
                  Cloud Functions for Firebase: Utilizando los
                  activadores de Firebase Storage
                </h3>
              </div>
              <div className="postDescription">
                <p>
                  Cómo utilizar los activadores de Firebase Storage con
                  Firebase Cloud Functions.
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={UserImage} alt="User"/>
                </div>
                <div className="AuthorName">CARLOS AZAUSTRE</div>
              </div>
            </div>

            <div className="postContainer">
              <div className="postImage">
                <img src={image} alt="PostImg"/>
              </div>
              <div className="postTitle">
                <h3>Vue: Single File Components</h3>
              </div>
              <div className="postDescription">
                <p>
                  Con los Single File Components de Vue podemos tener en
                  un único fichero la lógica, la vista y el estilo para
                  hacer más escalable el desarrollo.
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={UserImage} alt="User" />
                </div>
                <div className="AuthorName">CARLOS AZAUSTRE</div>
              </div>
            </div>

            <div className="postContainer">
              <div className="postImage">
                <img src={image} alt="PostImg" />
              </div>
              <div className="postTitle">
                <h3>
                  El futuro de los WebComponents gracias a Polymer 3.0
                </h3>
              </div>
              <div className="postDescription">
                <p>
                  Futuras novedades en el estándar de WebComponents
                  gracias a los avances de Polymer 3.0
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={UserImage} alt="User" />
                </div>
                <div className="AuthorName">CARLOS AZAUSTRE</div>
              </div>
            </div>
            <div className="postContainer">
              <div className="postImage">
                <img src={image} alt="PostImg" />
              </div>
              <div className="postTitle">
                <h3>
                  Cloud Functions for Firebase: Utilizando los
                  activadores de Firebase Storage
                </h3>
              </div>
              <div className="postDescription">
                <p>
                  Cómo utilizar los activadores de Firebase Storage con
                  Firebase Cloud Functions.
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={UserImage} alt="User" />
                </div>
                <div className="AuthorName">CARLOS AZAUSTRE</div>
              </div>
            </div>

            <div className="postContainer">
              <div className="postImage">
                <img src={image} alt="PostImg" />
              </div>
              <div className="postTitle">
                <h3>Vue: Single File Components</h3>
              </div>
              <div className="postDescription">
                <p>
                  Con los Single File Components de Vue podemos tener en
                  un único fichero la lógica, la vista y el estilo para
                  hacer más escalable el desarrollo.
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={UserImage} alt="User" />
                </div>
                <div className="AuthorName">CARLOS AZAUSTRE</div>
              </div>
            </div>

            <div className="postContainer">
              <div className="postImage">
                <img src={image} alt="PostImg" />
              </div>
              <div className="postTitle">
                <h3>
                  El futuro de los WebComponents gracias a Polymer 3.0
                </h3>
              </div>
              <div className="postDescription">
                <p>
                  Futuras novedades en el estándar de WebComponents
                  gracias a los avances de Polymer 3.0
                </p>
              </div>
              <div className="postAuthor">
                <div className="AuthorImage">
                  <img src={UserImage} alt="User" />
                </div>
                <div className="AuthorName">CARLOS AZAUSTRE</div>
              </div>
            </div>
          </div>

            </div>


          );
    }
}
export default PostComponent;