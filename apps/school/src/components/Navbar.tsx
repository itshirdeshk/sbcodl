import * as React from "react"
import { Link } from "react-router-dom"
import {  Menu, ChevronDown } from "lucide-react"
import { Button } from "@repo/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@repo/ui/NavigationsMenu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/collapsible"
import { cn } from "@/lib/utils"
// import { ModeToggle } from "@repo/ui/mode-toggle"
const aboutDropdownItems = [
  {
    title: "Our History",
    href: "/about/history",
    description: "Learn about our institution's rich history and heritage.",
  },
  {
    title: "Vision & Mission",
    href: "/about/vision",
    description: "Discover our goals and what drives us forward.",
  },
  {
    title: "Leadership",
    href: "/about/leadership",
    description: "Meet our experienced leadership team.",
  },
  {
    title: "Infrastructure",
    href: "/about/infrastructure",
    description: "Explore our world-class facilities.",
  },
]

const programDropdownItems = [
  {
    title: "Engineering",
    href: "/programs/engineering",
    description: "Various engineering disciplines and courses.",
  },
  {
    title: "Management",
    href: "/programs/management",
    description: "Business and management programs.",
  },
  {
    title: "Science",
    href: "/programs/science",
    description: "Pure and applied science courses.",
  },
  {
    title: "Arts",
    href: "/programs/arts",
    description: "Liberal arts and humanities.",
  },
  {
    title: "Medicine",
    href: "/programs/medicine",
    description: "Medical and healthcare programs.",
  },
  {
    title: "Law",
    href: "/programs/law",
    description: "Legal studies and courses.",
  },
  {
    title: "Research",
    href: "/programs/research",
    description: "Research opportunities and programs.",
  },
]

const accreditedInstitutes = [
  {
    title: "Partner Universities",
    href: "/institutes/partners",
    description: "Our network of partner institutions.",
  },
  {
    title: "Affiliated Colleges",
    href: "/institutes/affiliated",
    description: "Colleges affiliated with our institution.",
  },
  {
    title: "Research Centers",
    href: "/institutes/research",
    description: "Specialized research institutions.",
  },
  {
    title: "Training Centers",
    href: "/institutes/training",
    description: "Professional development centers.",
  },
]

const admissionItems = [
  {
    title: "Admission Process",
    href: "/admission/process",
    description: "Step-by-step guide to admission.",
  },
  {
    title: "Requirements",
    href: "/admission/requirements",
    description: "Eligibility and documentation requirements.",
  },
]

export function Navbar() {
    //@ts-ignore
    const [isOpen, setIsOpen] = React.useState(false)
    // const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  
    const MobileDropdownMenu = ({ 
      title, 
      items 
    }: { 
      title: string; 
      items: Array<{ title: string; href: string; description: string }> 
    }) => {
      const [isOpen, setIsOpen] = React.useState(false)
      
      return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 px-4 hover:bg-accent">
            <span>{title}</span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", {
              "transform rotate-180": isOpen,
            })} />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col space-y-2 px-6 py-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-sm hover:text-primary py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
  
    return (
      <div className="flex flex-col pt-[5.5vw] z-[10] ">
        <NavigationMenu className="container mx-auto hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
  
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent >
                <ul className="grid w-[400px] md:w-[200px] md:grid-cols-1">
                  {aboutDropdownItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
  
            <NavigationMenuItem>
            <NavigationMenuTrigger>Programmes</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid w-[400px] md:w-[200px] md:grid-cols-1 ">
                {programDropdownItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        
          <NavigationMenuItem>
            <NavigationMenuTrigger>Accredited Institutes</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid w-[400px] md:w-[200px] md:grid-cols-1">
                {accreditedInstitutes.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
            <NavigationMenuContent >
              <ul className="grid w-[400px]  md:w-[200px] md:grid-cols-1 ">
                {admissionItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/boarding">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Boarding
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/port-activity">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sports Activity
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
  
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="fixed top-4 right-4 z-50"
                size="icon"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mt-4 space-y-2">
                <Link 
                  to="/" 
                  className="px-4 py-2 hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                <MobileDropdownMenu title="About" items={aboutDropdownItems} />
                <MobileDropdownMenu title="Programmes" items={programDropdownItems} />
                
                <Link 
                  to="/boarding" 
                  className="px-4 py-2 hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Boarding
                </Link>
                
                <Link 
                  to="/port-activity" 
                  className="px-4 py-2 hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Port Activity
                </Link>
                
                <MobileDropdownMenu 
                  title="Accredited Institutes" 
                  items={accreditedInstitutes} 
                />
                <MobileDropdownMenu title="Admission" items={admissionItems} />
                
                <Link 
                  to="/contact" 
                  className="px-4 py-2 hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
  }
  
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-sm p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-white focus:text-white ",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none py-2">
                {title}
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"