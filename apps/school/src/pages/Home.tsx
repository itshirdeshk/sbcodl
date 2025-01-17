import IntroVideo from '../components/IntroVideo'
import Welcome from '../components/Welcome'
import { HomePageCrousel } from '../components/Crousel/HomePageCrousel'
import SchoolSection from '../components/schoolTypes/SchoolSection'
import InfoSection from '@/components/InfoSection/InfoSection'
import OurServices from '../components/OurServices'
import { InfiniteMovingCardsDemo } from '../components/MovingCards'
const Home = () => {
  return (
    <div className='flex bg-white flex-col items-center justify-center md:mt-[10vw] lg:mt-0 overflow-hidden'>
        {/* <Navbar/> */}
        <IntroVideo/>
        <Welcome/>
        <OurServices/>
        <InfiniteMovingCardsDemo/>
        <SchoolSection/>
        <HomePageCrousel/>
        <InfoSection/>
       

    </div>
  )
}

export default Home