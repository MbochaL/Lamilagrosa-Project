import Image from "next/image";

const Guarnicion = ({ guarnicion }) => {
  return (
    <li className="min-w-[117px] max-w-[100px] flex-shrink-0 snap-start">
      <Image
        src={guarnicion.imagen}
        alt={guarnicion.nombre}
        layout="responsive"
        width="500"
        height="330"
        objectFit="cover"
        className="cursor-pointer rounded-md"
      />
    </li>
  );
};

export default Guarnicion;
