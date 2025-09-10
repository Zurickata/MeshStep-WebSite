import { FaChalkboardTeacher, FaUserGraduate, FaFlask } from "react-icons/fa";
import placeholderImage from "../assets/hero-placeholder.png";
import lonso from "../assets/lonso.png";

function Home() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="bg-[#0a1b36] text-[#f6f6f6] py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6 text-[#ADEFD1]">
              MeshStep
            </h1>
            <h2 className="text-2xl mb-6">
              Visualización educativa de algoritmos de mallado geométrico
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Una herramienta interactiva para estudiantes, profesores e
              investigadores que permite comprender y analizar paso a paso el
              proceso de generación de mallas en 2D y 3D.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/producto"
                className="bg-[#ADEFD1] text-[#0a1b36] font-semibold px-6 py-3 rounded-lg shadow hover:bg-white transition"
              >
                Conoce más
              </a>
              <a
                href="/contacto"
                className="border-2 border-[#ADEFD1] text-[#ADEFD1] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ADEFD1] hover:text-[#0a1b36] transition"
              >
                Contáctanos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={placeholderImage}
              alt="Visualización MeshStep"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1b36] mb-6">
          El problema
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Muchos estudiantes enfrentan dificultades para comprender los
          algoritmos de mallado debido a su naturaleza abstracta y teórica. Los
          profesores carecen de herramientas prácticas para enseñar estos
          procesos y los investigadores detectan errores tarde, aumentando
          costos y tiempos de desarrollo.
        </p>
      </section>

      {/* SOLUCIÓN / FEATURES */}
      <section className="bg-[#f6f6f6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a1b36] mb-12">
            Nuestra solución
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="/assets/feature-steps.svg" alt="Paso a paso" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
                Visualización paso a paso
              </h3>
              <p className="text-gray-700">
                Explora cómo se forman las mallas en cada nivel del algoritmo,
                entendiendo las decisiones detrás de cada subdivisión.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="/assets/feature-steps.svg" alt="Paso a paso" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
                Métricas en tiempo real
              </h3>
              <p className="text-gray-700">
                Analiza la calidad de la malla mientras se genera, detectando
                errores y mejorando el resultado final.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="/assets/feature-steps.svg" alt="Paso a paso" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
                Enfoque educativo
              </h3>
              <p className="text-gray-700">
                Diseñado para apoyar la enseñanza y el aprendizaje, integrando
                lo práctico con lo teórico en el aula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1b36] mb-6">
          ¿Por qué elegir MeshStep?
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto text-lg text-gray-700">
          <li>✅ Muestra cada iteración del mallado</li>
          <li>✅ Integra métricas de calidad directamente</li>
          <li>✅ Pensado para el aprendizaje y la investigación</li>
          <li>✅ Compatible con formatos estándar como .msh y .vtk</li>
        </ul>
      </section>

      {/* USUARIOS */}
      <section className="bg-[#f6f6f6] pb-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a1b36] mb-12">
            ¿Quiénes usan MeshStep?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="/assets/user-student.svg" alt="Estudiante" className="w-20 h-20 mx-auto mb-4" />
              <FaUserGraduate className="text-4xl text-[#e83b2b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-2">
                Estudiantes
              </h3>
              <p className="text-gray-700">
                Comprenden conceptos abstractos con ejemplos visuales paso a
                paso.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="/assets/user-student.svg" alt="Estudiante" className="w-20 h-20 mx-auto mb-4" />
              <FaChalkboardTeacher className="text-4xl text-[#e83b2b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-2">
                Profesores
              </h3>
              <p className="text-gray-700">
                Explican algoritmos de mallado con un recurso interactivo y
                práctico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="/assets/user-student.svg" alt="Estudiante" className="w-20 h-20 mx-auto mb-4" />
              <FaFlask className="text-4xl text-[#e83b2b] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-2">
                Investigadores
              </h3>
              <p className="text-gray-700">
                Detectan y corrigen errores de mallado antes de las simulaciones,
                ahorrando tiempo y recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0a1b36] text-[#f6f6f6] py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Aprende, enseña e investiga con MeshStep
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Una herramienta educativa y práctica que transforma la manera en que
          comprendemos los algoritmos de mallado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/producto"
            className="bg-[#ADEFD1] text-[#0a1b36] font-semibold px-6 py-3 rounded-lg shadow hover:bg-white transition"
          >
            Conoce más
          </a>
          <a
            href="/contacto"
            className="border-2 border-[#ADEFD1] text-[#ADEFD1] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ADEFD1] hover:text-[#0a1b36] transition"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
