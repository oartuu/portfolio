import photo from "../assets/photo.jpg";
interface AboutProps {
  scrollToSection: (id: string) => void
}


const About = ({scrollToSection}: AboutProps) => {
  return (

    <div
      id="about"
      className="h-screen w-screen bg-gray-950 flex justify-center items-center"
    >
      <div className="text-gray-300 flex justify- items-center px-6">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="w-1/2 rounded-lg shadow-shape"
            src={photo}
            alt="Arthur Do nascimento"
          />
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg mt-4 w-1/2 shadow-shape focus:outline-none"
          >
            Projetos
          </button>
        </div>

        <div className="w-1/2 flex flex-col text-left gap-2 pr-4 mr-2">
          <p>
            Estudante de Sistemas de Informação apaixonado por desenvolvimento
            web e tecnologias inovadoras. Com um foco sólido em front-end, tenho
            experiência e conhecimento robusto em JavaScript e React, criando
            interfaces de usuário dinâmicas e responsivas.
          </p>
          <p>
            Estou em busca de desafios que ampliem meus horizontes e me permitam
            crescer profissionalmente. Atualmente, estou expandindo meu
            conhecimento para o mundo full-stack, explorando tecnologias como
            Django e Express.js.
          </p>
          <p>
            Meu objetivo é aplicar minha criatividade e habilidades técnicas
            para contribuir com soluções digitais inovadoras. Estou aberto a
            oportunidades de estágio onde posso aprender e colaborar em um
            ambiente dinâmico e colaborativo.
          </p>
          <span>Habilidades-chave: JavaScript, TypeScript, React, Angular, Vue.js, Django,</span>
          <span>
            Atualmente estudando: Desenvolvimento full-stack, Banco de Dados,
            Arquitetura de Software, Python, Django, Vue.js, Angular.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
