import { useState } from "react"

export default function BookingForm(){
    const [selectedInput, setSelectedInput] = useState('');

    const handleFocus = (e)=>{
        setSelectedInput(e.target.getAttribute('id'))
    }

    const handleBlur = ()=>{
        setSelectedInput('')
    }

    return(
        <form className="booking-form">
            <h1>Send Us Email</h1>
            <div className="inputEl">
                <label className={selectedInput === 'name' ? 'selectedLabel' : ''} htmlFor="name">Full Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className="inputEl">
                <label className={selectedInput === 'email' ? 'selectedLabel' : ''} htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className="inputEl">
                <label className={selectedInput === 'phone' ? 'selectedLabel' : ''} htmlFor="phone">Phone Number:</label>
                <input 
                    type="tel" 
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
            <p className="mainBtn"><span>Submit</span></p>
      </form>
    )
}