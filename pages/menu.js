import Layout from "../components/Layout";
import ProductList from "../components/ProductList"
import { MenuContextData } from "../contexts/MenuContext";
import { useContext } from "react";

const menu = () => {
  const {menuGlobal,guarnicionGlobal} = useContext(MenuContextData);
  return (
    <Layout pagina={"Lista de Menues"}>
      <div className="mt-20">
        <ProductList carta={menuGlobal} guarniciones={guarnicionGlobal} />;
      </div>
    </Layout>
  );
};
export default menu;
