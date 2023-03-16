import styled, { css } from "styled-components";
import { FC } from "react";
import CheckBox from "../../UI/CheckBox";
import { baseStyle } from "../../../assets/styles/baseStyle";


enum ContentWidthType {
    Short,
    Long
}

interface WrapperProps {
    styleType: ContentWidthType
}

const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
`
const flexStyle = css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const SelectWrapper = styled.div<WrapperProps>`
    background-color: ${baseStyle.colors.backgroundToolBarItems};
    font-size: ${baseStyle.font.oftenSize}px;
    padding: 20px 10px;
    border-radius: 5px;
    .title {
        width: 100%;
        padding-bottom:10px; 
        font-weight: 500;
    }
    .options {
        flex-grow: 1;
        ${props => props.styleType === ContentWidthType.Long ? gridStyle : flexStyle}
    }
`;

interface SelectProps {
    title: string;
    options: string[] | number[];
}

const Select: FC<SelectProps> = ({ title, options }) => {
    const contentWidthType = getContentWidthType(options);
    return (
        <SelectWrapper styleType={contentWidthType}>
            <div className='title'>{title}</div>
            <div className="options">
                {options.map(option => <CheckBox title={option} key={option}/>)}
            </div>
        </SelectWrapper>
    );
};

export default Select;

function getContentWidthType(options: string[] | number[]) : ContentWidthType {
    const shortLengthRatio = 4;
    for (let i = 0; i < options.length; i++) {
        if (options[i].toString().length > shortLengthRatio) {
            return ContentWidthType.Long;
        }
    }
    return ContentWidthType.Short;
}