import React, { Component } from 'react';
import logo from '../Images/Logo.png'
import $ from 'jquery'
import '../css/HeaderComponent.css'
import firebase from 'firebase'
import userImage from '../Ico-img/user2.png'
import search from '../Ico-img/search.png'
import {Link} from 'react-router-dom'
class HeaderComponent extends Component {

    constructor(){
        super()
        this.state = {
            userDropDown : true
        }
        this.displayUser = this.displayUser.bind(this)
    }

    refresh() {
        window.location.reload(true);
    }

    componentDidMount(){
        $(document).ready(function () {
            var flag = false;
            var flag2 = false;
            var scroll;
            $(window).scroll(function () {
                scroll = $(window).scrollTop();
                if (scroll > 569) {
                    if (!flag) {
                        $("nav").css({ "transition": " 0.2s", "background": "rgba(10,10,10,.9)"});
                        $(".contenedorUserHeader").css({"transition":"0.2s","background":"rgba(10,10,10,.9)"});
   
                        $(".FloatDownButton").css({"display": "flex"});
                        flag = true;
                    }
                } else {
                    if (flag) {
                        $("nav").css({ "background-color": "transparent", "opacity": "1" });
                        $(".contenedorUserHeader").css({ "transition": "0.2s", "background": "rgba(10,10,10,.1)"});

                        $(".FloatDownButton").css({"display":"none"});
                        flag = false;
                    }
                }

                if (scroll > 100) {
                    if (!flag2) {
                        $(".FloatButtonContainer").css({ "transform": "translate(0, 0)" });
                        flag2 = true;
                    }
                } else {
                    if (flag2) {
                        $(".FloatButtonContainer").css({ "transform": "translate(500px, 0)" });
                        flag2 = false;
                    }
                }


            });
        });
    }
    Desactivarusuario() {
        firebase.auth().signOut().then(() => {
            alert("Esta cerrando sesion...");
            window.location.reload(true);
            document.getElementById('btnlogin').style.display = 'true';
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
            alert("Vuelva Pronto!");
        });
    }

    render(){
        let useremail;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                document.getElementById('logout').style.display = 'true';
                document.getElementById("FloatButtonContainer").style.display='true';
                document.getElementById('registrarse').style.display = 'none';
                document.getElementById('inicarsesion').style.display = 'none';

                useremail = user.email;
                document.getElementById('UserActivo').innerHTML = useremail + " ";
            } else {
                document.getElementById('logout').style.display = 'none';
                document.getElementById('UserActivo').style.display = "none";
                document.getElementById("FloatButtonContainer").style.display = 'none';
            }

        });
        return(
            <nav className="menu">
                <div className="Titulo-menu">
                    <img src={logo} className="logo" alt="logo"/>
                    <span>Punto y coma</span>
                </div>

                <div className="enlaces-menu-container">
                    <div className="enlaces-menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/post">Post</Link>
                        <Link to="/offTopic">Off topic</Link>
                        <Link to="/nosotros">Nostros</Link>
                        <div className="contenedorIcono" onClick={this.displayUser}>
                            <img src={userImage} alt="userImage" id="userImage"  />
                        </div>
                        <div className="contenedorUserHeader ocultar" id="cont">
                            <a onClick={this.openLoginModal} id="inicarsesion">Iniciar sesion</a>
                            <a onClick={this.openSignUpModal} id="registrarse">Registrarse</a>
                            <div onClick={this.openEditModal} className="userActivoContainer" id="UserActivo"></div>
                            <a onClick={this.Desactivarusuario} id="logout">Logout</a>
                        </div>  
                            <div className="contenedorIcono" onClick={this.openSearchModal}>
                            <img src={search} alt="SearchImage" id="SearchImage"  />
                        </div>              
                    </div>
                </div>
            </nav>
        )
    }
    displayUser(){
        let cnt = document.getElementById("cont")
            if (this.state.userDropDown) {
                this.setState({
                    userDropDown: false
                })
              cnt.classList.add("ocultar");
            } else {
                this.setState({
                    userDropDown: true
                })
              cnt.classList.remove("ocultar");
            }
    }
    openEditModal(){
        let modal = document.getElementById("EditUser");
        modal.setAttribute("open", true)
    }
    openSearchModal(){
        let modal = document.getElementById("SearchModal");
        modal.setAttribute("open",true)
    }
    openLoginModal() {
        let modal = document.getElementById("LogInModal");
        modal.setAttribute("open", true)
    }
    openSignUpModal(){
        let modal = document.getElementById("SignUpModal");
        modal.setAttribute("open", true)
    }
}

export default HeaderComponent