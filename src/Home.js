import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="234324"
            title="The lean startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="1232323"
            title="Bonsenkitchen Cafetera de Goteo, Cafetera de Filtro con Programable y Temporizador, Cafeteras Electricas de 10-12 Tazas (1,5L), Filtro Reutilizable, Pantalla LED, Sistema Antigoteo"
            price={39.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/61dAIu1Ht+L._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="LATEC Pulsera Actividad Reloj Inteligente Impermeable IP68 Smartwatch Pantalla Táctil Completa con Pulsómetro Cronómetro Pulsera Deporte para Hombres Mujeres Niños con iOS y Android"
            price={39.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61q8I8ib%2BHL._AC_SX522_.jpg"
          />
          <Product
            id="23903850"
            title="Apple EarPods con clavija de 3,5 mm,"
            price={17.69}
            rating={5}
            image="https://m.media-amazon.com/images/I/41YDDVjblsL._AC_UL320_.jpg"
          />
          <Product
            id="1903850"
            title="Newskill Takamikura - Silla gaming profesional (inclinación y altura regulable, reposabrazos ajustables,"
            price={189.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81U05v8N70L._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="7903850"
            title="Pantalla HP 22w - Monitor 21.5, 1080pixeles Color Negro, Amazons chopice"
            price={109.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91hg75i2zzL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
