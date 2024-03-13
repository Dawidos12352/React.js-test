import React, { Component } from "react";
import css from './Modal.module.css';



export class Modal extends Component {

    handleClickOnOverlay = (e) => {
        if(e.target.className.includes("overlay")){
            this.props.closeModal()
        }
    }

    render(){

        const {tags, largeImageURL} = this.props
        return(
            <div className={css.Overlay} onClick={this.handleClickOnOverlay}>
                <div className={css.Modal}>
                    <img alt={tags} src={largeImageURL} />
                </div>
            </div>
            
        )
    }
}