import { AlignRight, LaptopMinimal } from "lucide-react";


interface HomeProps {
  scrollToSection: (id: string) => void
}

const Home = ({ scrollToSection }: HomeProps) => {
  return (
    <div id="home" className="h-screen w-screen  bg-gradient-to-b from-gray-950 from-70% via-gray-900 via-80% to-gray-800 to-100%">
      <div className="bg-pattern h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl text-gray-300 font-bold">
          Olá, me Chamo Arthur
        </h1>
        <div className="flex gap-4 mt-4 w-1/3">
          <button onClick={()=>scrollToSection("about")} className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 flex-1 shadow-shape">
            Sobre <AlignRight />
          </button>
          <button onClick={()=>scrollToSection("contact")} className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg  shadow-shape flex justify-center items-center gap-8 flex-1">
            Contato <LaptopMinimal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
