import { useRef, useState } from "react"
import Booking from "./components/Booking/BookingSection"
import FooterSection from "./components/Contacts/Footer"
import HeroContainer from "./components/HeroSection/HeroContainer"
import Navigation from "./components/Navigation/Navigation"
import ProcessComp from "./components/ProcessSection/ProcessSection"
import ServicesContainer from "./components/Services/Services"
import ModalComponent from "./components/UI/Modal"
import ContactReminder from "./components/UI/Concact"

function App() {

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const bookingRef = useRef(null);


  const [isOpenModal, setIsOpenModal] = useState({content: undefined});

  const handleNavigation = (section)=>{
    const sectionMapper = {
      'home': homeRef.current,
      'services': servicesRef.current,
      'process': processRef.current,
      'book': bookingRef.current,
    }



    if(sectionMapper[section]){
      sectionMapper[section].scrollIntoView({ behavior: 'smooth' });
    };
  }

  const handleCloseModal = ()=>{
    setIsOpenModal(prevContent=>{
      return {...prevContent, content: undefined}
    });
  };

  const handleOpenModal = (content)=>{
    setIsOpenModal(prevContent=>{
      return {...prevContent, content: content}
    });
  };

  return (
    <>
      {
        isOpenModal.content && <ModalComponent children={isOpenModal.content} onClose={handleCloseModal}/>
      }
      <ContactReminder/>
      <Navigation onNavigate={handleNavigation}/>
      <HeroContainer ref={homeRef}/>
      <ServicesContainer ref={servicesRef} onRead={handleOpenModal}/>
      <ProcessComp ref={processRef}/>
      <Booking ref={bookingRef}/>
      <FooterSection onOpenModal={handleOpenModal}/>
    </>
  )
}

export default App
