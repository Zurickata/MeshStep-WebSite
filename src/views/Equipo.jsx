import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo_2.png";
import foto_rodrigo from "../assets/team/rodrigo.webp";
import foto_francisca from "../assets/team/fran.webp";
import foto_diego from "../assets/team/diego.webp";
import foto_mackenzie from "../assets/team/mackenzie.webp";
import foto_franco from "../assets/team/franco.webp";
import foto_flo from "../assets/team/flo.webp";

function Equipo() {
  const members = [
    {
      name: "Francisca Romero",
      role: "Scrum Master",
      img: foto_francisca,
      linkedin: "https://www.linkedin.com/in/francisca-romero-gonzalez",
    },
    {
      name: "Rodrigo Ramírez",
      role: "Product Owner",
      img: foto_rodrigo,
      linkedin: "https://www.linkedin.com/in/rodrigo-ramirez-catrileo",
    },
    {
      name: "Diego Acevedo",
      role: "Comunicación & Marketing",
      img: foto_diego,
      linkedin: "https://www.linkedin.com/in/diego-acevedo-santander-369721358/",
    },
    {
      name: "Vicente Mackenzie",
      role: "Testing",
      img: foto_mackenzie,
      linkedin: "https://www.linkedin.com/in/vicente-mackenzie/",
    },
    {
      name: "Franco Alday",
      role: "Tecnologías",
      img: foto_franco,
      linkedin: "https://www.linkedin.com/in/franco-alday-3b2b55265/",
    },
    {
      name: "Florencia Ramírez",
      role: "Diseño + UX",
      img: foto_flo,
      linkedin: "https://www.linkedin.com/in/florencia-ramirez-sancristoful",
    },
  ];

  return (
    <section className="pb-20 container mx-auto px-6 space-y-16">
      {/* Logo grande */}
      <div className="text-center">
        <motion.img
          src={logo}
          alt="Logo MeshStep"
          className="mx-auto w-60 h-60 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.h1
          className="text-4xl font-bold text-[#0a1b36] mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nosotros
        </motion.h1>
      </div>

      {/* Descripción general */}
      <motion.div
        className="max-w-3xl mx-auto text-center text-gray-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg">
          MeshStep nace en 2025 conformado por un equipo de estudiantes de la
          Universidad Técnica Federico Santa María, con el objetivo de
          desarrollar una herramienta interactiva y educativa que permita
          visualizar, comprender y analizar algoritmos de mallado geométrico en
          2D y 3D, apoyando a estudiantes, docentes e investigadores en su
          aprendizaje y trabajo.
        </p>
      </motion.div>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Misión",
            text: "Entregar una herramienta educativa e interactiva que facilite la comprensión de los procesos de mallado geométrico, promoviendo un aprendizaje más práctico y significativo en la educación superior.",
            border: "border-[#ADEFD1]",
          },
          {
            title: "Visión",
            text: "Convertirse en la plataforma educativa de referencia en Latinoamérica para la enseñanza y análisis de algoritmos de mallado, contribuyendo al avance de la investigación y la formación de ingenieros altamente capacitados.",
            border: "border-[#e83b2b]",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`bg-white shadow-md rounded-lg p-8 border-t-4 ${item.border} hover:scale-105 transition-transform`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#0a1b36] mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Nuestro Equipo */}
      <div>
        <h2 className="text-3xl font-bold text-[#0a1b36] text-center mb-12">
          Nuestro Equipo
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Foto */}
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-56 object-cover"
              />
              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a1b36]">
                      {m.name}
                    </h3>
                    <p className="text-gray-600">{m.role}</p>
                  </div>
                  <div className="flex gap-3">
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        className="w-10 h-10 bg-[#ADEFD1] rounded-full flex items-center justify-center hover:bg-[#e83b2b] transition"
                      >
                        <FaLinkedin className="text-[#0a1b36]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipo;
