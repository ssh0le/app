import styled from "styled-components";
import { baseStyle } from "../../assets/styles/baseStyle";
import { FC } from "react";
import Category from "./Category";

interface WrapperProps {
    gridArea: string
}
const ListWrapper = styled.div<WrapperProps>`
    height: ${baseStyle.menu.categories.height}px;
    font-size: 17px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(90deg, rgba(157,63,251,1) 0%, rgba(20,140,207,1) 100%);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 20px;
    gap: 10px;
    color: white;
    grid-area: ${props => props.gridArea};

`

interface CategoriesListProps {
    gridArea?: string,
}

const categories = [{
    name: "Smartphones"
},{
    name: "Computers"
},{
    name: "Laptops"
},]

const CategoriesList:FC<CategoriesListProps> = ({gridArea}) => {
    return (
        <ListWrapper gridArea={gridArea || ''}>
            {categories.map(item => <Category name={item.name} key={item.name}/>)}
        </ListWrapper>
    )
}

export default CategoriesList;