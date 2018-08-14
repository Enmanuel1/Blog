import React, { Component } from 'react';
import close from "../Ico-img/delete.png";
import logo from "../Images/Logo.png";
import firebase from 'firebase'
class ComentFormComponent extends Component  {
    
    constructor(){
        super()
        this.state = {
             coments: [],
             ref1: [],
             titulo: ""
        }
        this.PostComent = this.PostComent.bind(this);
    }

    componentDidMount(){

        let database = firebase.database()
        let posts = database.ref("posts")

        let arr = []
        posts.on("child_added", snap => {
            arr.push(snap.ref_.path.pieces_[1])
            this.setState({
                ref1: arr
            })
        })
           
             
        
            // _post.split(" ").join("_")
            

        this.setState({
            titulo: "ok"
        })
    }
    PostComent(){
        let database = firebase.database()
        
        console.log(this.state.titulo)
        let pru = database.ref(`posts/${this.state.titulo}`)
        pru.on("value",snap=>{
            console.log(snap.val())
        })
        
        
    }
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
                                <button className="btn addPostButton" id="crearComentario" onClick={this.PostComent} >
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