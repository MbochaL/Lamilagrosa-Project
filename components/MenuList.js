import MenuCard from "./MenuCard";

const MenuList = ({ carta, tipoMenu,guarniciones }) => {
  return (
    <ul className="max-w-[85%] mx-auto text-decoration-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:pag-4">
      {
        tipoMenu==="Guarnicion" ? (
          guarniciones.map((item,i)=>{
            return(
              <MenuCard item={item} tipo="guarnicion" key={i} />
            )
          })
        ):(
          tipoMenu === "Todos"
        ? carta?.map((item, i) => <MenuCard item={item} tipo="menu" key={i} />)
        : carta
            .filter((item) => item.nombre.includes(tipoMenu))
            .map((item, i) => <MenuCard item={item} tipo="menu" key={i} />)
        )
      }
    </ul>
  );
};

export default MenuList;
