import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>La Mila Grosa - {pagina}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Sitio Web de venta de comida" />
        <link rel="canonical" href="https://lamilagrosa.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
