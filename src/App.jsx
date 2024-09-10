import Booking from "./components/Booking/BookingSection"
import HeroContainer from "./components/HeroSection/HeroContainer"
import Navigation from "./components/Navigation/Navigation"
import ProcessComp from "./components/ProcessSection/ProcessSection"
import ServicesContainer from "./components/Services/Services"

function App() {

  return (
    <>
      <Navigation/>
      <HeroContainer/>
      <ServicesContainer/>
      <ProcessComp/>
      <Booking/>
    </>
  )
}

export default App
