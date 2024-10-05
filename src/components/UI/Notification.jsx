export default function NotificationComponent({message, status}){
    return(
        <div className={ status === 'Success' ? "notification success" : "notification err"}> 
            <div className="notification-icon">
            
            <span class="material-icons">
            {
                status === "Success" ? "done_outline" : "close"
            }
                
            </span>
            </div>
            <div className="notification-text">
                <p>{message}</p>
            </div>
        </div>
    )
}

    