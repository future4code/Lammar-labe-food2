import styled from "styled-components";

export const CartContainer = styled.div`
    width: 20vw;
    height: 80vh;
    align-items: center;
    font-size: 0.8rem;
    margin-left: 90px;
    padding:10px;
    margin-top: 10px;
    box-shadow: 2px 2px 5px 2px Lightgray;
    border-radius: 5px;
    background-color: white;

    p{
        text-align:center;
        
    }

    h2{
        text-align:center;
    }
`

export const ProductOnCart = styled.div`
 
    width: 19vw;
    height: 8vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 5px;
    box-shadow: 2px 2px 5px 2px lightgray;
    margin: 5px 0;
    border-radius: 5px;
    > button {
        padding: 1px;
        border-radius:10px;
        &:hover {
            cursor: pointer;
        }
    }
`
