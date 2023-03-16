import { FC } from "react";
import styled, { css } from "styled-components";
import AddToCartButton, { ProductType } from "../AddToCartButton";
import { Phone, DisplayType } from "../../../global/types";
import image from "../../../assets/images/image.png";
import ItemCharacteristic from "./ItemCharacteristic";
import { baseStyle } from "../../../assets/styles/baseStyle";

interface PhoneItemWrapperProps {
    displayType: DisplayType;
}

const tableStyle = css`
    flex-direction: column;
    padding: 10px;

    .cart-and-price {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

const listStyle = css`
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 10px 30px;

    .image-and-name {
        display: flex;
        flex-direction: column-reverse;
    }

    .cart-and-price {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 0;
    }
`;

const PhoneItemWrapper = styled.li<PhoneItemWrapperProps>`
    list-style-type: none;
    display: flex;
    gap: 10px;
    ${(props) =>
        props.displayType === DisplayType.Table ? tableStyle : listStyle}
    background-color: ${baseStyle.colors.backgroundListItems};
    border: 3px solid #d1d4eb;
    border-radius: 10px;
    font-size: 17px;

    .image {
        display: flex;
        justify-content: center;
    }

    .image img {
        height: 100%;
        opacity: 0.6;
    }

    .characteristics {
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex-grow: 1;
    }

    .phone-name {
        font-weight: 500;
        font-size: 18px;
    }

    .price {
        font-size: 19px;
        font-weight: 500;
    }

`;

interface PhoneListItemProps {
    phone: Phone;
    displayType: DisplayType;
}

const PhoneListItem: FC<PhoneListItemProps> = ({ phone, displayType }) => {
    return (
        <PhoneItemWrapper displayType={displayType}>
            <div className='image-and-name'>
                <div className='image'>
                    <img src={image} alt='' />
                </div>
                <div className='phone-name'>
                    {phone.brand} {phone.model}
                </div>
            </div>
            <div className='characteristics'>
                <ItemCharacteristic
                    title={"Camera"}
                    description={phone.camera}
                />
                <ItemCharacteristic
                    title={"Screen size"}
                    description={phone.screenSize + "inch"}
                />
                <ItemCharacteristic
                    title={"Storage"}
                    description={phone.storage + "GB"}
                />
                <ItemCharacteristic
                    title={"RAM"}
                    description={phone.ram + "GB"}
                />
                <ItemCharacteristic
                    title={"Battery"}
                    description={phone.battery + "mAh"}
                />
            </div>
            <div className='cart-and-price'>
                <div className='price'>{phone.price}$</div>
                <AddToCartButton
                    id={phone.id}
                    productType={ProductType.Phone}
                />
            </div>
        </PhoneItemWrapper>
    );
};

export default PhoneListItem;
