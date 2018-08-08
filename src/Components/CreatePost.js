import React, { Component } from 'react';
import '../css/ModalComponents.css'
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
import firebase from 'firebase'
class CreatePost extends Component {

    
    constructor(){
        super()
        this.state = {
            post : {},
            picture: null,
        }
        this.getData = this.getData.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }



    handleUpload(event){
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
        const task = storageRef.put(file)

        task.on("state_changed", snapshot => {

            storageRef.getDownloadURL().then(url => {
                this.setState({
                    picture: url,
                });
                alert("La imagen ya se cargo")
            });
        })
    }
    getData() {
        let titulo = document.getElementById("titulo").value
        let descripcion = document.getElementById("descripcion").value
        let picture = this.state.picture
        this.setState({
            post : {titulo,descripcion,picture}
        })
        firebase.database().ref("posts/").push().set({
            post: this.state.post
        })
        console.log(this.state.post)
    }
    render(){
        return <dialog className="modal" id="AddPostModal">
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
                    <input type="text" placeholder="Titulo del post" id="titulo"/>
                    <textarea placeholder="Descripcion" id="descripcion" />
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Subir Imagen del post
                    </label>
                    <input id="file-upload" type="file" onChange={this.handleUpload}/>
                    <button className="btn addPostButton" id="crearPost" onClick={this.getData} >
                      Crear el post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>;
    }

    close() {
        document.getElementById("AddPostModal").removeAttribute("open");
    }

}
export default CreatePost 