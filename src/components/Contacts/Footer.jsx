import RateComponent from "./Rate";

export default function FooterSection({onOpenModal}){

    const handleCopy = (e)=>{
        const data = e.target.textContent

        navigator.clipboard.writeText(data).then(function() {
            alert('Copied to clipboard!');
        }).catch(function(error) {
            console.error('Error copying text: ', error);
        });
    }

    return(
        <section className="footer">
            <div className="footer-contacts">
                <h2>Contacts</h2>
                <div onClick={handleCopy} className="footer-singleContact">
                    <span className="material-icons">
                        phone
                    </span>
                    <a>0000432010</a>
                </div>
                <div onClick={handleCopy} className="footer-singleContact">
                    <span className="material-icons">
                        mail
                    </span>
                    <a>ivanov_martin2000@abv.bg</a>
                </div>
                <div onClick={handleCopy} className="footer-singleContact">
                    <span className="material-icons">
                        pin_drop
                    </span>
                    <a>Address</a>
                </div>
            </div>
            <div onClick={handleCopy} className="footer-social">
                <h2>Social</h2>
                <div className="footer-singleContact">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s" />
                    <a>Facebook</a>
                    
                </div>
                <div onClick={handleCopy} className="footer-singleContact">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <a>Wood.Shop_instagram</a>
                </div>
            </div>
            <div className="footer-opinion footer-social">
                <h2>Rate Us!</h2>
                <p onClick={()=>onOpenModal(<RateComponent/>)} className="mainBtn"><span>Rate</span></p>
            </div>
        </section>             
    ) 
}