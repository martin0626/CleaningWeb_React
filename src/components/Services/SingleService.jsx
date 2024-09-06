export default function SingleService({service}){
    //Ideas From Here: https://www.thecleaningpeopleri.com/#1497525250156-d1f09a4f-37f2
    return (
        <div key={service.id} className="singleService">
            <div className="singleService-img">
                <img src={service.img} alt={service.imgAlt} />
            </div>
            <div className="singleService-text">
                <h1 >{service.title}</h1>
                <p>{service.descriptionShort}</p>
            </div>
            <div className="singleService-action">
                <button>Learn More</button>
            </div>
        </div>
    )    
};  