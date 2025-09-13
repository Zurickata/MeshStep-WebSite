import fesw_logo from "../assets/fesw-logo.png";
import usm_logo from "../assets/usm-logo.png";


function Accreditation() {
  return (
    <section className="bg-[#f6f6f6] py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-medium text-[#0a1b36] mb-4">
          Proyecto desarrollado para la <strong>XXXII Feria de Software</strong>
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <img
            src={fesw_logo}
            alt="Feria de Software USM"
            className="h-14 object-contain"
          />
          <img
            src={usm_logo}
            alt="Universidad Técnica Federico Santa María"
            className="h-14 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Accreditation;
