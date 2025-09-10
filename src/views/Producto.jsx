function Producto() {
  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#0a1b36] mb-6 text-center">
        Nuestro Producto
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        MeshStep resuelve la falta de visualización de pasos intermedios
        en el mallado geométrico, ofreciendo una solución educativa y
        práctica.
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
            Visualización paso a paso
          </h3>
          <p className="text-gray-700">
            Comprende cómo los algoritmos refinan y dividen las figuras
            en cada nivel del proceso.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
            Métricas en tiempo real
          </h3>
          <p className="text-gray-700">
            Evalúa ángulos, distorsiones y calidad de las mallas a
            medida que se generan.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0a1b36] mb-3">
            Enfoque educativo
          </h3>
          <p className="text-gray-700">
            Diseñado para estudiantes, profesores e investigadores que
            buscan aprender y enseñar de manera práctica.
          </p>
        </div>
      </div>

      {/* Comparativa */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-xl shadow">
          <thead className="bg-[#0a1b36] text-[#f6f6f6]">
            <tr>
              <th className="px-4 py-3 text-left">Característica</th>
              <th className="px-4 py-3">MeshStep</th>
              <th className="px-4 py-3">Detri2</th>
              <th className="px-4 py-3">Gmsh</th>
              <th className="px-4 py-3">ANSYS</th>
            </tr>
          </thead>
          <tbody className="text-center text-gray-700">
            <tr className="border-t">
              <td className="py-3 text-left px-4">Visualización paso a paso</td>
              <td>✔️</td><td>❌</td><td>❌</td><td>❌</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 text-left px-4">Métricas integradas</td>
              <td>✔️</td><td>❌</td><td>❌</td><td>✔️</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 text-left px-4">Enfoque educativo</td>
              <td>✔️</td><td>❌</td><td>❌</td><td>❌</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 text-left px-4">Identificación temprana de errores</td>
              <td>✔️</td><td>❌</td><td>✔️</td><td>✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Producto;
