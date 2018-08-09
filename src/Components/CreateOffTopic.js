import React, { Component } from 'react';
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
import firebase from 'firebase'
class CreateOffTopic extends Component {

    constructor() {
        super()
        this.state = {
            post: {},
            picture: null,
            estado: false
        }
        this.getData = this.getData.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload(event) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
        const task = storageRef.put(file)
        task.on("state_changed", snapshot => {
            storageRef.getDownloadURL().then(url => {
                this.setState({
                    picture: url,
                    estado: true
                });

            });
        })
        if (this.state.estado) {
            alert("La imagen cargo")
            this.setState({
                estado: false
            })
        } else {
            console.log("La imagen no cargo")
        }
    }
    getData() {
        //we get the current user on session
        let displayName = firebase.auth().currentUser.displayName;
        let avatar = firebase.auth().currentUser.photoURL;

        let titulo = document.getElementById("titulo").value
        let descripcion = document.getElementById("descripcion").value
        let picture = this.state.picture
        let imgPath = picture ? picture : '';


        //we are going to replace the white spaces on 'titulo'
        // with underscore and send it to the database
        let _post = titulo.split(' ').join('_');


        firebase.database().ref(`offTopic/${_post}`).set({
            titulo,
            descripcion,
            imgPath,
            author: { displayName, avatar }
        }).catch(err => {
            console.error(err);
        })

        titulo = '';
        descripcion = '';

    }

    render(){
        return(
            <dialog className="modal" id="AddOffTopicModal">
                <div className="container">
                    <div className="modalContent createpostContainer">
                        <div className="modalHeader headerAddPost">
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo" />
                                <h2>Crea un nuevo post</h2>
                            </div>
                        </div>
                        <div className="content addPostContent">
                            <div className="modalClose">
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />
                            </div>
                            <div className="AddPostForm">
                                <input type="text" placeholder="Titulo del post" id="titulo" />
                                <textarea placeholder="Descripcion" id="descripcion" />
                                <label htmlFor="file-upload" className="custom-file-upload">
                                    Subir Imagen del post
                                </label>
                                <input id="file-upload" type="file" onChange={this.handleUpload} />
                                <button className="btn addPostButton" id="crearPost" onClick={this.getData} >
                                    Crear el post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }
    close() {
        document.getElementById("AddOffTopicModal").removeAttribute("open");
    }
}

export default CreateOffTopic