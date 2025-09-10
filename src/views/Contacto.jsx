import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaCalendarAlt,
} from "react-icons/fa";

function Contacto() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f1fu4o4",    // reemplazar
        "template_nvmy3ef",   // reemplazar
        form.current,
        "TITXyhe4w4arkDAPM"     // reemplazar
      )
      .then(
        () => {
          setStatus("✅ ¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Error al enviar el mensaje, intenta más tarde.");
        }
      );
  };

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#0a1b36] text-center mb-12">
        Contáctanos
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Formulario */}
        <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-[#0a1b36]">
            Envíanos un mensaje
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Nombre</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ADEFD1]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Correo</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ADEFD1]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mensaje</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ADEFD1]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#0a1b36] text-[#f6f6f6] px-6 py-3 rounded hover:bg-[#e83b2b] transition w-full"
            >
              Enviar
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>

        {/* Info de contacto + Ven a vernos */}
        <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-8 space-y-8">
          {/* Info de contacto */}
          <div className="space-y-6">
            {/* <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#0a1b36] text-2xl" />
              <div>
                <h4 className="font-semibold text-[#0a1b36]">Correo</h4>
                <p className="text-gray-700">meshstep@outlook.com</p>
              </div>
            </div> */}

            <div>
                <h3 className="text-2xl font-bold text-[#0a1b36] mb-4">
                    Nuestras Redes
                </h3>
                <div className="flex gap-4">
                    {/* Instagram */}
                    <a
                    href="https://instagram.com/meshstep"
                    target="_blank"
                    className="w-12 h-12 bg-[#ADEFD1] rounded-full flex items-center justify-center hover:bg-[#e83b2b] transition"
                    >
                    <FaInstagram className="text-[#0a1b36] text-xl" />
                    </a>
                    {/* LinkedIn */}
                    <a
                    href="https://linkedin.com/company/meshstep"
                    target="_blank"
                    className="w-12 h-12 bg-[#ADEFD1] rounded-full flex items-center justify-center hover:bg-[#e83b2b] transition"
                    >
                    <FaLinkedin className="text-[#0a1b36] text-xl" />
                    </a>
                    {/* Email directo */}
                    <a
                    href="mailto:meshstep@outlook.com"
                    className="w-12 h-12 bg-[#ADEFD1] rounded-full flex items-center justify-center hover:bg-[#e83b2b] transition"
                    >
                    <FaEnvelope className="text-[#0a1b36] text-xl" />
                    </a>
                </div>
            </div>
          </div>

          {/* Ven a vernos */}
          <div>
            <h3 className="text-2xl font-bold text-[#0a1b36] mb-4">
              ¡Ven a vernos en la Feria de SW!
            </h3>
            <div className="flex items-center gap-4 mb-2">
              <FaCalendarAlt className="text-[#0a1b36] text-xl" />
              <p className="text-gray-700">
                <strong>13 de Noviembre 2025</strong>
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-[#0a1b36] text-xl" />
              <p className="text-gray-700">
                Campus Casa Central USM, Valparaíso
              </p>
            </div>
            <div className="w-full h-64">
              <iframe
                title="Mapa USM Casa Central"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.777205748635!2d-71.59800602369225!3d-33.03599967355649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e08fd59cf72f%3A0xd4edb558ea6e3929!2sUniversidad%20T%C3%A9cnica%20Federico%20Santa%20Mar%C3%ADa!5e0!3m2!1ses-419!2scl!4v1757478632700!5m2!1ses-419!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;


