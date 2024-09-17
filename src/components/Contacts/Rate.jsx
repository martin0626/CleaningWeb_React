import { useState } from "react"

export default function RateComponent({onClose}){
    const [stars, setStars ] = useState(0);

    const rateHandler = (n)=>{
        if(n == stars){
            setStars(0);
        }else{
            setStars(n);
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
            <p className="mainBtn"><span>Submit</span></p>
        </div>
    )
}