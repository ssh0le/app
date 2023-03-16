import styled from "styled-components";
import { FC } from "react";
import { baseStyle } from "../../../assets/styles/baseStyle";
import Input from "../../UI/Input";

const RangeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${baseStyle.colors.backgroundToolBarItems};
    font-size: ${baseStyle.font.oftenSize}px;
    padding: 20px 10px;
    border-radius: 5px;
    .title {
        width: 100%;
        padding-bottom:10px;
        font-weight: 500;
    }
    .input {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .subtitle {
        font-size: 16px;
        color: #707280;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
`

interface RangeProps {
    title: string,
    inputWidth: string,
    min: string,
    max: string
}

const Range:FC<RangeProps> = ({title, inputWidth, max, min}) => {

    return (
        <RangeWrapper>
            <div className="title">{title}</div>
            <div className="input">
                <div className="subtitle">From</div>
                <Input width={inputWidth} max={max} min={min} value={min}></Input>
            </div>
            <div className="input">
                <div className="subtitle">To</div>
                <Input width={inputWidth} max={max} min={min} value={max}></Input>
            </div>
        </RangeWrapper>
    )
}

export default Range;