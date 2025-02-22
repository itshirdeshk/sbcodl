import { Button } from '@repo/ui/button'
// import { ModeToggle } from '@repo/ui/mode-toggle'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

const FixedNavbar = () => {
  return (
    <header className=" bg-white md:fixed md:top-0 md:left-0 md:right-0  z-50 ">
    <div className="w-full px-[3vw] py-2">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <Link to="/">
        <div className="flex flex-col lg:flex-row items-center text-2xl font-bold"> 
          <img src={logo} alt="Logo" className="h-16 w-20 mr-2" />
        </div>
        
        </Link>
        <div className="text-2xl font-bold text-secondary">
          SOLANKI BROTHER BOARDING SCHOOL
        </div>
        <div className="flex justify-center gap-2 sm:gap-4">
     
        <Link to="/student-login">
            <Button variant="secondary" className="text-sm">
              Student Login
            </Button>
          </Link>
          <Link to="/institute-login">
            <Button variant="secondary" className="text-sm">
              Institute Login
            </Button>
          </Link>
          {/* <ModeToggle /> */}
       
         
        </div>
      </div>
    </div>
  </header>

  )
}

export default FixedNavbar