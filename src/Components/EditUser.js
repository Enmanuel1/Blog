import React, { Component } from 'react';
import '../css/ModalComponents.css'
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png";
import firebase from 'firebase'
class EditUser extends Component{

    
    actualizar() {
        let nombre = document.getElementById("UsuarioNombre").value
        let user = firebase.auth().currentUser

        user.updateProfile({
            displayName: nombre,
        }).then(() => {
            alert("datos actualizados")
            window.location.reload(true)
        }).catch(error => alert(error.message))

    }

    render() {
        let useremail, nombre;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                useremail = user.email;
                nombre = user.displayName;
                document.getElementById('UsuarioEmail').innerHTML = useremail;
                document.getElementById('UsuarioNombre').value = nombre;
                document.getElementById('UUsuarioEmail').value = useremail;
            }

        });
        return (
            <dialog className="modal" id="EditUser">
                <div className="container">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <div className="modalClose" >
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />
                            </div>
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo" />
                                <h2 id="UsuarioEmail"> </h2>
                            </div>
                        </div>
                        <div className="content">
                            <div className="authInputRegister">
                                <input type="text" placeholder="Nombre" id="UsuarioNombre" required />
                                <input type="email" placeholder="Correo electronico" id="UUsuarioEmail" required />
                            </div>
                            <div className="authButtonsRegister">
                                <button className="btn" onClick={this.actualizar}>actualizar</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }
    close() {
        document
            .getElementById("EditUser")
            .removeAttribute("open")
    }

}

export default EditUser