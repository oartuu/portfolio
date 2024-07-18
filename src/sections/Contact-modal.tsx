import { GithubIcon, Instagram, Linkedin, X } from "lucide-react";


interface ContactModalProps {
    closeContactModal: () => void;
}


const redirectTo = (url: string) => {
  window.open(url, "_blank");
};

const ContactModal = ({
    closeContactModal,
}: ContactModalProps) => {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center ">
        <div className="bg-gray-800 w-1/2 p-3 rounded-xl">
          <div className="flex justify-between">
            <p className="text-gray-300 font-semibold">Contato</p>
            <X
              className="text-gray-300 hover:cursor-pointer"
              onClick={closeContactModal}
            />
          </div>

          <div className="h-px w-full bg-gray-900 my-2"></div>

          <div onClick={() => redirectTo("https://github.com/oartuu")} className="flex justify-center items-center gap-3">
            <button className="bg-zinc-950 py-3 text-gray-300 mt-4 font-semibold px-4 rounded-lg flex justify-between items-center gap-2 shadow-shape">
              
              <GithubIcon /> GitHub
            </button>

            <button onClick={() => redirectTo("https://www.linkedin.com/in/oartuu/")} className="bg-sky-800 py-3 text-gray-300 mt-4 font-semibold px-4 rounded-lg flex justify-between items-center gap-2 shadow-shape">
              
              <Linkedin /> Linkedin
            </button>

            <button onClick={() => redirectTo("https://www.instagram.com/0_artuu/")} className="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-300 py-3 text-gray-300 mt-4 font-semibold px-4 rounded-lg flex justify-between items-center gap-2 shadow-shape">
              
              <Instagram /> Instagran
            </button>
          </div>
        </div>
      </div>
    );
}

export default ContactModal