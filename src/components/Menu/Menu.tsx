import styled, { css } from "styled-components";
import sharedStyles from "../../assets/styles/sharedStyle";
import { baseStyle } from "../../assets/styles/baseStyle";
import Wrapper from "../styled/Wrapper";
import CategoriesList from "./CategoriesList";
import ToolBar from "./ToolBar/ToolBar";
import ProductList from "./ProductList/ProductList";

const WrapperStyle = css`
    ${sharedStyles};
    border: none;
    display:flex;
    justify-content: center;
`;

enum GridArea {
    Categories = 'cat',
    TooBar = 'tool',
    Main = 'main'
}

const MenuWrapper = styled.div`
    width: 96%;
    padding-bottom: 10px;
    display: grid;
    row-gap: 10px;
    column-gap: 10px;
    grid-template-columns: 280px auto;
    grid-template-rows: min-content 1fr;
    grid-template-areas: 
    '${GridArea.Categories} ${GridArea.Categories}'
    '${GridArea.TooBar} ${GridArea.Main}';
`;


const Menu = () => {
    return (
        <Wrapper style={WrapperStyle}>
            <MenuWrapper>
                <CategoriesList gridArea={GridArea.Categories}/>
                <ToolBar gridArea={GridArea.TooBar}/>
                <ProductList gridArea={GridArea.Main}/>
            </MenuWrapper>
        </Wrapper>
    );
};

export default Menu;
