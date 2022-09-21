import styled from "styled-components";

export const SearchBox = styled.div`
    
    margin: 5px 5px 5px 15px;
    width: 328px;
    height: 56px;
    
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    display: flex;
    justify-content: flex-start;
    align-items: center;


    img {
        width: 24px;
        height: 24px;
        margin: 0 15.3px 0 15.3px;
        object-fit: contain;
    }

    input {
        outline: none;
        border:0;

        :focus {
            outline:none;
        }
    }
`