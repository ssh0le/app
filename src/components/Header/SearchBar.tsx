import styled from "styled-components";
import { baseStyle } from "../../assets/styles/baseStyle";
import glass from "../../assets/images/glass.png";

const SearchBarWrapper = styled.div`
    margin: auto;
    justify-content: center;
    form {
        display: inline-flex;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        justify-content: space-evenly;
    }

    input {
        margin-left: 10px;
        width: 250px;
        border: 0;
        font-size: ${baseStyle.font.searchSize}px;
        background: ${baseStyle.colors.backgroundMain};
    }
    .search-icon {
        width: 20px;
        height: 20px;
    }

    input:focus {
        outline: none;
    }
`;

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <form action='#' id='fast-search-form'>
                <img src={glass} alt='' className='search-icon' />
                <input
                    type='search'
                    name='search-query'
                    className='search-field'
                    placeholder='Looking for something?'
                />
            </form>
        </SearchBarWrapper>
    );
};

export default SearchBar;
