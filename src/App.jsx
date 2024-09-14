import { useState } from "react"
import Booking from "./components/Booking/BookingSection"
import FooterSection from "./components/Contacts/Footer"
import HeroContainer from "./components/HeroSection/HeroContainer"
import Navigation from "./components/Navigation/Navigation"
import ProcessComp from "./components/ProcessSection/ProcessSection"
import ServicesContainer from "./components/Services/Services"
import ModalComponent from "./components/UI/Modal"

function App() {

  const [isOpenModal, setIsOpenModal] = useState({content: undefined});

  const handleCloseModal = ()=>{
    setIsOpenModal(prevContent=>{
      return {...prevContent, content: undefined}
    });
  };

  const handleOpenModal = (content)=>{
    setIsOpenModal(prevContent=>{
      return {...prevContent, content: content}
    });
  }


  return (
    <>
      {
        isOpenModal.content && <ModalComponent children={isOpenModal.content} onClose={handleCloseModal}/>
      }
      <Navigation/>
      <HeroContainer/>
      <ServicesContainer/>
      <ProcessComp/>
      <Booking/>
      <FooterSection onOpenModal={handleOpenModal}/>
    </>
  )
}

export default App
