import { FaCube, FaProjectDiagram, FaFileExport, FaUserGraduate, FaChalkboardTeacher, FaFlask } from "react-icons/fa";
import a from "../assets/a.png"
import a2 from "../assets/a2.png"
import metricas1 from "../assets/metricas_1.png"
import metricas3 from "../assets/metricas_3.png"
import metricas4 from "../assets/metricas_4.png"

function Producto() {
  return (
    <div className="space-y-24 pt-20">
      {/* HERO INTRODUCTORIO */}
      <section className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#0a1b36] mb-6">
          MeshStep: una nueva forma de comprender el mallado
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
          MeshStep es una herramienta interactiva que permite visualizar y analizar 
          el proceso de refinamiento de mallas en 2D y 3D, paso a paso y con métricas 
          de calidad integradas. Diseñada para estudiantes, profesores e investigadores, 
          combina un enfoque educativo con utilidades prácticas de investigación.
        </p>
        <img
          src={a}
          alt="Visualización de refinamiento MeshStep"
          className="mx-auto rounded-lg shadow-lg w-full max-w-3xl h-auto object-contain"
        />
      </section>

      {/* FUNCIONALIDADES CLAVE */}
      <section className="bg-[#f6f6f6]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0a1b36] text-center mb-12">
            Funcionalidades Clave
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <FaCube className="text-4xl text-[#e83b2b] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0a1b36]">
                Visualización de Niveles de Refinamiento
              </h3>
              <p className="text-gray-700">
                Explora cómo evoluciona la malla al aplicar distintos niveles de 
                refinamiento sobre una nube de puntos, tanto en 2D como en 3D. 
                Observa el proceso de forma clara y controlada.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <FaProjectDiagram className="text-4xl text-[#e83b2b] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0a1b36]">
                Ejecución paso a paso del algoritmo
              </h3>
              <p className="text-gray-700">
                Visualiza cómo el algoritmo divide cuadrantes, elimina regiones 
                fuera de la nube, ajusta vértices y refina progresivamente. 
                Ideal para comprender cada decisión del proceso de mallado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PANEL DE MÉTRICAS */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1b36] mb-8">
          Métricas de Calidad en Tiempo Real
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          El panel lateral de MeshStep muestra estadísticas clave como niveles 
          de refinamiento, ángulos críticos, control de animación y detalles 
          topológicos. Esto permite validar la calidad de la malla de manera 
          sencilla y rápida.
        </p>

        {/* mosaico responsivo: imagen principal a la izquierda, dos apiladas a la derecha */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <img
            src={metricas1}
            alt="Panel de métricas - vista principal"
            className="rounded-lg shadow-lg w-full h-56 md:h-64 object-cover"
          />

          <div className="flex flex-col gap-4">
            <img
              src={metricas3}
              alt="Métrica adicional 1"
              className="rounded-lg shadow-lg w-full h-28 md:h-32 object-cover"
            />
            <img
              src={metricas4}
              alt="Métrica adicional 2"
              className="rounded-lg shadow-lg w-full h-28 md:h-32 object-cover"
            />
          </div>
        </div>
      </section>

      {/* COLOREO */}
      <section className="bg-[#f6f6f6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a1b36] mb-8">
            Coloreo por Métricas
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            Identifica fácilmente regiones problemáticas coloreando los elementos 
            según distintas métricas: área, ángulo mínimo o relación de aspecto. 
            Una herramienta visual para detectar y analizar irregularidades.
          </p>
          <img
            src={a2}
            alt="Coloreo por métricas MeshStep"
            className="mx-auto rounded-lg shadow-lg w-full max-w-3xl h-auto object-contain"
          />
        </div>
      </section>

      {/* EXPORTACIÓN */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1b36] mb-6">
          Exportación de Estados Intermedios
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          Guarda y exporta la malla en cualquier etapa del refinamiento. Esta 
          funcionalidad es especialmente útil para investigadores y profesores, 
          quienes pueden analizar y reutilizar configuraciones específicas del proceso.
        </p>
        <FaFileExport className="text-6xl text-[#e83b2b] mx-auto" />
      </section>

      {/* COMUNIDAD OBJETIVO */}
      <section className="bg-[#f6f6f6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a1b36] mb-12">
            Pensado para la Comunidad Académica e Investigadora
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <FaUserGraduate className="text-4xl text-[#e83b2b] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-2">
                Estudiantes
              </h3>
              <p className="text-gray-700">
                Comprenden algoritmos abstractos de forma visual e interactiva.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <FaChalkboardTeacher className="text-4xl text-[#e83b2b] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-2">
                Profesores
              </h3>
              <p className="text-gray-700">
                Enseñan con un recurso práctico y atractivo que conecta teoría con práctica.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <FaFlask className="text-4xl text-[#e83b2b] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#0a1b36] mb-2">
                Investigadores
              </h3>
              <p className="text-gray-700">
                Evalúan mallas y exportan estados intermedios, optimizando su tiempo de trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0a1b36] text-[#f6f6f6] p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">
          MeshStep: una herramienta hecha para aprender, enseñar e investigar
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Integra visualización, métricas y exportación en una única plataforma 
          pensada para la comunidad académica e investigadora.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mx-auto">
          <a
            href="/contacto"
            className="bg-[#ADEFD1] text-[#0a1b36] font-semibold px-6 py-3 rounded-lg shadow hover:bg-white transition"
          >
            Contáctanos
          </a>
          <a
            href="/equipo"
            className="border-2 border-[#ADEFD1] text-[#ADEFD1] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ADEFD1] hover:text-[#0a1b36] transition"
          >
            Conoce al equipo
          </a>
        </div>
      </section>
    </div>
  );
}

export default Producto;
