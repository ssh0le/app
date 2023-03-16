import styled from "styled-components";
import { FC } from "react";

interface WrapperProps {
    width: string;
}

const InputWrapper = styled.div<WrapperProps>`
    input {
        width: ${(props) => props.width};
        border: 0;
        border: 2px solid black;
        padding: 4px 7px;
        border-radius: 6px;
        font-size: 14px;
    }

    input:focus {
        outline: none;
    }
`;

interface InputProps {
    width: string,
    min: string,
    max: string,
    value: string
}

const Input: FC<InputProps> = ({ width, max, min, value }) => {
    return (
        <InputWrapper width={width}>
            <input type="number" min={min} max={max} onKeyDown={validateInput} defaultValue={value}/>
        </InputWrapper>
    );
};

export default Input;

function validateInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === '-') {
        e.preventDefault();
    }
}
