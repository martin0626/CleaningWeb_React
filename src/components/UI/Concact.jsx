import { useState } from "react"
import { handleCopy } from "../../helpers";

export default function ContactReminder(){
    const [isOpen, setIsOpen] = useState(false);

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

                <div onClick={handleCopy} className="singleContact">
                    <span className="material-icons">
                        phone
                    </span>
                    <a>0000432010</a>
                </div>
                <div onClick={handleCopy} className="singleContact">
                    <span className="material-icons">
                        mail
                    </span>
                    <a>ivanov_martin2000@abv.bg</a>
                </div>
                <div onClick={handleCopy} className="singleContact">
                    <span className="material-icons">
                        pin_drop
                    </span>
                    <a>Address</a>
                </div>
            </div>
        </div>
    )
}