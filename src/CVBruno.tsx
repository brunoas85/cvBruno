import React from "react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function CVBruno() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <div className="relative mb-8 ">
            <img
              src="/cv.jpg"
              alt="Bruno Salazar"
              className="w-40 h-40 rounded-full mx-auto object-cover border-1 border-purple-500 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>
          <h1 className="text-6xl font-bold text-red mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-black">
            Bruno A. Salazar
          </h1>
          <p className="text-xl text-purple-300 mb-2">
            Programador Aficionado | Administrativo
          </p>
          <p className="text-lg text-gray-400 mb-4">
            Fecha de nacimiento: 01/07/1985
          </p>
          <p className="text-lg text-gray-300 mb-8">
            San Martín de los Andes · brunosalazar85@gmail.com · +54 9 2944
            319931
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/brunoas85" target="_blank">
              <FaGithub className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>

            <a href="https://instagram.com/brunoas85" target="_blank">
              <FaInstagram className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>
            <a href="https://x.com/brunosma85" target="_blank">
              <FaXTwitter  className="inline-block w-5 h-5 text-blue-600 ml-2" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <span className="mr-3">💡</span> Perfil
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                App SITRAM
              </h3>
              <p className="text-gray-300">
                App en desarrollo con React JS + Material UI. Sistema de
                Trámites de la Municipalidad de San Martín de los Andes.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                App Parque Nacional Lanín
              </h3>
              <p className="text-gray-300">
                App en desarrollo con React Native + Expo, login de usuarios,
                permisos de pesca, estado de sendas y más.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Automatización GDE
              </h3>
              <p className="text-gray-300">
                Script en Python con Selenium para automatizar descargas en el
                módulo CCOO y GEDO.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Sitio Web Bomberos
              </h3>
              <p className="text-gray-300">
                Unificación de componentes en React, carga de documentos y
                requisitos.
              </p>
            </div>
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
