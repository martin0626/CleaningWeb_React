export default function FooterSection(){
    return(
        <section className="footer">
            <div className="footer-contacts">
                <h3>Contacts</h3>
                <div className="footer-singleContact">
                    <span className="material-icons">
                        phone
                    </span>
                    <p>Phone</p>
                </div>
                <div className="footer-singleContact">
                    <span className="material-icons">
                        mail
                    </span>
                    <p>Email</p>
                </div>
                <div className="footer-singleContact">
                    <span className="material-icons">
                        pin_drop
                    </span>
                    <p>Address</p>
                </div>
            </div>
            <div className="footer-social">
                <h3>Social</h3>
                <div className="footer-singleContact">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/986/999/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" />
                    <p>Facebook</p>
                    
                </div>
                <div className="footer-singleContact">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <p>Wood.Shop_instagram</p>
                </div>
            </div>
            <div className="footer-opinon">
                <p className="mainBtn"><span>Rate Us</span></p>
            </div>
        </section>             
    )
}