import React, { Component } from "react";
import firebase from 'firebase';
import image from "../Images/correct2-too-small.jpg";
import $ from 'jquery'
import Rating from 'react-rating'
import likeheart from '../Ico-img/star.png'
import UserImage from '../Ico-img/user.png'
import likeheartactive from '../Ico-img/star (1).png'
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
class FullPost extends Component {
state = {
    posts:[],
    coments:[]
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

        let coments = database.ref(`posts/${postName}/coments`)
        coments.on('value',(snapshot=>{
            this.setState({coment:snapshot.val()})
        }))
       
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
        let {coment} = this.state;
        
        
        return (
            <div>
            { post ?
                
                <div className="FullPostContainer">
                       
                        <input type="hidden" id="inputHidden" value={post.titulo}/>
                        <input type="hidden" id="inputHiddenautor" value={post.author.displayName} />
                        
                        <dialog className="modalx" id="AddComentModal">
                            <div className="container">
                                <div className="modalContent createpostContainer">
                                    <div className="modalHeader headerAddPost">
                                        <div className="modalTitle">
                                            <img src={logo} alt="logo" className="modalLogo" />
                                            <h2>Crea un nuevo comentario</h2>
                                        </div>
                                    </div>
                                    <div className="content addPostContent">
                                        <div className="modalClose">
                                            <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />
                                        </div>
                                        <div className="AddPostForm">
                                            <textarea placeholder="Comentario" id="comentario"/>
                                            <button className="btn addPostButton" id="crearComentario" onClick={this.PostComent} >
                                                Comentar!
                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>  
                        
                    <div className="FullpostHeader">{post.titulo}</div>
                        
                    <div className="bannerpost"><img src={post.imgPath?post.imgPath:image} alt=""/></div>
                    <div className="FullPostDescriptionContainer">
                        <div className="FullPostDescription">
                                {post.descripcion}
                        </div>    
                        <div className="ComentButton">
                                <button onClick={this.openComentModal}>Comentar</button>
                                <button onClick={this.reporte} id="reporte">Reportar</button>
                        </div>
                            
                    </div>
                            <div className="FullPostComent">
                                <div className="ComentIcontContainer">
                                    <img src={UserImage} alt="User" />
                                </div>
                                <div className="ComentBodyContainer">
                                    <div className="ComentHeader">
                                        <div className="ComentTitle">
                                            {coment ? coment.User : ''}
                                        </div>
                                    </div>
                                    <div className="ComentBody">
                                        <div className="Coment">
                                            {coment? coment.comentario:'No hay comentarios'}
                                        </div>
                                        <div className="rating">
                                            <Rating
                                              emptySymbol={<img src={likeheart} className="icon" alt="icon star"/>}
                                              fullSymbol={<img src={likeheartactive} className="icon" alt="icon star" />}
                                              onChange={(rate) => alert("Acaba de calificar con " + rate + " estrellas este post")}
                                            />
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
    
    /*Subir el comentario al firebase*/
    PostComent(){
        let comentario = document.getElementById("comentario").value
        let userA = firebase.auth().currentUser;
        if (comentario.trim() !== "" && userA !== null){
            /*Titulo del post*/
            let input = document.getElementById("inputHidden").value;
            let User = firebase.auth().currentUser.displayName;          
            let _input = input.split(' ').join('_')         
            let coments = { User,comentario };
            let db = firebase.database()
            db.ref(`posts/${_input}/coments`).set(coments)
            document.getElementById("AddComentModal").removeAttribute("open");
        } else if (userA === null) {
            alert("Debe iniciar sesion para poder comentar")
        }else{
            alert("El campo de comentario esta vacio. ")
        }

    }
    openComentModal(){
        let modal = document.getElementById("AddComentModal");
        modal.setAttribute("open", true)
        

        
    }
    close() {
        
        document.getElementById("AddComentModal").removeAttribute("open");
    }
}

export default FullPost;