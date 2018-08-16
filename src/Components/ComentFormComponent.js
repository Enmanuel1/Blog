import React, { Component } from 'react';

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
            
        <div></div>

        )
    }

    close() {
        document.getElementById("AddComentModal").removeAttribute("open");
    }

}

export default ComentFormComponent