import { useState } from "react"
import { deprecations } from "sass"
import SingleService from "./SingleService"

const servicesDummy = [
    {
        id: 1,
        title: "Basic",
        descriptionShort:'Our basic services leave you with a fresh and tidy home. We offer these services on a weekly, bi-weekly or monthly schedule. Before starting a recurring cleaning service, we recommend a deep clean that will get your home spotless from top to bottom.',
        description: "Our basic cleaning service includes dusting of light fixtures, lamps, ceiling fans, baseboards, doors & trim, furnishings, pictures & home decor, windowsills and blinds. We will perform light tidying services, remove cobwebs, empty trash, vacuum and mop floors, and apply our signature touches throughout your entire home. In the kitchen, we will wipe down all appliances, clean and sanitize countertops, spot clean cabinets, wash stove top, clean inside and outside of the microwave and wash & sanitize sinks and faucets. In the bathrooms we scrub the toilets, clean & sanitize showers and tubs, clean vanity counters, wash mirrors & glass, spot clean cabinets and clean and sanitize sinks and faucets. In the bedrooms we vacuum closets and under beds, make the beds, dust TV or electronics and clean mirrors and glass.",
        img: 'https://img.freepik.com/premium-photo/modern-house-interior-design-minimal-clean-luxury-house-inside_844215-627.jpg',
        imgAlt: 'Cleaned Living room'
    },
    {
        id: 1,
        title: "Enhanced",
        descriptionShort: 'For our clients who want to go beyond our basic cleaning package to a near spotless home, we offer an enhanced cleaning service. This service includes everything in our basic cleaning package plus wet washing of many additional surfaces.',
        description: "For our clients who want to go beyond our basic cleaning package to a near spotless home, we offer an enhanced cleaning service. This service includes everything in our basic cleaning service plus the following enhanced services. We will wet wash accessible baseboards & trim, polish all furniture, wipe all home decor, wash all wall plates, switches and door knobs, wipe down ceiling fans, wash exterior cabinets in kitchens and bathrooms, clean exterior of toilets and change bed linens in the master bedroom. We will change linens in additional bedrooms for a small add-on fee, upon request.",
        img: 'https://www.hoover-home.com/adapt-image/3160356/Come%20_pulire_strofinacci_730x590x?w=730&h=590&q=100&fm=jpg&version=1.0&t=1669893862697',
        imgAlt: 'Cleaned Living room'
    }
]



export default function ServicesContainer(){
    const [services, setServices] = useState(servicesDummy)


    return (
        <section className="services">
            <div className="services-header">
                <h1 className="secondaryHeaderText">Featured Services</h1>
                <p>Home Cleaning</p>
            </div>
            <div className="services-main">
                {
                    servicesDummy.length > 0 
                        ?
                    servicesDummy.map(s=> <SingleService service={s}/>)
                        :
                    <h1 className="secondaryHeaderText">No Feautured Services at this point...</h1>
            
                }
            </div>

        </section>
    )    
};