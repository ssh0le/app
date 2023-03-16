import styled from "styled-components";
import { FC } from "react";
import cartLogo from '../../assets/images/cart.png'

const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    border: 2px solid black;
    width: 100px;
    padding: 5px;
    cursor: pointer;
    
    .cart-logo {
        height: 35px;
    }
`

const Cart: FC = () => {

    return (
        <CartWrapper>
            <span>Cart</span>
            <img src={cartLogo} alt="" className="cart-logo"/>
        </CartWrapper>
    )
}

export default Cart;