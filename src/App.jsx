import ASection from "./Component/AccountCreateSection/ASection"
import Cards from "./Component/CardSection/Cards"
import Tools from "./Component/DigitalTools/Tools"
import Hero from "./Component/HeroSection/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Rating from "./Component/RatingSection/Rating"

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Tools></Tools>
      <Cards></Cards>
      <ASection></ASection>
    </>
  )
}

export default App
