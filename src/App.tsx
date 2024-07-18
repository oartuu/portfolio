import { useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";



function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  function openProjectModal() {
    setIsProjectModalOpen(true);
  }

  function closeProjectModal() {
    setIsProjectModalOpen(false);
  }

  function openContactModal() {
    setIsContactModalOpen(true);
  }

  function closeContactModal() {
    setIsContactModalOpen(false);
  }

    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };


  return <div className="w-full h-full flex flex-col overflow-x-hidden ">
    <Home 
    scrollToSection={scrollToSection}
    />
    <About 
    
    scrollToSection={scrollToSection}
    />
    <Projects 
    closeProjectModal={closeProjectModal}
    isProjectModalOpen={isProjectModalOpen}
    openProjectModal={openProjectModal}
    />
    <Contact
    closeContactModal={closeContactModal}
    isContactModalOpen={isContactModalOpen}
    openContactModal={openContactModal}
    />
  </div>;
}

export default App;
