function Equipo() {
  const members = [
    { name: "Francisca Romero", role: "Scrum Master", linkedin: "https://www.linkedin.com/in/francisca-romero-gonzalez" },
    { name: "Rodrigo Ramírez", role: "Product Owner", linkedin: "https://www.linkedin.com/in/rodrigo-ramirez-catrileo" },
    { name: "Diego Acevedo", role: "Comunicación & Marketing", linkedin: "https://www.linkedin.com/in/diego-acevedo-santander-369721358/" },
    { name: "Vicente Mackenzie", role: "Testing", linkedin: "https://www.linkedin.com/in/vicente-mackenzie/" },
    { name: "Franco Alday", role: "Tecnologías", linkedin: "https://www.linkedin.com/in/franco-alday-3b2b55265/" },
    { name: "Florencia Ramírez", role: "Diseño + UX", linkedin: "https://www.linkedin.com/in/florencia-ramirez-sancristoful" },
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#0a1b36] mb-10 text-center">
        Nuestro Equipo
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-[#e83b2b] font-medium">{m.role}</p>
            <a
              href={m.linkedin}
              target="_blank"
              className="text-[#ADEFD1] hover:underline"
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Equipo;
