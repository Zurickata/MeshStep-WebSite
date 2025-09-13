import { FaChalkboardTeacher, FaUserGraduate, FaFlask, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/hero-placeholder.png";

function Home() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="bg-[#0a1b36] text-[#f6f6f6] py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-6 text-[#ADEFD1]"
            >
              MeshStep
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl mb-6"
            >
              Visualizador educativo de algoritmos de mallado geométrico
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 text-lg text-gray-300"
            >
              MeshStep es una herramienta interactiva para estudiantes, profesores e
              investigadores que permite comprender y analizar paso a paso el
              proceso de generación de mallas en 2D y 3D.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="/producto"
                className="bg-[#ADEFD1] text-[#0a1b36] font-semibold px-6 py-3 rounded-lg shadow hover:bg-white transition"
              >
                Conoce más
              </Link>
              <Link
                to="/contacto"
                className="border-2 border-[#ADEFD1] text-[#ADEFD1] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ADEFD1] hover:text-[#0a1b36] transition"
              >
                Contáctanos
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={placeholderImage}
              alt="Visualización MeshStep"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </motion.div>
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
            {[
              {
                title: "Visualización paso a paso",
                desc: "Explora cómo se forman las mallas en cada nivel del algoritmo, entendiendo las decisiones detrás de cada subdivisión.",
              },
              {
                title: "Métricas en tiempo real",
                desc: "Analiza la calidad de la malla mientras se genera, detectando errores y mejorando el resultado final.",
              },
              {
                title: "Enfoque educativo",
                desc: "Diseñado para apoyar la enseñanza y el aprendizaje, integrando lo práctico con lo teórico en el aula.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1b36] mb-6">
          ¿Por qué elegir MeshStep?
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto text-lg text-gray-700">
          {[
            "Muestra cada iteración del mallado",
            "Integra métricas de calidad directamente",
            "Pensado para el aprendizaje y la investigación",
            "Compatible con formatos estándar como .msh y .vtk",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 justify-center"
            >
              <FaCheck className="text-[#e83b2b] w-6 h-6 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* USUARIOS */}
      <section className="bg-[#f6f6f6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a1b36] mb-12">
            ¿Quiénes usan MeshStep?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0a1b36] text-[#f6f6f6] p-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Aprende, enseña e investiga con MeshStep
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Una herramienta educativa y práctica que transforma la manera en que
          comprendemos los algoritmos de mallado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/producto"
            className="bg-[#ADEFD1] text-[#0a1b36] font-semibold px-6 py-3 rounded-lg shadow hover:bg-white transition"
          >
            Conoce más
          </Link>
          <Link
            to="/contacto"
            className="border-2 border-[#ADEFD1] text-[#ADEFD1] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ADEFD1] hover:text-[#0a1b36] transition"
          >
            Contáctanos
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
