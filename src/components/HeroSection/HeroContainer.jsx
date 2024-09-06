import { useEffect, useState } from "react"

export default function HeroContainer(){
    const [currentImg, setCurrentImg] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(prevState => !prevState);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="heroContainer">
            {
                currentImg 
                    ?
                <div className="background-img firstImg"></div>
                    :
                <div className="background-img secondImg"></div>
            }
            <div className="heroContainer-content">
                <h1 className="mainHeaderText">Heading text here!</h1>
                <div className="heroContainer-text">
                    <p>
                        Cleaning Southern New England's Finest Homes and Businesses 
                    </p>
                </div>
            </div>
        </section>
    )    
};