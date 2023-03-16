import React from "react";
import styled from 'styled-components'
import sharedStyles from '../../assets/styles/sharedStyle'
import { baseStyle } from "../../assets/styles/baseStyle";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const HeaderWrapper = styled.header`
    ${sharedStyles};
    height: ${baseStyle.sizes.header}vh;
    border: none;
    font-size: ${baseStyle.font.oftenSize}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`

const Header: React.FC = () => {

    return (<HeaderWrapper>
        <Logo/>
        <SearchBar/>
        <Cart></Cart>
    </HeaderWrapper>)
}

export default Header;