import emailjs  from "@emailjs/browser";
import { useRef, useState } from "react"

export default function BookingForm(){
    const [selectedInput, setSelectedInput] = useState('');
    const formRef = useRef();
    const SERVICEid = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATEid = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLICKKEY = import.meta.env.VITE_PUBLIC_KEY;

    debugger

    const handleFocus = (e)=>{
        setSelectedInput(e.target.getAttribute('id'))
    }

    const handleBlur = ()=>{
        setSelectedInput('')
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        emailjs
        .sendForm(SERVICEid, TEMPLATEid, formRef.current, {
          publicKey: PUBLICKKEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }



    return(
        <form ref={formRef} className="booking-form" onSubmit={handleSubmit}>
            <h1>Send Us Email</h1>
            <div className="inputEl">
                <label className={selectedInput === 'user_name' ? 'selectedLabel' : ''} htmlFor="user_name">Full Name:</label>
                <input 
                    type="text" 
                    id="user_name" 
                    name="user_name" 
                    required
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className="inputEl">
                <label className={selectedInput === 'user_email' ? 'selectedLabel' : ''} htmlFor="user_email">Email:</label>
                <input 
                    type="email" 
                    id="user_email" 
                    name="user_email" 
                    required 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className="inputEl">
                <label className={selectedInput === 'phone' ? 'selectedLabel' : ''} htmlFor="phone">Phone Number:</label>
                <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    required 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className="inputEl">
                <label className={selectedInput === 'comments' ? 'selectedLabel' : ''} htmlFor="comments">Additional Comments:</label>
                <textarea 
                    id="comments" 
                    name="comments" 
                    rows="4" 
                    cols="50" 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                ></textarea>
            </div>
            <button className="mainBtn" ><span>Submit</span></button>
      </form>
    )
}