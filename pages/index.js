import Articulo1 from "../components/Articulo1";
// import Articulo2 from "../components/Articulo2";
import Carrusel from "../components/Carrusel";
import Combos from "../components/Combos";
import Layout from "../components/Layout";
import Promos from "../components/Promos";

const images = [
  "/img/slideshow/3.png",
  "/img/slideshow/6.png",
  "/img/slideshow/8.png",
];



export default function Home() {
  return (
    <Layout pagina={"Home"}>
      <Carrusel
        controles={true}
        autoplay={true}
        velocidad="700"
        intervalo="4500"
        images={images}
      />
      <Articulo1 />
      <Promos />
      {/* <Combos /> */}
    </Layout>
  );
}
