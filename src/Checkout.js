import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/amazonservices/seller_success_stories/2020/07_cosmetica_de_maria/ES-CosmeticaMaria_editorial_1x._CB410412136_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h3>{user?.email}</h3>
          <h2>Your Shopping Basket:</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal is:</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
