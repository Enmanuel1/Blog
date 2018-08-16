import React, { Component } from 'react';
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png";
import "../css/ModalComponents.css";
import firebase from 'firebase'

class SignUpComponent extends Component{

    iniciarSesion() {
        let email = document.getElementById('emailUsuario').value;
        let password = document.getElementById('passUsuario').value;
        let nombre = document.getElementById('nombreUsuario').value;
        let apellido = document.getElementById('apellidoUsuario').value;

        if (email === "" || password === "" || nombre === "" || apellido === "" ) {
            alert("Debes de llenar todos los campos");
        }else if ( password.length < 6){
            alert("La contraseña debe de tener mas de 6 caracteres");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            }).catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // ...
                console.log(`Codigo: ${errorCode} Mensaje: ${errorMessage}`)
            });


            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    window.location.reload(true);
                    document.getElementById('UserActivo').style.display = 'none';
                } else {
                    document.getElementById('UserActivo').style.display = 'true';
                }
            });
        }
    }

    render(){
        return(
            <dialog className="modal" id="SignUpModal">
                <div className="container">
                    <div className="modalContentx">
                        <div className="modalHeader">
                            <div className="modalClose" >
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />

                            </div>
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo" />
                                <h2>Registrarse</h2>
                            </div>


                        </div>
                        <div className="content">
                            <div className="authInputRegister">
                                <input type="text" placeholder="Nombre" id="nombreUsuario" required/>
                                <input type="text" placeholder="Apellido" id="apellidoUsuario" required/>
                                <input type="email" placeholder="Correo electronico" id="emailUsuario" required />
                                <input type="password" placeholder="Contraseña" id="passUsuario" required />
                            </div>
                            <div className="authButtonsRegister">
                                <button className="btn" onClick={this.iniciarSesion}>Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }

    close() {
        document
        .getElementById("SignUpModal")
        .removeAttribute("open")
    }

}
export default SignUpComponent