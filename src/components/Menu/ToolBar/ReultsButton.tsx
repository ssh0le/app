import styled from "styled-components";
import { baseStyle } from "../../../assets/styles/baseStyle";

const ButtonWrapper = styled.div`
    width: 100%;

    .button {
        font-size: ${baseStyle.font.oftenSize}px;
        cursor: pointer;
        padding: 5px 10px;
        border: 1px solid transparent;
        border-radius: 20px;
        background: linear-gradient(90deg, rgba(251,65,63,1) 0%, rgba(239,171,13,1) 100%);
        color: white;
    }
`;

const ResultButton = () => {
    const resultAmount: number = 0;
    return (
        <ButtonWrapper>
            <div className='button'>Show Results ({resultAmount})</div>
        </ButtonWrapper>
    );
};

export default ResultButton;
