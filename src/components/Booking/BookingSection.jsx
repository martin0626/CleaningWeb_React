import React from "react";
import BookingForm from "./BookingForm";


const Booking = React.forwardRef((props, ref)=>{
    return(
        <section ref={ref} className="booking">
            
            <div className="booking-content">
                <div className="bookingImg">
                    <img src="https://www.idesignarch.com/wp-content/uploads/Berlin-Mitte-Art-Loft_1.jpg" alt="" />
                </div>
                <BookingForm/>
            </div>
        </section>             
    )
})


export default Booking;