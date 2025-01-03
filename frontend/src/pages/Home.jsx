import BestSellar from "../components/BestSellar"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLatterBox from "../components/NewsLatterBox"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSellar/>
        <OurPolicy/>
        <NewsLatterBox/>  
    </div>
  )
}

export default Home
