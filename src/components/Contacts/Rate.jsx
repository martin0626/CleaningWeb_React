import { useContext, useState } from "react"
import { NotificationContext } from "../../App";

export default function RateComponent({onClose}){
    const [stars, setStars ] = useState(0);
    const { setNotificationHandler } = useContext(NotificationContext);

    const rateHandler = (n)=>{
        if(n == stars){
            setStars(0);
        }else{
            setStars(n);
        }
    };

    const submitHandler = ()=>{
        if(stars > 0){
            setNotificationHandler('Successfully gave your Rate!', 'Success', 3000);
            onClose()
        }else{
            setNotificationHandler('Please choose Rating', 'Error', 1500)
        }
    }

    

    return(
        <div className="rate">
            
            <div className="rate-main">
                <h2>Your opinion is important for Us!</h2>
                <div className="rate-stars">
                    {
                        '5,4,3,2,1'.split(',').map(s=>{
                            return <p onClick={()=>rateHandler(Number(s))} className={stars >= Number(s) ? `star-${s} star colored` : `star-${s} star`}></p>
                        })
                    }
                </div>
                <div className="rate-comment">
                    <textarea rows='6' placeholder="Your opinion here...">
                    </textarea>
                </div>
            </div>
            <p className="mainBtn" onClick={submitHandler}><span>Submit</span></p>
        </div>
    )
}