import React, { Component } from "react";
import firebase from 'firebase';
import '../css/FullPost.css'
import $ from 'jquery'
import Rating from 'react-rating'
import likeheart from '../Ico-img/star.png'
import UserImage from '../Ico-img/user.png'
import likeheartactive from '../Ico-img/star (1).png'
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
        reporte(){
        alert("Usted acaba de realizar un reporte \nAntes de continuar: \nPunto y Coma no se responsabiliza de la exactitud, veracidad, vigencia, licitud o relevancia de los posts publicados por cualquier usuario del Blog, ni de las opiniones y comentarios remitidos por los usuarios acerca de dichos posts. En este sentido, Punto y Coma tiene la facultad, pero no la obligación, de controlar el uso del Blog y sus contenidos, que son de la exclusiva responsabilidad de los usuarios que los formulen.");
        $('#reporte').attr("disabled", true);
        window.location.href="mailto:reportespuntoycoma@gmail.com?Subject=Reporte%20Post"
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
                                <button onClick={this.reporte} id="reporte">Reportar</button>
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
                                </div>
                                <div className="ComentBody">
                                        <div className="Coment">
                                            muy bueno! para hacer optimizacion de imagenes para web con imageMagick se tiene que cambiar
                                            return spawn('convert',[tempLocalFile, tempLocalPNGFile]);por algunas opciones? como por ejemplo 75 de calidad y eso?
                                        </div>
                                                                                <div className="ComentRate">
                                            <div className="goodRate">
                                            </div>

                                                                                <div className="rating">
                                            <Rating
                                              emptySymbol={<img src={likeheart} className="icon" />}
                                              fullSymbol={<img src={likeheartactive} className="icon" />}
                                              onChange={(rate) => alert("Acaba de calificar con " + rate + " estrellas este post")}
                                            />
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
                                    </div>
                                    <div className="ComentBody">
                                        <div className="Coment">
                                            muy bueno! para hacer optimizacion de imagenes para web con imageMagick se tiene que cambiar
                                            return spawn('convert',[tempLocalFile, tempLocalPNGFile]);por algunas opciones? como por ejemplo 75 de calidad y eso?
                                        </div>
                                        <div className="ComentRate">
                                            <div className="goodRate">
                                            </div>

                                        </div>
                                        <div className="rating">
                                            <Rating
                                              emptySymbol={<img src={likeheart} className="icon" />}
                                              fullSymbol={<img src={likeheartactive} className="icon" />}
                                              onChange={(rate) => alert("Acaba de calificar con " + rate + " estrellas este post")}
                                            />
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