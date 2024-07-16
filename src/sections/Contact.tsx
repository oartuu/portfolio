import { LaptopMinimal } from "lucide-react";
import ContactModal from "./Contact-modal";

interface ContactProps {
    openContactModal: () => void;
    isContactModalOpen: boolean;
    closeContactModal: () => void;
}

const Contact = ({
  openContactModal,
  isContactModalOpen,
  closeContactModal
}: ContactProps) => {
  return (
    <div className="w-screen h-screen bg-gray-950 flex flex-col gap-10 justify-center items-center text-center">
      <p className="text-gray-300 text-6xl font-bold">
        Entre em contato <br /> para mais{" "}
        <span className="text-blue-800">informações</span>.
      </p>

      <button
        onClick={openContactModal}
        className="bg-blue-800 text-gray-300 mt-4 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 shadow-shape w-64"
      >
        contato <LaptopMinimal />
      </button>

      {isContactModalOpen && (
        <ContactModal closeContactModal={closeContactModal} />
      )}
    </div>
  );
};

export default Contact;