import React, { Component } from 'react'
import '../css/ModalComponents.css'
import close from '../Ico-img/close.png'
import search from '../Ico-img/search2.png'
class SearchComponent extends Component {


    render(){
        return(
            <dialog className="modal" id="SearchModal" >
                <div className="container">
                    <div className="searchModalContianer">
                        <div className="modalClose" >
                            <img src={close} className="closeButton closeSearcher" alt="close" id="close" onClick={this.close} />
                        </div>
                        <div className="formModal">
                            <input type="search" placeholder="¿Qué estás buscando?"/>
                            <img src={search} alt="searchImg"/>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }

    close(){
        document.getElementById("SearchModal").removeAttribute("open");
    }
}

export default SearchComponent