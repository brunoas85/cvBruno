
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const proyectos = [
  {
    nombre: "NidoAndino",
    descripcion:
      "Plataforma para alquiler de departamentos, permanente y temporario.",
    repo: "https://github.com/brunoas85/NidoAndino",
  },
  {
    nombre: "SIFWI",
    descripcion:
      "Sistema de Información FWI Lanín, complementaria del ICE del Parque Nacional Lanín: información técnica y meteorológica.",
    repo: "https://github.com/brunoas85/SIFWI",
  },
  {
    nombre: "Área Infracciones PNL",
    descripcion:
      "App en desarrollo con Next.js: login de usuarios, permisos de pesca, estado de sendas y más, para el Parque Nacional Lanín.",
    repo: "https://github.com/brunoas85/InfraccionesLanin",
  },
  {
    nombre: "Alpine",
    descripcion: "App para una empresa de paisajismo y jardinería.",
    repo: "https://github.com/brunoas85/Alpine",
  },
  {
    nombre: "$Aldo",
    descripcion:
      "App de finanzas cotidianas para llevar el control de gastos e ingresos personales.",
    repo: "https://github.com/brunoas85/-Aldo",
  },
  {
    nombre: "Fit Coach",
    descripcion: "Asistente de entrenamiento para el gimnasio.",
    repo: "https://github.com/brunoas85/fit-coach",
  },
  {
    nombre: "ElectroUnión SMA",
    descripcion: "App de gestión para Electrounión SMA.",
    repo: "https://github.com/brunoas85/ElectroUnionSMA",
  },
  {
    nombre: "Unión SMA",
    descripcion:
      "App del equipo de fútbol de veteranos Unión SMA, del cual formo parte.",
    repo: "https://github.com/brunoas85/UnionSMA",
  },
  {
    nombre: "Automatización GDE",
    descripcion:
      "Script en Python con Selenium para automatizar descargas en el módulo CCOO y GEDO.",
    repo: "https://github.com/brunoas85/GDETracker",
  },
  {
    nombre: "ArteSano",
    descripcion:
      "Landing page para ArteSano, panadería artesanal libre de gluten.",
    repo: "https://github.com/brunoas85/artesano",
  },
  {
    nombre: "Laparoscopia IMC",
    descripcion:
      "Propuesta de rediseño visual para el sitio de Laparoscopia IMC.",
    repo: "https://github.com/brunoas85/laparoscopia",
  },
  {
    nombre: "Check",
    descripcion: "To Do Things: app de gestión de tareas personales.",
    repo: "https://github.com/brunoas85/Check-",
  },
];

export default function CVBruno() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <div className="relative mb-8 ">
            <img
              src="/cvBruno/cv.jpg"
              alt="Bruno Salazar"
              className="w-40 h-40 rounded-full mx-auto object-cover border-1 border-purple-500 shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold text-red mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-white">
            Bruno A. Salazar
          </h1>
          <p className="text-xl text-purple-300 mb-2">
            Programador | Administrativo
          </p>
          <p className="text-lg text-gray-300 mb-8">
            San Martín de los Andes · brunosalazar85@gmail.com
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/brunoas85" target="_blank">
              <FaGithub className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>

            <a href="https://www.linkedin.com/in/brunosma/" target="_blank">
              <FaLinkedin className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>

            <a href="https://discord.com/channels/@me" target="_blank">
              <FaDiscord className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>

            <a href="https://www.instagram.com/brunosma85" target="_blank">
              <FaInstagram className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>
            <a href="https://x.com/brunosma85" target="_blank">
              <FaXTwitter className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <span className="mr-3">💡</span> Perfil
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            Entusiasta de la programación, las TIC´s, IA y Bug Bounty, Python
            para principiante de la UTN, autodidacta. Actualmente en formación
            React JS con BIT Cotesma. Curso de IA básica en proceso. Experiencia
            en proyectos personales con React, Node.js y automatización de
            tareas administrativas. Busco seguir creciendo y aplicando mis
            conocimientos en proyectos reales vinculados a soluciones públicas,
            medio ambiente y accesibilidad digital.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <span className="mr-3">🧰</span> Tecnologías y Herramientas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Frontend
              </h3>
              <p className="text-gray-300">React, HTML, CSS, JavaScript</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Otros
              </h3>
              <p className="text-gray-300">
                Git, GitHub, Expo, MUI, Tailwind CSS, Python básico,
                automatización en GDE
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <span className="mr-3">🧪</span> Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.nombre}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors duration-300 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-3">
                  {proyecto.nombre}
                </h3>
                <p className="text-gray-300 flex-1">{proyecto.descripcion}</p>
                <a
                  href={proyecto.repo}
                  target="_blank"
                  className="text-sm text-purple-400 hover:text-purple-300 mt-4 inline-block"
                >
                  Ver en GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <span className="mr-3">🎓</span> Formación
          </h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                React JS (YouTube, OpenBootcamp, Bootstrap, Coursera, Platzi)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Python UTN
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                React JS BIT Cotesma
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Curso IA básica (en proceso)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Secundario completo C.P.E.M N° 13 (1999-2003)
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <span className="mr-3">🎯</span> Objetivo
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Seguir aprendiendo y colaborar en proyectos donde pueda aplicar lo
            aprendido y crecer junto a un equipo. Me entusiasma trabajar en
            soluciones que impacten positivamente en la comunidad.
          </p>
        </section>
      </div>
    </main>
  );
}
