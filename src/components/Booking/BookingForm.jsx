export default function BookingForm(){
    return(
        <form className="booking-form">
            <label htmlFor="name">Full Name:</label><br />
            <input 
                type="text" 
                id="name" 
                name="name" 
                required 
            />
            <label htmlFor="email">Email:</label><br />
            <input 
                type="email" 
                id="email" 
                name="email" 
                required />
            <label htmlFor="phone">Phone Number:</label><br />
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required />
            
            <label htmlFor="comments">Additional Comments:</label><br />
            <textarea 
                id="comments" 
                name="comments" 
                rows="4" 
                cols="50" 
                placeholder="Any special instructions?"
            ></textarea>

            <button type="submit">Submit Booking</button>
      </form>
    )
}