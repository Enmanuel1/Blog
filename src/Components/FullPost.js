import React, { Component } from "react";
import firebase from 'firebase';
import '../css/FullPost.css'
class FullPost extends Component {
    constructor(){
        super()
        this.state = { post: {} }
    }
    
 
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
        console.log(post)
        return (
            <div>
            { post ?
                <div class="FullPostContainer">
                    <div class="FullpostHeader">{post.titulo}</div>
                    <div class="bannerpost"><img src={post.imgPath} alt=""/></div>
                        <div class="FullpostContainerDescription">
                            <div class="FullpostDescription">
                                <div class="description">
                                    {post.descripcion}
                                </div>
                            </div>
                        </div>
                        <div class="postComents">
                            <div class="comentButton">
                                <button>Comentar</button>
                            </div>

                            <div class="coments">
                                <div class="iconUser">

                                </div>
                                <div class="comentBody">
                                    <div class="comentHeader">User Name</div>
                                    <div class="comentContent">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, odit pariatur? Praesentium itaque voluptatem, fugiat quam repellendus accusamus libero sunt aliquam quasi, repudiandae reiciendis rem quod vel, autem quo et?
                        </div>
                                </div>
                                <div class="calificacion">
                                    <div class="tituloCailificacion">
                                        Calificar
                        </div>
                                    <div class="estrellas">

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
}

export default FullPost;