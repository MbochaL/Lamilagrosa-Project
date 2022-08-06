import Link from "next/link";
import React, { useState, useEffect } from "react";

const Articulo1 = () => {
  const [quotes, setQuotes] = useState([]);

  const Frases = [
    "Una milanesa no soluciona tus problemas pero ayuda bastante",

    "Mal humor: Milanesas, Mal de amor: Milanesas, Ansiedad: Milanesas, Calma: Milanesas, Tristeza: Milanesas, Felicidad: Milanesas, (Con papas)",

    "Mi cerebro me dice: 'Gimnasio', pero mi corazón me dice: 'Milanesas con papas fritas'",

    'Un "Te Amo" jamas superara un "Traje milas de LaMilaGrosa"',

    "No dejes para mañana lo que puedas comer hoy!!!",

    // "La cocina donde cabemos todos",

    // "Sazón y sabor a un costo menor",

    // "Un mundo de sabores a un click de distancia",

    // "Creando experiencias únicas para tu paladar",

    // "No es solo comida, es amor en cada bocado",

    // "Frescura y sabor son tu mejor opción",

    // "Cada platillo está hecho con el corazón",

    // "El verdadero sabor de una cocina mexicana",

    // "Calidad y amor en cada cucharada",

    // "Alimentos frescos y saludables siempre",

    "-Sabias que sos el amor de mi vida? -Hija, deja de hablar con la milanesa!",

    "-Hijo, si tenes 10 milanesas y te piden 3, cuantas te queda? -10. -Muy bien hijo, las milanesas no se comparten!",

    "Hay amores quie duran para toda la vida, como el amor a la milanesa, ese es infinitamente infinito",

    "Hay 3 cosas en la vioda que no se rechazan, La siesta, cerveza fria y milanesas",

    "Si no eres feliz sin pareja tampoco lo vas a ser con pareja, la felicidad viene de las Milanesas, no de la gente",

    "Que mas le podemos pedir a la vida?. Milanesas, siempre!",
  ];

  const RandomQuotes = async () => {
    const Frases = [
      {
        quote: "Que mas le podemos pedir a la vida?. Milanesas, siempre!",
      },
      {
        quote:
          "Si no eres feliz sin pareja tampoco lo vas a ser con pareja, la felicidad viene de las Milanesas, no de la gente",
      },
      {
        quote:
          "Hay 3 cosas en la vida que no se rechazan, La siesta, cerveza fria y milanesas",
      },
      {
        quote:
          "Hay amores que duran para toda la vida, como el amor a la milanesa, ese es infinitamente infinito",
      },
      {
        quote:
          "-Hijo, si tenes 10 milanesas y te piden 3, cuantas te queda? -10. -Muy bien hijo, las milanesas no se comparten!",
      },
      {
        quote:
          "-Sabias que sos el amor de mi vida? -Hija, deja de hablar con la milanesa!",
      },
      {
        quote:
          "Mal humor: Milanesas, Mal de amor: Milanesas, Ansiedad: Milanesas, Calma: Milanesas, Tristeza: Milanesas, Felicidad: Milanesas, (Con papas)",
      },
      {
        quote:
          'Mi cerebro me dice: "Gimnasio", pero mi corazón me dice: "Milanesas con papas fritas"',
      },
      {
        quote: "No dejes para mañana lo que puedas comer hoy!!!",
      },
      {
        quote: "Una milanesa no soluciona tus problemas pero ayuda bastante",
      },
      {
        quote: 'Un "Te Amo" jamas superara un "Traje milas de LaMilaGrosa"',
      },
      // {
      //   quote: "Sazón y sabor a un costo menor",
      // },
      // {
      //   quote: "Un mundo de sabores a un click de distancia",
      // },
      // {
      //   quote: "Creando experiencias únicas para tu paladar",
      // },
      // {
      //   quote: "No es solo comida, es amor en cada bocado",
      // },
      // {
      //   quote: "Frescura y sabor son tu mejor opción",
      // },
      // {
      //   quote: "Cada platillo está hecho con el corazón",
      // },
      // {
      //   quote: "Calidad y amor en cada comida",
      // },
    ];
    const randomQuote = Math.floor(Math.random() * Frases.length);
    setQuotes(Frases[randomQuote].quote);
  };

  useEffect(() => {
    RandomQuotes();
  }, []);

  return (
    <div className="w-full max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[50%] mx-auto flex flex-col text-center items-center mt-10 md:mt-16 lg:mt-24 xl:mt-24">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-700 mx-auto tracking-wide">
        {quotes}
      </h2>
      <h2 className="md:text-xl lg:text-2xl text-black font-semibold mx-auto tracking-wide mt-8 md:mt-16 lg:mt-24 xl:mt-32 mb-4">
        Date el gusto con nuestra amplia variedad de menúes
      </h2>
      <Link href="/menu">
        <button className="py-2.5 lg:text-lg px-6 text-white font-semibold text-md bg-blue-600 rounded-xl uppercase shadow-md shadow-blue-900 hover:shadow-2xl transform transition-all over:-translate-y-2 duration-200 hover:scale-110 hover:-rotate-3 text-xs border-4 border-double hover:border-double hover:border-blue-700 hover:bg-white hover:text-blue-600 hover:font-black ">
          Menú
        </button>
      </Link>
    </div>
  );
};

export default Articulo1;
