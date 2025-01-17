import { CardCrousel } from "@/components/Crousel/CardCrousel";
import { Star } from 'lucide-react';
// import logo from "../../assets/images/logo.png"
import patner_logo_1 from "../../assets/images/patner_logo_1.jpeg"

export function HomePageCrousel() {
  return (
    <div 
    className="h-full sm:block hidden w-[100vw] mx-auto">
      <CardCrousel items={data} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    value: 100,
    name:"Apple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    content: <DummyContent />,
    image: patner_logo_1
  },
  {
    value: 200,
    name:"Apple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    content: <DummyContent />,
    image: "https://assets.aceternity.com/macbook.png"
        },
  {
    value: 300,
    name:"Apple",
    description: "New product launch",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    content: <DummyContent />,
    image: "https://assets.aceternity.com/macbook.png",

  },
  {
    value: 400,
    name:"Apple",
    description: "iPhone 15 Pro Max",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    content: <DummyContent />,
    image: "https://assets.aceternity.com/macbook.png"
  },
  {
    value: 500,
    name:"Apple",
    description: "Improved photography",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    content: <DummyContent />,
    image: "https://assets.aceternity.com/macbook.png"
  },
  {
    value: 600,
    name:"Apple",
    description: "Hiring opportunities",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    content: <DummyContent />,
    image: "https://assets.aceternity.com/macbook.png"
  },
];
