import emailjs  from "@emailjs/browser";
import { useContext, useRef, useState } from "react"
import { NotificationContext } from "../../App";



const checkName = (string)=>{

    const [firstName, lastName] = string.trim().split(' ');


    if(!firstName || !lastName){
        return `Please write your full name!`
    }

    if(firstName.length < 2 || lastName.length < 2){
        return `Length must be at least 2 symbols!`
    }

    return false;
};


function isValidBgPhoneNumber(phoneNumber) {
    let cleaned = phoneNumber.replace(/[^\d+]/g, '');

    const bulgarianPhoneRegex = /^(?:\+359|00359|0)(87|88|89|2\d{1})\d{7}$/;

    if(bulgarianPhoneRegex.test(cleaned)){
        return false;
    }else{
        return "Please write valid phone number!"
    }
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(emailRegex.test(email)){
        return false;
    }else{
        return "Please write valid Email Address!"
    }
};



const emailSender = (formElmemnt)=>{
    const SERVICEid = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATEid = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLICKKEY = import.meta.env.VITE_PUBLIC_KEY;


    emailjs
        .sendForm(SERVICEid, TEMPLATEid, formElmemnt, {
          publicKey: PUBLICKKEY,
        })
        .then(
          () => {
            return true;
          },
          (error) => {
            return false;
          },
        );

}




export default function BookingForm(){
    const { setNotificationHandler } = useContext(NotificationContext);
    const [selectedInput, setSelectedInput] = useState('');
    const [errors, setErrors] = useState({
        email: false,
        name: false,
        phone: false,
        additionalComments: false
    })

    const formRef = useRef();

    

    const handleFocus = (e)=>{
        setSelectedInput(e.target.getAttribute('id'))
    };

    const handleBlur = ()=>{
        setSelectedInput('')
    };

    const errorHandlers = (email, name, phone)=>{

        
        const emailErr = isValidEmail(email);
        const nameErr = checkName(name);
        const phoneErr = isValidBgPhoneNumber(phone);


        const errors = {
            email: emailErr,
            name:nameErr,
            phone: phoneErr,
        }
        return errors;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const fd = new FormData(formRef.current);
        const data = Object.fromEntries(fd.entries());

        const errorsFound = errorHandlers(data.user_email, data.user_name, data.phone)
        
        
        if(Object.values(errorsFound).some(e=> e != false)){
            setErrors(errorsFound);
            return;
        };

        setErrors(errorsFound);
        const emailSended = emailSender(formRef.current);
        

        if(!emailSended){
            setNotificationHandler(['Thank you!', 'We are going to contact you as soon as possible.'], 'Success', 3000);
            formRef.current.reset();
        }else{
            setNotificationHandler(['Something went wrong!', 'Please call us through mobile Phone.'], 'Error', 3000);
            formRef.current.reset();
        }
    }



    return(
        <form ref={formRef} className="booking-form" onSubmit={handleSubmit}>
            <h1>Send Us Email</h1>
            <div className="inputEl">
                {errors.name && <p>Error: {errors.name}</p>}
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
                {errors.email && <p>Error: {errors.email}</p>}  
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
                {errors.phone && <p>Error: {errors.phone}</p>}
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