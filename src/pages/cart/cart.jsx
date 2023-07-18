import React,{useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItems from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

    const Cart = () => {
        const {cartItems,getTotalCartAmount} = useContext(ShopContext)

        const navigate = useNavigate()

        const TotalAmount = getTotalCartAmount();

        return ( 
            <div className="cart">
                  <div>
                    <h1>Your Cart Items</h1>
                    </div>  
                    <div className="cart">
                    {PRODUCTS.filter((product)=>{
                      return product.id !==0;}).map((product) => {
                        return <CartItems key={product.id} data={product} /> 
                      })
                            
                        };
                    </div>
                    {TotalAmount > 0 ? (
                        <div className="checkout">
                        <p>Subtotal:${TotalAmount}</p>
                        <button onClick={()=> navigate("/")}>Continue Shopping</button>
                        <button >Checkout</button>
                    </div>
                    ) : <h1>Your Cart is empty Please add items to your cart</h1>}
                    
            </div>
         );
    }
     
    export default Cart;