import React, { Component } from 'react';
import '../css/ModalComponents.css'
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
class CreatePost extends Component {

    render(){
        return(
            <dialog className="modal" id="AddPostModal" >
                <div className="container">
                    <div className="modalContent createpostContainer">
                        <div className="modalHeader headerAddPost">
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo" />
                                <h2>Crea un nuevo post</h2>
                            </div>
                        </div>
                        <div className="content addPostContent">
                            <div className="modalClose" >
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />
                            </div>
                            <div className="AddPostForm">
                                <input type="text" placeholder="Titulo del post" />
                                <textarea placeholder="Descripcion"></textarea>
                                <label for="file-upload" className="custom-file-upload">
                                     Subir Imagen del post
                                </label>
                                <input id="file-upload" type="file" />
                                <button className="btn addPostButton">Crear el post</button>
                            </div>
                        </div>

                    </div>
                </div>
            </dialog>
        )
    }
    close() {
        document.getElementById("AddPostModal").removeAttribute("open");
    }

}
export default CreatePost 