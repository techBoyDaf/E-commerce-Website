import React,{ useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItems = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {cartItems,addToCart,removeFromCart,updateCartAmount} = useContext(ShopContext)

    return (  
        <div className="cartItem">
            <img alt="" src= {productImage} />
            <div className="description">
                <p>{productName}</p>
                <p>${price}</p>
            </div>
            <div className="countHandler">
                <button onClick={()=> removeFromCart(id)}> - </button>

                <input value={cartItems[id]} onChange={(e)=> updateCartAmount  (e.target.value,id)} />

                <button onClick={()=> addToCart(id)}> + </button>
            </div>

            
        </div>
    );
}
 
export default CartItems ;