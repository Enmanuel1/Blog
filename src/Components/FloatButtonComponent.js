import React, { Component } from 'react';
import '../css/FloatButtonComponent.css'
import createImage from '../Ico-img/add.png'
import downArrow from '../Ico-img/downArrow.png'
class FloatButtonComponent extends Component{

    render(){
        return(
            <div>
                <div className="FloatButtonContainer" onClick={this.openAddPostModal} id="FloatButtonContainer">
                    <img src={createImage} alt="create icon"/>
                </div>
                <div className="FloatDownButton">
                    <img src={downArrow} alt="create icon" />
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