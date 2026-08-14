
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

const habilidades = [
  "React JS",
  "Python (Flet Framework)",
  "Programación Web Full Stack",
  "Ciencia de Datos & Big Data",
  "Excel Avanzado / Tablas Dinámicas",
  "Sistemas Operativos (Win/Linux/Mac)",
  "Gestión Documental Electrónica (GDE)",
  "Inglés (Nivel Intermedio)",
];

const capacitaciones = [
  { anio: 2025, curso: "Introducción a Ciencia de Datos (Nivel 1)", institucion: "INAP" },
  { anio: 2025, curso: "Programación Web Full Stack (Nivel 1)", institucion: "INAP" },
  { anio: 2025, curso: "Big Data: Haciendo hablar los Datos", institucion: "INAP" },
  { anio: 2021, curso: "Concursar 2.0 (FOPECAP)", institucion: "INAP" },
  { anio: 2020, curso: "Ley Micaela: Género y Violencia", institucion: "INAP" },
  { anio: 2019, curso: "Excel 2010/13 Avanzado: Tablas Dinámicas", institucion: "INAP" },
  { anio: 2018, curso: "Taller de Masculinidad / Control de Asistencia", institucion: "INAP" },
  { anio: 2018, curso: "Excel 2010 Básico", institucion: "INAP" },
  { anio: 2018, curso: "Seguridad e Higiene en el Trabajo", institucion: "INAP" },
  { anio: 2017, curso: "Gestión Documental Electrónica (GDE)", institucion: "INAP" },
  { anio: 2016, curso: "Manejo de COMDOC III", institucion: "Parque Lanín" },
  { anio: 2015, curso: "SARHA - Adm. de Recursos Humanos AFIP", institucion: "INAP" },
  { anio: 2015, curso: "Accesibilidad Web / Seguridad Información", institucion: "INAP" },
  { anio: 2015, curso: "Inglés Turístico (30 Hs)", institucion: "Ministerio Turismo" },
];

const intereses = [
  {
    titulo: "Deporte",
    descripcion:
      "Ciclismo, running, fútbol y crossfit. Mantengo un estilo de vida activo y saludable.",
  },
  {
    titulo: "Tecnología",
    descripcion:
      "Programador aficionado. Me apasionan las nuevas tecnologías (IT) y el aprendizaje constante.",
  },
  {
    titulo: "Familia",
    descripcion:
      "Jugar con mis hijos es mi actividad favorita. Valoro el equilibrio entre vida laboral y personal.",
  },
  {
    titulo: "Música",
    descripcion:
      "Escuchar música como fuente de inspiración y relajación en mis tiempos libres.",
  },
];

export default function CVBruno() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <div className="relative mb-8 ">
            <img
              src="/cvBruno/cv.jpg"
              alt="Bruno Salazar"
              className="w-40 h-40 rounded-full mx-auto object-cover border-1 border-red-500 shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Bruno A. </span>
            <span className="text-red-500">Salazar</span>
          </h1>
          <p className="text-xl text-red-300 mb-2">
            Programador | Administrativo
          </p>
          <p className="text-lg text-gray-300 mb-2">
            San Martín de los Andes, Neuquén · brunosalazar85@gmail.com
          </p>
          <p className="text-sm text-gray-400 mb-8">
            WhatsApp: +54 9 2944 319931 · Nacimiento: 01/07/1985
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/brunoas85" target="_blank">
              <FaGithub className="inline-block w-5 h-5 text-red-500 hover:text-white transition-colors ml-2" />
            </a>

            <a href="https://www.linkedin.com/in/brunosma/" target="_blank">
              <FaLinkedin className="inline-block w-5 h-5 text-red-500 hover:text-white transition-colors ml-2" />
            </a>

            <a href="https://discord.com/channels/@me" target="_blank">
              <FaDiscord className="inline-block w-5 h-5 text-red-500 hover:text-white transition-colors ml-2" />
            </a>

            <a href="https://www.instagram.com/brunosma85" target="_blank">
              <FaInstagram className="inline-block w-5 h-5 text-red-500 hover:text-white transition-colors ml-2" />
            </a>
            <a href="https://x.com/brunosma85" target="_blank">
              <FaXTwitter className="inline-block w-5 h-5 text-red-500 hover:text-white transition-colors ml-2" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
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
          <p className="text-lg text-gray-300 leading-relaxed text-justify mt-4">
            Profesional administrativo con más de una década de experiencia en
            la gestión pública. Poseo una sólida capacidad de adaptación y un
            compromiso constante con la formación técnica, lo que me ha
            permitido evolucionar desde tareas operativas hacia
            responsabilidades de mayor complejidad en sistemas críticos de
            gestión. Me distingo por mi proactividad para aprender nuevas
            tecnologías y mi enfoque en la eficiencia operativa.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
            <span className="mr-3">💼</span> Experiencia Profesional
          </h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-xl font-semibold text-red-300">
                Parque Nacional Lanín
              </h3>
              <span className="text-red-500 font-semibold">
                2014 - Actualidad
              </span>
            </div>
            <p className="text-gray-300 mb-3">
              Desempeñando funciones actuales en la{" "}
              <span className="text-red-300 font-semibold">
                Mesa de Entradas, Salidas y Notificaciones
              </span>
              .
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Gestión de Expedientes Electrónicos (EE)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Administración integral de RRHH y asistencia
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Notificaciones oficiales y control de gestión
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
            <span className="mr-3">🧰</span> Tecnologías y Herramientas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {habilidades.map((habilidad) => (
              <div
                key={habilidad}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center text-red-300 font-semibold flex items-center justify-center"
              >
                {habilidad}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
            <span className="mr-3">🧪</span> Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.nombre}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-colors duration-300 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-red-300 mb-3">
                  {proyecto.nombre}
                </h3>
                <p className="text-gray-300 flex-1">{proyecto.descripcion}</p>
                <a
                  href={proyecto.repo}
                  target="_blank"
                  className="text-sm text-red-500 hover:text-red-300 mt-4 inline-block"
                >
                  Ver en GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
            <span className="mr-3">🎓</span> Formación
          </h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                React JS (YouTube, OpenBootcamp, Bootstrap, Coursera, Platzi)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Python UTN
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                React JS BIT Cotesma
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Curso IA básica (en proceso)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                <span>
                  Secundario completo – C.P.E.M. N°13, San Martín de los
                  Andes, Neuquén (Año 2003). Bachiller con orientación en
                  ciencias exactas y naturales.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
            <span className="mr-3">📚</span> Capacitaciones
          </h2>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="border-b border-slate-700 text-red-300">
                  <th className="py-3 px-4">Año</th>
                  <th className="py-3 px-4">Curso / Capacitación</th>
                  <th className="py-3 px-4">Institución</th>
                </tr>
              </thead>
              <tbody>
                {capacitaciones.map((c, i) => (
                  <tr
                    key={`${c.anio}-${c.curso}`}
                    className={
                      i !== capacitaciones.length - 1
                        ? "border-b border-slate-700/50"
                        : ""
                    }
                  >
                    <td className="py-3 px-4">{c.anio}</td>
                    <td className="py-3 px-4">{c.curso}</td>
                    <td className="py-3 px-4">{c.institucion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
            <span className="mr-3">❤️</span> Intereses y Pasiones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {intereses.map((interes) => (
              <div
                key={interes.titulo}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-red-300 mb-3">
                  {interes.titulo}
                </h3>
                <p className="text-gray-300">{interes.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center">
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
