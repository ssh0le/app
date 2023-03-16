import styled from "styled-components";
import { FC } from "react";
import ResultButton from "./ReultsButton";
import SortCharacteristicsList from "./SortCharacteristicsList";

interface WrapperProps {
    gridArea: string
}
const ToolBarWrapper = styled.aside<WrapperProps>`
    grid-area: ${props => props.gridArea};
    background-color: #dcdff5;
    height: fit-content;
    display: flex;
    gap: 10px;
    flex-grow: 1;
    flex-direction: column;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid #c9cdf0;
    border-radius: 20px;
`

interface ToolBarProps {
    gridArea?: string,
}

const ToolBar:FC<ToolBarProps> = ({gridArea}) => {

    return (<ToolBarWrapper gridArea={gridArea || ''}>
        <SortCharacteristicsList/>
        <ResultButton/>
    </ToolBarWrapper>)
}

export default ToolBar;