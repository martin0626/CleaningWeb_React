import { useContext, useState } from "react"
import { NotificationContext } from "../../App";

export default function ContactReminder(){
    const [isOpen, setIsOpen] = useState(false);
    const { setNotificationHandler } = useContext(NotificationContext);


    const onCopyHandler = (e)=>{
        const data = e.target.textContent;
        navigator.clipboard.writeText(data)
        setNotificationHandler(['You copy this contact!'], 'Success')
    }

    return(
        <div  className={isOpen ? "open contact" : "contact"}>
            <p onClick={()=>setIsOpen(!isOpen)} className="visible mainIcon-reminder">
                <span className="material-icons">
                    {isOpen ? "highlight_off" : "phone"}
                </span>
            </p>
            <div className={isOpen ? "" : "closed"}>
                {/* <div className="singleContact">
                    <span className="material-icons">
                        phone
                    </span>
                    <a>0000432010</a>

                    
                </div> */}

                <div onClick={onCopyHandler} className="singleContact">
                    <span className="material-icons">
                        phone
                    </span>
                    <a>0000432010</a>
                </div>
                <div onClick={onCopyHandler} className="singleContact">
                    <span className="material-icons">
                        mail
                    </span>
                    <a>ivanov_martin2000@abv.bg</a>
                </div>
                <div onClick={onCopyHandler} className="singleContact">
                    <span className="material-icons">
                        pin_drop
                    </span>
                    <a>Address</a>
                </div>
            </div>
        </div>
    )
}