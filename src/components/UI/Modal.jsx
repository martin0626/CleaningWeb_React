export default function ModalComponent({children, onClose}){
    return(
        <div>
            <div onClick={onClose} className="backDrop"></div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}