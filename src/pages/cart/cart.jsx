import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItems from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();

  const TotalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Object.entries(cartItems).filter(([id,count]) => {
          return count !== 0;
        }).map(([id,count]) => {
          return <CartItems key={id} data={PRODUCTS.find((product) =>product.id === Number(id))} />;
        })}
        ;
      </div>
      {TotalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal:${TotalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is empty Please add items to your cart</h1>
      )}
    </div>
  );
};

export default Cart;
