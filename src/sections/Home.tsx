import { AlignRight, LaptopMinimal } from "lucide-react";
import { useEffect, useState } from "react";

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => {
  const texts = ["Olá, me chamo Arthur.", "Desenvolvedor React."];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [currentText, isDeleting, typingSpeed, loopNum]);

  return (
    <div
      id="home"
      className="h-screen w-screen  bg-gradient-to-b from-gray-950 from-70% via-gray-900 via-80% to-gray-800 to-100%"
    >
      <div className="bg-pattern h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl text-gray-300 font-bold">{currentText}</h1>

        <div className="flex gap-4 mt-4 w-1/3">
          <button
            onClick={() => scrollToSection("about")}
            className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 flex-1 shadow-shape focus:outline-none"
          >
            Sobre <AlignRight />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg  shadow-shape flex justify-center items-center gap-8 flex-1 focus:outline-none"
          >
            Contato <LaptopMinimal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
