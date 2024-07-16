import {AlignRight, ArrowRight, LaptopMinimal} from 'lucide-react'


function App() {
  

  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden ">


      <div className="h-screen w-screen  bg-gradient-to-b from-gray-950 from-70% via-gray-900 via-80% to-gray-800 to-100%">
        <div className="bg-pattern h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl text-gray-300 font-bold">Olá, me Chamo Arthur</h1>
          <div className="flex gap-4 mt-4 w-1/3">
            <button className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 flex-1 shadow-shape">
              Sobre <AlignRight/> 
            </button> 
            <button className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg  shadow-shape flex justify-center items-center gap-8 flex-1">
              Contato <LaptopMinimal/>
            </button>
          </div>
        </div>
      </div>


      <div className="h-screen w-screen bg-gradient-to-t from-gray-800 from-0% via-gray-950 via-20% to-gray-800 to-100% flex justify-center items-center">

        <div className='text-gray-300 flex justify- items-center px-6'>

          <div className='flex-1 flex flex-col items-center justify-center'>
            <img className='w-1/2 rounded-lg shadow-shape' src="../public/photo.jpg" alt="" />
            <button className="bg-blue-800 text-gray-300 font-semibold px-4 py-4 rounded-lg mt-4 w-1/2 shadow-shape">Projetos</button>
          </div>

          <div className='w-1/2 flex flex-col text-left gap-2'>

            <p>
              Estudante de Sistemas de Informação apaixonado por desenvolvimento web e tecnologias inovadoras. Com um foco sólido em front-end, tenho experiência e conhecimento robusto em JavaScript e React, criando interfaces de usuário dinâmicas e responsivas.
            </p>
            <p>
            Estou em busca de desafios que ampliem meus horizontes e me permitam crescer profissionalmente. Atualmente, estou expandindo meu conhecimento para o mundo full-stack, explorando tecnologias como .NET C# e Express.js.
            </p>
            <p>
            Meu objetivo é aplicar minha criatividade e habilidades técnicas para contribuir com soluções digitais inovadoras. Estou aberto a oportunidades de estágio onde posso aprender e colaborar em um ambiente dinâmico e colaborativo.
            </p>
            <span>Habilidades-chave: JavaScript, React, HTML5, CSS3</span>
            <span>Atualmente estudando: Desenvolvimento full-stack, Banco de Dados, Arquitetura de Software, .NET C#, Express.js</span>

          </div>

        </div>
      </div>

      <div className="h-screen w-screen bg-gradient-to-t from-gray-950 from-5% via-gray-900 via-78% to-gray-800 to-95% flex justify-center items-center">

        <div className='grid grid-cols-3 gap-12'>

          <div className='w-80 h-96 flex flex-col justify-evenly items-center bg-gradient-to-t from-gray-900 rounded-lg shadow-shape'>
          
          <img src="../public/planner.png" alt="" />

          <div className='text-center '>
           <span className='text-gray-300 text-2xl font-semibold '>Plann.er</span>

            <button className="bg-blue-800 text-gray-300 mt-4 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 shadow-shape">
                ver mais <ArrowRight/> 
            </button> 
          </div>

          </div>
        </div>
      
      </div>


      <div className='w-screen h-screen bg-gray-950 flex flex-col gap-10 justify-center items-center text-center'>
        <p className='text-gray-300 text-6xl font-bold'>Entre em contato <br /> para mais <span className='text-blue-800'>informações</span>.</p>

        <button className="bg-blue-800 text-gray-300 mt-4 font-semibold px-4 py-4 rounded-lg flex justify-center items-center gap-8 shadow-shape w-64">
          contato <LaptopMinimal/> 
        </button> 

      </div>

    </div>
  )
}

export default App