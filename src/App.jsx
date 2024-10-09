import { createContext, useRef, useState } from "react"
import Booking from "./components/Booking/BookingSection"
import FooterSection from "./components/Contacts/Footer"
import HeroContainer from "./components/HeroSection/HeroContainer"
import Navigation from "./components/Navigation/Navigation"
import ProcessComp from "./components/ProcessSection/ProcessSection"
import ServicesContainer from "./components/Services/Services"
import ModalComponent from "./components/UI/Modal"
import ContactReminder from "./components/UI/Concact"
import AboutUs from "./components/About/AboutUs"
import NotificationComponent from "./components/UI/Notification"



export const NotificationContext = createContext();


function App() {

  //Notifications Context Controller
  const [notification, setNotification] = useState({messages: undefined, status: undefined});
  const timeoutRef = useRef(null);


  const setNotificationHandler = (messages, status, time=1000)=>{
    

    // Clear the previous timeout if it exists
    setNotification({messages, status});

    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }


    // Set a new timeout to clear the value after 5 seconds
    timeoutRef.current = setTimeout(() => {
      clearNotification(); // Set to empty or default value after 5 seconds
    }, time);
  }


  const clearNotification = ()=>{
    setNotification({messages: undefined, status: undefined});
  }

  //Navigation Refernces
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const bookingRef = useRef(null);

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



  //Modal Window Controllers
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
  };


  return (
    <>
        
        {
          // Checking if Notificatio is Active
          notification.messages && <NotificationComponent messages={notification.messages} status={notification.status}/>
        }
        
      <NotificationContext.Provider value={{setNotificationHandler}}>
        {
          // Checking if Modal is Open
          isOpenModal.content && <ModalComponent children={isOpenModal.content} onClose={handleCloseModal}/>
        }

        <ContactReminder/>
        <Navigation onNavigate={handleNavigation}/>
        <HeroContainer ref={homeRef}/>
        <ServicesContainer ref={servicesRef} onRead={handleOpenModal}/>
        <AboutUs/>
        <ProcessComp ref={processRef}/>
        <Booking ref={bookingRef}/>
        <FooterSection onOpenModal={handleOpenModal}/>
      </NotificationContext.Provider>
    </>
  )
}

export default App
