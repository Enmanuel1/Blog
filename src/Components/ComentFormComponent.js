import React, { Component } from 'react';
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
class ComentFormComponent extends Component  {
    
    render(){
        return(
            <dialog className="modal" id="AddComentModal">
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
                                <textarea placeholder="Comentario" id="comentario" />
                                <button className="btn addPostButton" id="crearComentario" onClick={this.getData} >
                                    Comentar!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>

        )
    }

    close() {
        document.getElementById("AddComentModal").removeAttribute("open");
    }

}

export default ComentFormComponent