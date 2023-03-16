import styled from "styled-components";
import { FC } from "react";

const CheckBoxWrapper = styled.div`
    label {
        display: flex;
        justify-content: flex-start;
        gap: 5px;
        padding: 2px 5px;
        align-items: center;
    }

    .checkBox {
        display: flex;
        align-items: flex-end;
        padding-top: 4px;
    }

    input {
        border-width: 2px;
    }
`;

interface CheckBoxProps {
    title: string | number;
}

const CheckBox: FC<CheckBoxProps> = ({ title }) => {
    return (
        <CheckBoxWrapper>
            <label>
                <div className='checkBox'>
                    <input type='checkbox' className='checkBox' />
                </div>
                {title}
            </label>
        </CheckBoxWrapper>
    );
};

export default CheckBox;
