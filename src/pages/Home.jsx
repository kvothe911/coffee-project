import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Separator from "../components/Separator";
import Scroll from "../components/ScrollPercentage";
import CardHomeL from "../components/CardHomeL";
import CardHomeR from "../components/CardHomeR";

import testImg from "/src/assets/cards/test.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-svh xl:h-screen bg-[url('/src/assets/main/hero-coffee-4.jpg')] bg-cover bg-no-repeat xl:bg-center bg-[center_left_80%] ">
        {/* Puedes poner contenido adicional aquí si es necesario */}
        <div className="absolute sm:ml-0 top-[40%] flex flex-col w-screen justify-center items-center lg:items-start translate-x-0 lg:top-[35%] left-0 ">
          <h2 className="mx-4 lg:ml-10 font-playfairI text-4xl text-amber-50 max-w-80 lg:max-w-[26rem] xl:max-w-none ">
            Descubre el Alma del Café en Cada Grano
          </h2>
          <div className="absolute top-40 lg:top-32 w-full mt-0 mx-4 lg:ml-10 flex flex-col justify-center items-center lg:items-start gap-6 lg:max-w-[22rem] max-w-none">
            <Link
              to="/methods"
              className="font-playfairI text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-amber-50 bg-[#2E241D] text-amber-50"
            >
              Aprende a preparar un buen café
            </Link>
            <Link
              to="/history"
              className="font-playfairI text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-[#432A19] bg-orange-300  text-[#432A19]"
            >
              Sumérgete en la Historia del Café
            </Link>
            <Link
              to="/coffeecocktails"
              className="font-playfairI text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-amber-50 bg-[#2E241D] text-amber-50"
            >
              Explora los Cócteles de Café
            </Link>
          </div>
        </div>
      </div>
      <Separator />
      <h4 className="max-w-[1024px] mx-6 my-12 lg:mx-auto text-center font-playfairI md:text-2xl text-amber-50 tracking-wide">
        "Cada taza de café cuenta una historia: una historia de trabajo, amor y
        dedicación. Aquí, te invitamos a descubrir las raíces de esta bebida
        fascinante, explorar sus innumerables formas de preparación y disfrutar
        del arte que surge en cada sorbo. Bienvenido a un mundo donde el café es
        mucho más que una simple bebida; es una tradición viva."
      </h4>
      <Separator />
      <CardHomeL
        img={testImg}
        title={"Historia del Café"}
        description={
          "Desde las colinas de Etiopía hasta las cafeterías modernas, el café ha viajado a través de siglos y continentes. Descubre cómo una simple semilla cambió la historia del mundo y se convirtió en la bebida más querida por millones."
        }
        button={"Conoce más sobre la Historia del Café"}
      />
      <Separator />
      <CardHomeR 
      img={testImg}
      title={"Proceso del Café"}
      description={
        "Detrás de cada taza perfecta hay un proceso complejo. Desde la cosecha hasta el tostado, descubre las etapas clave que transforman el grano verde en el café aromático que todos amamos."
      }
      button={"Descubre el Proceso del Café"}
      />
      <Separator />
      <CardHomeL 
      img={testImg}
      title={"La Planta del Cafeto"}
      description={
        "Del árbol a la taza. Descubre las variedades de cafeto, cómo influyen en el sabor del café y qué hace que algunas de ellas sean tan apreciadas en todo el mundo."
      }
      button={"Descubre el Mundo del Cafeto"}
      />
      <Separator />
      <CardHomeR 
      img={testImg}
      title={"Métodos de Preparación del Café"}
      description={
        "¿Qué hace que un café sea perfecto? Conoce los secretos de los baristas para preparar la taza ideal, desde los métodos tradicionales hasta las técnicas más modernas."
      }
      button={"Ver Métodos de Preparación"}
      />
      <Separator />
      <CardHomeL 
      img={testImg}
      title={"Estilos de Café"}
      description={
        "¿Latte, Cappuccino o Flat White? Conoce las diferencias entre los estilos de café más populares y encuentra tu favorito."
      }
      button={"Ver Estilos de Café"}
      />
      <Separator />
      <CardHomeR 
      img={testImg}
      title={"Latte Art"}
      description={
        "La espuma es el lienzo, la leche es la pintura. Descubre cómo hacer corazones, tulipanes y otras figuras en tu latte con sencillos pasos."
      }
      button={"Domina el Arte del Latte"}
      />
      <Separator />
      <CardHomeL 
      img={testImg}
      title={"Café Cocktail"}
      description={
        "El café no es solo para las mañanas. Aprende a preparar cócteles deliciosos y sofisticados con café, perfectos para disfrutar en cualquier ocasión."
      }
      button={"Descubre Recetas de Café Cocktail"}
      />
    </>
  );
}

export default Home;
