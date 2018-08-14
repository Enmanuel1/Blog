import React, { Component } from "react";
import firebase from 'firebase';
import '../css/FullPost.css'
import like from '../Ico-img/like.png'
import UserImage from '../Ico-img/user.png'
import dislike from '../Ico-img/dislike.png'
import ComentFormComponent from "./ComentFormComponent";
class FullPost extends Component {
    state = {posts:[]}
    
 
    fetchPost(){
        //Get the URL param called 'postName'
        let {postName}= this.props.match.params;
        //We have the filter param to search it on firebase
        let database = firebase.database();
        let posts = database.ref(`posts/${postName}`);
        posts.on('value',(snapshot)=>{
            //this.setState({postName:snapshot.val()});
            this.setState({post:snapshot.val()});
        })
       
    }

    componentWillMount(){
        this.fetchPost();
    }
    render() {
        
        let {post}= this.state;
    

        return (

            <div>

            { post ?

                <div className="FullPostContainer">
                    <div className="FullpostHeader">{post.titulo}</div>
                        {<ComentFormComponent titlex={post.titulo}/>}
                    <div className="bannerpost"><img src={post.imgPath} alt=""/></div>
                    <div className="FullPostDescriptionContainer">
                        <div className="FullPostDescription">
                                {post.descripcion}
                        </div>    
                        <div className="ComentButton">
                                <button onClick={this.openComentModal}>Comentar</button>
                                <button>Reportar</button>
                        </div>
                    </div>
                    <div className="FullPostComentContainer">
                        <div className="FullPostComent">
                            <div className="ComentIcontContainer">
                                <img src={post.author? post.author.avatar:UserImage} alt="User"/>
                            </div>
                            <div className="ComentBodyContainer">
                                <div className="ComentHeader">
                                    <div className="ComentTitle">
                                        {post.author ? post.author.displayName : ''}
                                    </div>
                                    <div className="comentScore">
                                    0
                                    </div>
                                </div>
                                <div className="ComentBody">
                                        <div className="Coment">
                                            muy bueno! para hacer optimizacion de imagenes para web con imageMagick se tiene que cambiar
                                            return spawn('convert',[tempLocalFile, tempLocalPNGFile]);por algunas opciones? como por ejemplo 75 de calidad y eso?
                                        </div>
                                        <div className="ComentRate">
                                            <div className="goodRate">
                                                <img src={like} alt="Like"/>
                                            </div>
                                            <div className="badRate">
                                                <img src={dislike} alt="Like" />
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                            <div className="FullPostComent">
                                <div className="ComentIcontContainer">
                                    <img src={post.author ? post.author.avatar : UserImage} alt="User" />
                                </div>
                                <div className="ComentBodyContainer">
                                    <div className="ComentHeader">
                                        <div className="ComentTitle">
                                            {post.author ? post.author.displayName : ''}
                                        </div>
                                        <div className="comentScore">
                                            0
                                    </div>
                                    </div>
                                    <div className="ComentBody">
                                        <div className="Coment">
                                            muy bueno! para hacer optimizacion de imagenes para web con imageMagick se tiene que cambiar
                                            return spawn('convert',[tempLocalFile, tempLocalPNGFile]);por algunas opciones? como por ejemplo 75 de calidad y eso?
                                        </div>
                                        <div className="ComentRate">
                                            <div className="goodRate">
                                                <img src={like} alt="Like" />
                                            </div>
                                            <div className="badRate">
                                                <img src={dislike} alt="Like" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                        
                    </div>           
               // <li>Author: {post.author? post.author.displayName: ''}</li>
                //<li>Avatar: {post.author? post.author.avatar: ''}</li>
            : <h1>No se pudo encontrar el post</h1>}  
            </div> 
        );
    }
    openComentModal() {
        let modal = document.getElementById("AddComentModal");
        modal.setAttribute("open", true)
    }
}

export default FullPost;