import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const [value, setValue] = useState(0);
  /*const sumItems = () => {
     let total = basket.map((item) => item.price);
    let result = 0;
  for (let i = 0; i < basket.length; i++) {
       result = total[0] + result;
     }
     return result;
   };*/

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
