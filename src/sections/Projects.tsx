import { ArrowRight } from "lucide-react";
import ProjectModal from "./Project-modal";
import projectLogo from "../assets/planner.png";
interface ProjectsProps {
  openProjectModal: () => void
  isProjectModalOpen: boolean
  closeProjectModal: () => void
}

const Projects = ({
  openProjectModal,
  isProjectModalOpen,
  closeProjectModal
}: ProjectsProps) => {
  return (
    <div
      id="projects"
      className="h-screen w-screen bg-gray-950 flex justify-center items-center"
    >
      <div className="grid grid-cols-3 gap-12">
        <div className="w-80 h-96 flex flex-col justify-evenly items-center bg-gradient-to-t from-gray-900 rounded-lg shadow-shape">
          <img src={projectLogo} alt="" />

          <div className="text-center ">
            <span className="text-gray-300 text-2xl font-semibold ">
              Plann.er
            </span>

            <button
              onClick={openProjectModal}
              className="bg-blue-800 text-gray-300 mt-4 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 shadow-shape focus:outline-none"
            >
              ver mais <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {isProjectModalOpen && (
        <ProjectModal closeProjectModal={closeProjectModal} />
      )}
    </div>
  );
};

export default Projects;
