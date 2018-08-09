import React, { Component } from 'react';
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
import firebase from 'firebase'
class CreateOffTopic extends Component {

    constructor() {
        super()
        this.state = {
            post: {},
            Offpicture: null,
        }
        this.getDataOff = this.getDataOff.bind(this)
        this.handleUploadOff = this.handleUploadOff.bind(this)
    }

    handleUploadOff(event) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`/offTopic/${file.name}`)
        const task = storageRef.put(file)
        task.on("state_changed", snapshot => {
            console.log("que passa")
            storageRef.getDownloadURL().then(url => {
                console.log(url)
                this.setState({
                    Offpicture: url,
                });

            });
        })
    }
    getDataOff() {
        //we get the current user on session
        let displayName = firebase.auth().currentUser.displayName;
        let avatar = firebase.auth().currentUser.photoURL;

        let titulo = document.getElementById("tituloOff").value
        let descripcion = document.getElementById("descripcionOff").value
        let pictureoff = this.state.Offpicture
        let OffimgPath = pictureoff ? pictureoff : '';
        console.log(pictureoff)
        console.log(this.state.Offpicture)

        //we are going to replace the white spaces on 'titulo'
        // with underscore and send it to the database
        let _post = titulo.split(' ').join('_');


        firebase.database().ref(`offTopic/${_post}`).set({
            titulo,
            descripcion,
            OffimgPath,
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
                                <h2>Crea un nuevo post Off Topic</h2>
                            </div>
                        </div>
                        <div className="content addPostContent">
                            <div className="modalClose">
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />
                            </div>
                            <div className="AddPostForm">
                                <input type="text" placeholder="Titulo del post" id="tituloOff"/>
                                <textarea placeholder="Descripcion" id="descripcionOff"/>
                                <label htmlFor="file-uploadOff" className="custom-file-upload">
                                    Subir Imagen del post
                                </label>
                                <input id="file-uploadOff" type="file" onChange={this.handleUploadOff} />
                                <button className="btn addPostButton" id="crearPost" onClick={this.getDataOff} >
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