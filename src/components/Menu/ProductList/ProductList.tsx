import styled, {css}from "styled-components";
import { FC } from "react";
import { Phone, DisplayType } from "../../../global/types";
import { data } from "../../../data/phonesExample";
import PhoneListItem from "./PhoneListItem";
import DisplayParametersBar from "./DisplayParametersBar";
import { useState } from "react";
import React from "react";

interface WrapperProps {
    gridArea: string;
    displayParametr: DisplayType
}

const tableStyle = css`
    grid-template-columns: repeat(4, 1fr);

`

const listStyle = css`
    grid-template-columns: 1fr;

`

const ListWrapper = styled.div<WrapperProps>`
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #c9cdf0;
    grid-area: ${(props) => props.gridArea};
    background-color: #dcdff5;
    border-radius: 20px;
    flex-direction: column;


    .items {
        display: grid;
        ${props => props.displayParametr === DisplayType.Table ? tableStyle : listStyle}
        padding: 0;
        margin: 0px;
        margin-top: 15px;
        gap: 10px;
    }
`;

interface ProductListProps {
    gridArea?: string;
}

const ProductList: FC<ProductListProps> = ({ gridArea }) => {
    const [displayType, setDisplayType] = useState(DisplayType.Table);
    const onDisplaySelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === "table") {
            setDisplayType(DisplayType.Table);
        } else {
            setDisplayType(DisplayType.List);
        }
    }
    const phones: Phone[] = getPhonesList(data.phones);
    return (
        <ListWrapper gridArea={gridArea || ""} displayParametr={displayType}>
            <DisplayParametersBar onDisplaySelected={onDisplaySelected} />
            <ul className='items'>
                {phones.map((phone) => (
                    <PhoneListItem phone={phone} displayType={displayType} key={phone.id} />
                ))}
            </ul>
        </ListWrapper>
    );
};

export default ProductList;

type FetchedPhone = {
    id: number;
    brand: string;
    model: string;
    price: number;
    screen_size: number;
    camera: string;
    storage: number;
    battery: number;
    ram: number;
};

function getPhonesList(phones: FetchedPhone[]): Phone[] {
    return phones.map((phone) => {
        return { ...phone, screenSize: phone.screen_size };
    });
}
