import BookingForm from "./BookingForm";

export default function Booking(){
    return(
        <section className="booking">
            
            <div className="booking-content">
                <div className="bookingImg">
                    <img src="https://www.idesignarch.com/wp-content/uploads/Berlin-Mitte-Art-Loft_1.jpg" alt="" />
                </div>
                <BookingForm/>
            </div>
        </section>             
    )
}