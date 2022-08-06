import PromoImg from "../public/img/PromoImg.png";
import PromoImg2 from "../public/img/PromoImg2.png";
import PromoImg3 from "../public/img/PromoImg3.png";
import PromoImg4 from "../public/img/PromoImg4.png";
import PromoCard from "./PromoCard";

export default function Promos() {
  return (
    <div className="pt-10 md:pt-15 lg:pt-20 xl:pt-25 pb-32">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 w-full text-center border-t-4 border-b-4 border-double border-white shadow-sm mb-16">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-white py-2 md:py-3">
          Promociones Grosas!
        </h1>
      </div>

      <div className="max-w-[90%] pt-14 mx-auto flex flex-col lg:flex-row gap-8">
        {/* Promo1 */}
        <PromoCard
          imagen={PromoImg}
          titulo="Promo Saludable"
          contenido1="Porque cuidarse tambien es groso, los miercoles obtené un 20%
                  de descuento en tu menu vegano o vegetariano."
          contenido2="Promocion valida para consumo en el local abonando en
                  efectivo"
          fondo="bg-blue-500 to-blue-500"
          color="blue"
          descuento="20"
          hover="hover:bg-blue-600  hover:text-white hover:border-blue-800"
        />
        {/* Promo2 */}
        <PromoCard
          imagen={PromoImg2}
          titulo="Promo Sandwiches"
          contenido1="Los Viernes y Sabados obtene un 15% de descuento en nuestros
                  Sandwiches mas Grosos!"
          contenido2="Promocion valida solo para delivery abonando en efectivo o debito"
          fondo="bg-red-500 to-red-500"
          color="red"
          hover="hover:bg-red-600 hover:text-white hover:border-red-800"
          descuento="15"
        />
      </div>

      <div className="max-w-[90%] pt-14 mx-auto flex flex-col lg:flex-row gap-8">
        {/* Promo3 */}
        <PromoCard
          imagen={PromoImg3}
          titulo="Promo Amigos"
          contenido1="Porque la amistad es grosa!, los jueves disfruta de un 15% de
                  descuento comprando dos menues de nuestras MilaGosas!"
          contenido2="Promocion valida para consumo en el local abonando en
                  efectivo"
          fondo="bg-blue-500 to-blue-500"
          color="blue"
          descuento="15"
          hover="hover:bg-blue-600  hover:text-white hover:border-blue-800"
        />
        {/* Promo4 */}
        <PromoCard
          imagen={PromoImg4}
          titulo="Promo Romantica"
          contenido1="El amor tambien es groso!, los Domingos veni a disfrutar con
                  tu pareja y obtene un 20% de descuento en cualquier menu."
          contenido2="Promocion valida para consumo en el local y abonando en
                  efectivo"
          fondo=" bg-red-500 to-red-500"
          color="red"
          descuento="20"
          hover="hover:bg-red-600 hover:text-white hover:border-red-800"
        />
      </div>
    </div>
  );
}
