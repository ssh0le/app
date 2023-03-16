import styled from "styled-components";
import { FC } from "react";

const CategoryWrapper = styled.div`
    padding: 4px 7px 2px 7px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s linear;

    &:hover {
        border-bottom: 2px solid white;
    }
`;

export interface CategoryProps {
    name: string;
    className?: string
}

const Category: FC<CategoryProps> = ({ name, className}) => {
    return (
        <CategoryWrapper className={className !== 'undefiend' ? className : ''}>
            {name}
        </CategoryWrapper>
    );
};

export default Category;
