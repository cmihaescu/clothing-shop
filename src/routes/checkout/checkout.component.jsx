import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import RevolutCheckout from "@revolut/checkout";
import axios from "axios";
import "./checkout.styles.scss";

export const Checkout = () => {
  const { currency, cartItems, totalPrice } = useContext(CartContext);

  useEffect(() => {
    let canceled = false;
    let revolutPay = null;
    let order_details = {
      amount: totalPrice * 100,
      currency,
    };

    RevolutCheckout.payments({
      locale: "en", // Optional, defaults to 'en'
      mode: "sandbox", // Optional, defaults to 'prod'
      publicToken: "pk_I0esVl3WyXynj8t3TeEOyAQRHC4I8gmLffztYRy981Gsw4xH", // Merchant public API key
    }).then((paymentInstance) => {
      if (canceled) {
        return;
      }

      const paymentOptions = {
        currency, // 3-letter currency code
        totalAmount: order_details.amount, // in lowest denomination e.g., cents
        redirectUrls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          cancel: "http://localhost:3000/cancellation",
        },
        createOrder: async () => {
          try {
            const order = await axios
              .post("http://localhost:4000/createOrder", order_details)
              .then((res) => {
                return res.data;
              });
            return { publicId: order.public_id };
          } catch (error) {
            console.log("Error creating Revolut payment:", error.message);
            throw error; // Re-throw the error to be caught by the caller if needed
          }
        },
      };

      revolutPay = paymentInstance.revolutPay;
      revolutPay.mount(document.getElementById("revolutPay"), paymentOptions);
    });

    return () => {
      canceled = true;
      revolutPay?.destroy();
    };
  }, [totalPrice, currency]);

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <div className="table-columns">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </div>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} product={item} />
          ))}
          <div className="totalPriceBox">
            TOTAL: {totalPrice} {currency}
            <div className="revolut-button" id="revolutPay"></div>
          </div>
        </>
      ) : (
        <h3>You have no items in your cart</h3>
      )}
    </div>
  );
};
