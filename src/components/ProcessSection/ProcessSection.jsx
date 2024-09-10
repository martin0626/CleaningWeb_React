import { useEffect, useState } from "react";
import SingleProcess from "./SingleProcess";


const dummyProcesses = [
    {
        title: "Book",
        description: "Esse modi rem est placeat nihil pariatur, quidem nesciunt nemo.",
        img: 'https://wpamelia.com/wp-content/uploads/2018/06/man-coffee-cup-pen_klein.jpg',
        imgAlt: 'Image Description',
        icon: 'edit_calendar'
    },
    {
        title: "Clean",
        description: "Nobis, quas nesciunt cumque odio dolor sunt quisquam nam quidem.",
        img: 'https://supreme-cleaning.co.uk/wp-content/uploads/2012/11/Cropped-view-of-professional-cleaners-deep-cleaning-a-home-Depositphotos-355770670-XL.jpg',
        imgAlt: 'Image Description',
        icon: 'cleaning_services'
    },
    {
        title: "Relax",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eligendi! ",
        img: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/218781/218781_00_2x.jpg?20200930010445',
        imgAlt: 'Image Description',
        icon: 'chair'
    }

]


export default function ProcessComp(){
    const [currentActive, setCurrentActive] = useState(-1);

    useEffect(() => {
        let nextActive = (currentActive + 1) === dummyProcesses.length ? 0 : currentActive + 1;

        const interval = setInterval(() => {
            setCurrentActive(nextActive);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentActive]);

    

    return(
        <section className="process">
            <div className="process-main">
                <div className="process-header">
                    <h1 className="secondaryHeaderText">How it works</h1>
                </div>
                <div className="process-cards">
                    {dummyProcesses.map((p, i)=><SingleProcess process={p} isActive={i === currentActive}/>)}
                </div>
            </div>
        </section>
    )
}