import React from "react";

export default function ModalComponent({children, onClose}){
    return(
        <div> 
            <div onClick={onClose} className="backDrop"></div>

            <div className="modal-content ">
                <p onClick={()=>{onClose()}} className="closBtn">
                    <span className="material-icons">
                        close
                    </span>
                </p>
                {React.cloneElement(children, {onClose})}
            </div>
        </div>
    )
}