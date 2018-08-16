import React, { Component } from 'react';
import '../css/ModalComponents.css'
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png"
import line from "../Ico-img/line.png"
import firebase from 'firebase'

class LogInComponent extends Component {

    constructor() {
        super()
        this.state = {
            user: null
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user
            })
        })
    }
    handleLoginGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                document.getElementById("LogInModal").removeAttribute("open")
                console.log(`${result.user.email} ha iniciado sesion`)
                window.location.reload(true)

            })
            .catch(error => console.log(`Error ${error.message}`))
    }

    Login() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        if (email === "" || password === "") {
            alert("Debes de llenar todos los campos");
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(`Codigo: ${errorCode} Mensaje: ${errorMessage}`)
            });

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    alert("Bienvenido!");
                    document.getElementById('UserActivo').style.display = 'none';
                    
                    window.location.reload(true);
                } else {
                    alert("Presione ENTER o OK para continuar");
                    document.getElementById('UserActivo').style.display = 'true';
                }
            });
        }
    }

    render(){
        return(
            <dialog className="modal" id="LogInModal">
                <div className="container">
                    <div className="modalContentx">
                        <div className="modalHeader">
                            <div className="modalClose" >
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close}/>
                           </div>
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo"/>
                                <h2>Iniciar sesion</h2>
                            </div>
                        </div>
                        <div className="content">
                            <div className="authInputLogin">
                                <input type="email" placeholder="Correo electronico" id="email"/>
                                <input type="password" placeholder="Contraseña" id="pass" />
                            </div>
                            <div className="authButtonsLogin">
                                <button className="btn" onClick={this.Login}>Iniciar sesion</button>
                                <span className="or">
                                    <img src={line} alt="line"/>O<img src={line} alt="line" />
                                </span>
                                <button className="btn googlebtn" onClick={this.handleLoginGoogle}>Iniciar con google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }
    close(){
        document
        .getElementById("LogInModal")
        .removeAttribute("open")
    }

}
export default LogInComponent