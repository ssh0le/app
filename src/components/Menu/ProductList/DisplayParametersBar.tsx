import styled from "styled-components";
import { baseStyle } from "../../../assets/styles/baseStyle";
import React, { FC } from "react";

const DisplayParametersBarWrapper = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    gap: 20px;
    font-weight: 500;
    border-width: 2px;
    background-color: ${baseStyle.colors.backgroundToolBarItems};

    select {
        font-size: 14px;
        padding: 3px;
        border-radius: 7px;
    }
    select:focus {
        outline: none;
    }
`

interface DisplayParametresProps {
    onDisplaySelected: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

const DisplayParametersBar: FC<DisplayParametresProps> = ({onDisplaySelected}) => {
    return (<DisplayParametersBarWrapper>
        <div className="display-parameter">
            <span>Display as: </span>
            <select name="display" onChange={onDisplaySelected}>
                <option value="table">Table</option>
                <option value="list">List</option>
            </select>
        </div>
        <div className="sortting-parameter">
            <span>Sort by: </span>
            <select name="sorting">
                <option value="sorting-asc">low to high price</option>
                <option value="sorting-asc">high to low price</option>
            </select>
        </div>
    </DisplayParametersBarWrapper>)
}

export default DisplayParametersBar;