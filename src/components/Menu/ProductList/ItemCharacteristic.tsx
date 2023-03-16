import { FC } from "react";
import styled from "styled-components";

const ItemCharacteristicWrapper = styled.div`
    .characterisitic-title {
        display: inline-block;
        font-weight: 500;
        font-size: 18px;
        margin-right: 10px;
        
        color: #28282c;
    }

    p {
        text-align: left;
        margin: 0;
    }

`

interface PhoneCharacteristicProps {
    title: string,
    description: string | number;
}

const ItemCharacteristic:FC<PhoneCharacteristicProps> = ({title, description}) => {

    return(
        <ItemCharacteristicWrapper>
            <p><span className="characterisitic-title">{title}:</span>{description}</p>
        </ItemCharacteristicWrapper>
    )
}

export default ItemCharacteristic;