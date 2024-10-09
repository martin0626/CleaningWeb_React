export default function NotificationComponent({messages, status}){
    console.log(messages);
    

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
                {messages.map(m=>
                    <p>{m}</p>
                )}
            </div>
        </div>
    )
}

    