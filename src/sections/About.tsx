const About = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-gray-800 from-0% via-gray-950 via-20% to-gray-800 to-100% flex justify-center items-center">
      <div className="text-gray-300 flex justify- items-center px-6">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="w-1/2 rounded-lg shadow-shape"
            src="../public/photo.jpg"
            alt=""
          />
          <button className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg mt-4 w-1/2 shadow-shape">
            Projetos
          </button>
        </div>

        <div className="w-1/2 flex flex-col text-left gap-2">
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
            .NET C# e Express.js.
          </p>
          <p>
            Meu objetivo é aplicar minha criatividade e habilidades técnicas
            para contribuir com soluções digitais inovadoras. Estou aberto a
            oportunidades de estágio onde posso aprender e colaborar em um
            ambiente dinâmico e colaborativo.
          </p>
          <span>Habilidades-chave: JavaScript, React, HTML5, CSS3</span>
          <span>
            Atualmente estudando: Desenvolvimento full-stack, Banco de Dados,
            Arquitetura de Software, .NET C#, Express.js
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
