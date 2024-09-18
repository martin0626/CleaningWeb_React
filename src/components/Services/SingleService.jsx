import { useState } from "react";
import ServiceDetails from "./ServiceDetails";

export default function SingleService({service, onRead}){

    const [ hoverEl, setHoverEl ] = useState(false);


    const handleHover = ()=>{
        setHoverEl(true);
    };

    const handleRemoveHover = ()=>{
        setHoverEl(false);
    };


    //Ideas From Here: https://www.thecleaningpeopleri.com/#1497525250156-d1f09a4f-37f2
    return (
        <div onMouseOver={handleHover} onMouseOut={handleRemoveHover} key={service.id} className="singleService">
            <div className="singleService-img">
                <img src={service.img} alt={service.imgAlt} />
            </div>
            <div className="singleService-text">
                <h1 >{service.title}</h1>
                <p className="longText">{service.descriptionShort}</p>
            </div>
            <p onClick={()=>onRead(<ServiceDetails service={service}/>)} className={hoverEl ? 'singleAction singleActionVisible mainBtn' : 'singleAction mainBtn'}>
                <span>Learn More</span>
            </p>
        </div>
    )    
};  