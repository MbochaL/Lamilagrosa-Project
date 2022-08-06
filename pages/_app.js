import "../styles/globals.css";
import { MenuProvider } from "../contexts/MenuContext";
import { UsuarioProvider } from "../contexts/UsuarioContext";
import { CarritoProvider } from "../contexts/CarritoContext";

function MyApp({ Component, pageProps }) {

  return (
    <MenuProvider>
      <UsuarioProvider>
      <CarritoProvider>
        <Component
          {...pageProps}
        />
        </CarritoProvider>
      </UsuarioProvider>
    </MenuProvider>
  );
}

export default MyApp;
