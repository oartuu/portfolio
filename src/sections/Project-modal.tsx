import { GithubIcon, X } from "lucide-react";

import projectPhoto from "../assets/coiso.jpeg";


interface ProjectModalProps {
  closeProjectModal: () => void;
}

const ProjectModal = ({ closeProjectModal,  }: ProjectModalProps) => {

  const redirectTo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center ">
      <div className="bg-gray-800 w-1/2 p-3 rounded-xl">
        <div className="flex justify-between">
          <p className="text-gray-300 font-semibold">Plann.er</p>
          <X
            className="text-gray-300 hover:cursor-pointer"
            onClick={closeProjectModal}
          />
        </div>

        <div className="h-px w-full bg-gray-900 my-2"></div>

        <div className="w-full h-80 overflow-hidden">
          <img className="w-full rounded-lg" src={projectPhoto} alt="" />
        </div>

        <div className="h-px w-full bg-gray-900 my-2"></div>

        <div>
          <button
            onClick={() =>
              redirectTo("https://github.com/oartuu/NLW-Jurney-Front")
            }
            className="bg-zinc-950 w-28 py-3 text-gray-300 mt-4 font-semibold px-4 rounded-lg flex justify-between items-center gap-2 shadow-shape focus:outline-none"
          >
            {" "}
            <GithubIcon /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
