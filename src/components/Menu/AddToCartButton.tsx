import { FC } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px;
    background-color: #b3c0ff;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid #6f6fef;
    font-weight: 500;
`

export enum ProductType {
    Phone,
    Laptop,
    Computer

}

interface AddToCartButtonProps {
    id: number,
    productType: ProductType
}

const AddToCartButton: FC<AddToCartButtonProps> = () => {

    return(<ButtonWrapper>
        Add To Cart
    </ButtonWrapper>)
}

export default AddToCartButton;