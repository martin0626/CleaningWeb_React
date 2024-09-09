import { useState } from "react"
import SingleService from "./SingleService"

const servicesDummy = [
    {
        id: 1,
        title: "Basic",
        descriptionShort:'Our basic services leave you with a fresh and tidy home. We offer these services on a weekly, bi-weekly or monthly schedule. Before starting a recurring cleaning service, we recommend a deep clean that will get your home spotless from top to bottom.',
        description: "Our basic cleaning service includes dusting of light fixtures, lamps, ceiling fans, baseboards, doors & trim, furnishings, pictures & home decor, windowsills and blinds. We will perform light tidying services, remove cobwebs, empty trash, vacuum and mop floors, and apply our signature touches throughout your entire home. In the kitchen, we will wipe down all appliances, clean and sanitize countertops, spot clean cabinets, wash stove top, clean inside and outside of the microwave and wash & sanitize sinks and faucets. In the bathrooms we scrub the toilets, clean & sanitize showers and tubs, clean vanity counters, wash mirrors & glass, spot clean cabinets and clean and sanitize sinks and faucets. In the bedrooms we vacuum closets and under beds, make the beds, dust TV or electronics and clean mirrors and glass.",
        img: 'https://img.freepik.com/premium-photo/modern-house-interior-design-minimal-clean-luxury-house-inside_844215-627.jpg',
        imgAlt: 'Cleaned Living room',
        category: 'home',
    },
    {
        id: 2,
        title: "Enhanced",
        descriptionShort: 'For our clients who want to go beyond our basic cleaning package to a near spotless home, we offer an enhanced cleaning service. This service includes everything in our basic cleaning package plus wet washing of many additional surfaces.',
        description: "For our clients who want to go beyond our basic cleaning package to a near spotless home, we offer an enhanced cleaning service. This service includes everything in our basic cleaning service plus the following enhanced services. We will wet wash accessible baseboards & trim, polish all furniture, wipe all home decor, wash all wall plates, switches and door knobs, wipe down ceiling fans, wash exterior cabinets in kitchens and bathrooms, clean exterior of toilets and change bed linens in the master bedroom. We will change linens in additional bedrooms for a small add-on fee, upon request.",
        img: 'https://www.hoover-home.com/adapt-image/3160356/Come%20_pulire_strofinacci_730x590x?w=730&h=590&q=100&fm=jpg&version=1.0&t=1669893862697',
        imgAlt: 'Cleaned Living room',
        category: 'home',
    },
    {
        id: 3,
        title: "Deep Cleaning",
        descriptionShort: 'Our Deep Cleaning Services are designed for homes that need a one time deep cleaning and for spring and fall cleaning. Our deep cleaning services will leave your home spotless from top to bottom.',
        description: "Our Deep Cleaning Services are designed for homes that need a one time deep cleaning and for spring and fall cleaning. Our deep cleaning services will leave your home spotless from top to bottom. This service includes everything in our enhanced cleaning package plus wet washing walls, stair risers, washing windows inside and out, cleaning the exterior of washer and dryers, cleaning the top of the refrigerator, washing light fixtures (left in place, not removed) and cleaning the inside of oven(s) and the refrigerator.",
        img: 'https://ecocleanellies.com/wp-content/uploads/2022/10/Group-of-friends-as-a-professi.jpg',
        imgAlt: 'Cleaned Living room',
        category: 'home',
    },
    {
        id: 4,
        title: "One-Time/Add-On",
        descriptionShort: 'Our add-on’s are perfect for periodic maintenance in between deep cleanings. For a small additional fee, we can add one or more additional services to our basic or enhanced cleaning packages.Add-ons include cleaning exterior cabinets, inside ovens, refrigerator interiors and home organization services.',
        description: "Our add-on’s are perfect for periodic maintenance in between deep cleanings. For a small additional fee, we can add one or more of the following add-ons to your regular cleaning services. We can change bed linens in multiple bedrooms, clean inside of the oven or refrigerator, wash inside and outside of trash cans, clean the exterior of the washer and dryer, clean the top of the refrigerator, wet wash accessible baseboards, doors & trim, wash staircase risers, vacuum basement, sweep garage and handle your special requests. We also offer home organization services including cleaning and organizing cabinets, drawers, pantries, garages and basements. We offer pre and post holiday or party cleaning services as well as move in/move out cleaning, and post construction cleaning, after a  remodel.", 
        img: 'https://www.electrolux.com.my/contentassets/99f824a6dad14ccbb08580f812e558d0/4-how-to-clean-your-refrigerator-the-right-way.jpg',
        imgAlt: 'Cleaned Living room',
        category: 'home',
    },
]



export default function ServicesContainer(){
    const [services, setServices] = useState(servicesDummy);
    

    return (
        <section className="services">
            <div className="services-header">
                <h1 className="secondaryHeaderText">Featured Services</h1>
                <p>Home Cleaning</p>
            </div>
            <div className="services-main">
                {
                    services.length > 0 
                        ?
                        services.map(s=> <SingleService service={s}/>)
                        :
                    <h1 className="secondaryHeaderText">No Feautured Services at this point...</h1>
            
                }
            </div>
            

        </section>
    )    
};