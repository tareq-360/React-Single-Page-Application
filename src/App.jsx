
import { Suspense, use, useState } from "react"
import ASection from "./Component/AccountCreateSection/ASection"
import Cards from "./Component/CardSection/Cards"
import Tools from "./Component/DigitalTools/Tools"
import Hero from "./Component/HeroSection/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Pricing from "./Component/PricingSection/Pricing"
import Rating from "./Component/RatingSection/Rating"
import Explore from "./Component/ExploreSection/Explore"
import Footer from "./Component/FooterSection/Footer"
import Carts from "./Component/CartsSection/Carts"
import SelectedCarts from "./Component/SelectedCarts/SelectedCarts"
import { ToastContainer } from "react-toastify"

const cardDataFetch = fetch('/fetchData.json').then(res => res.json());

function App() {
  const [IsActive,setIsActive]=useState(true);

  const [selectedItems,setSelectedItems] =useState([]);

  // console.log(IsActive);
  const cardData = use(cardDataFetch);
  // console.log(cardData);
  return (
    <>
      <Navbar selectedItems={selectedItems}></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Tools IsActive={IsActive} setIsActive={setIsActive} selectedItems={selectedItems}></Tools>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span> }>
          <Cards 
          cardData={cardData} IsActive={IsActive} 
          selectedItems={selectedItems} setSelectedItems={setSelectedItems}>

          </Cards>
      </Suspense>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Carts IsActive={IsActive} selectedItems={selectedItems} setSelectedItems={setSelectedItems}></Carts>
          
      </Suspense>

      <ASection></ASection>
      
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Pricing cardData={cardData}></Pricing>
      </Suspense>

      <Explore></Explore>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
