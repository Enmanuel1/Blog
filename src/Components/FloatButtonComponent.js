import React, { Component } from 'react';
import '../css/FloatButtonComponent.css'
import createImage from '../Ico-img/add.png'

class FloatButtonComponent extends Component{

    render(){
        return(
            <div>
                <div className="FloatButtonContainer" onClick={this.openAddPostModal} id="FloatButtonContainer">
                    <img src={createImage} alt="create icon"/>
                </div>

            </div>
        )
    }
    openAddPostModal() {
        let modal = document.getElementById("AddPostModal");
        modal.setAttribute("open", true)
    }

}

export default FloatButtonComponent