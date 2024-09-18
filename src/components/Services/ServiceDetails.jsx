
export default function ServiceDetails({service}){

    return (
        <div className="serviceDetails">
            <h1 className="secondaryHeaderText ">{service.title}</h1>
            <p className="longText">{service.description}</p>
        </div>
    )    
};  