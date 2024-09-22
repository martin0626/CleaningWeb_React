export default function SingleProcess({process, isActive}){
    return(
        <div className={isActive ? "singleProcess currentActive scrollEffectSurfaced" : "singleProcess scrollEffectSurfaced"}>
            <div className="singleProcess-img">
                <img src={process.img} alt={process.imgAlt} />
                <p className='iconProcess'>
                    <span className="material-icons">
                        {process.icon}
                    </span>
                </p>
            </div>
            <div className="singleProcess-text">
                <h3>{process.title}</h3>
                <p>{process.description}</p>
            </div>
            
        </div>             
    )
}