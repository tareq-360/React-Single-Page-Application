
import { Suspense, use } from "react"
import ASection from "./Component/AccountCreateSection/ASection"
import Cards from "./Component/CardSection/Cards"
import Tools from "./Component/DigitalTools/Tools"
import Hero from "./Component/HeroSection/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Pricing from "./Component/PricingSection/Pricing"
import Rating from "./Component/RatingSection/Rating"
import Explore from "./Component/ExploreSection/Explore"
import Footer from "./Component/FooterSection/Footer"

const cardDataFetch = fetch('/fetchData.json').then(res => res.json());

function App() {
  const cardData = use(cardDataFetch);
  // console.log(cardData);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Tools></Tools>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span> }>
          <Cards cardData={cardData}></Cards>
      </Suspense>

      <ASection></ASection>
      <Pricing cardData={cardData}></Pricing>

      <Explore></Explore>
      <Footer></Footer>
    </>
  )
}

export default App
