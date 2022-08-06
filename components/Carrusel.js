import Image from "next/image";
import React, { useRef, useEffect, useCallback } from "react";

const Carrusel = ({
  controles = true,
  autoplay = false,
  velocidad = "700",
  intervalo = "4500",
  images,
}) => {
  const slideshow = useRef(null);

  const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current?.children.length > 1) {
      // Obtenemos el primer elemento del slideshow.
      const primerElemento = slideshow.current.children[0];

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    if (slideshow.current.children.length > 1) {
      // Obtenemos el ultimo elemento del slideshow.
      const lengthSlide = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[lengthSlide];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    let interval;
    if (autoplay && slideshow.current?.children) {
      interval = setInterval(() => {
        siguiente();
      }, intervalo);
    }
    return () => clearInterval(interval);
  }, [autoplay, intervalo, siguiente]);

  return (
    <div className="relative overflow-hidden mt-20">
      <div className="flex items-center">
        <div
          ref={slideshow}
          className={`w-[300vw] h-auto flex transition-all duration-[velocidad] ease-in z-10 relative`}
        >
          {images.map((image, index) => (
            <div className="w-[100vw] h-full relative" key={index}>
              <Image
                src={image}
                alt="imagen slideshow"
                width="1200"
                height="520"
                layout="responsive"
                objectFit="cover"
                priority="true"
              />
            </div>
          ))}
        </div>
      </div>

      {controles && (
        <div className="absolute top-0 z-20 pointer-events-none w-full h-full flex items-center">
          <button
            aria-label="Flecha a izquierda"
            className="absolute left-0 w-10 h-8 md:w-14 md:h-12 pointer-events-auto border-none cursor-pointer outline-none bg-black bg-opacity-30"
            onClick={anterior}
          >
            <Image
              src="/img/arrowl.png"
              alt="flecha izquierda"
              layout="fill"
              objectFit="contain"
            />
          </button>
          <button
            aria-label="flecha a derecha"
            className="absolute right-0 w-10 h-8 md:w-14 md:h-12 pointer-events-auto border-none cursor-pointer outline-none bg-black bg-opacity-30"
            onClick={siguiente}
          >
            <Image
              src="/img/arrowr.png"
              alt="flecha derecha"
              layout="fill"
              objectFit="contain"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrusel;
