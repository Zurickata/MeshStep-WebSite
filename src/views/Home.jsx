function Home() {
  return (
    <section className="bg-[#0a1b36] text-[#f6f6f6] py-24 text-center">
      <h1 className="text-5xl font-bold mb-6 text-[#ADEFD1]">
        MeshStep
      </h1>
      <h2 className="text-2xl md:text-3xl mb-6">
        Visualización Educativa de Algoritmos de Mallado
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-10">
        Una herramienta interactiva para comprender paso a paso la
        generación de mallas geométricas 2D y 3D, con métricas en
        tiempo real y un enfoque académico.
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
  );
}

export default Home;
