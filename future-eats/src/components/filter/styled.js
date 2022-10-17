import styled from "styled-components";

export const Filter = styled.div`
    width: 360px;
    height: 42px;
    margin: 8px 0 0;
    padding: 12px 0 12px 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    overflow-y: scroll;
    overflow-x:grid-auto-flow;
    -webkit-overflow-scrolling: touch;

    span {
        width: 87px;
        height: 18px;
        margin: 0 8px 0 0;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: black;
}
`