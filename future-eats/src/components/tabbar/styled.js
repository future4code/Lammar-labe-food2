import styled from "styled-components";

export const Tabbar = styled.div`
    width: 360px;
    height: 49px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-top: 1px solid;
    border-color:  rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display:flex;
    position: fixed;
    bottom:0;
`
export const Tabitem1 = styled.div`
    width: 120px; 
    height: 49px; 
    padding: 11px 46px 11px 47px;

    img {
        width: 27px;
        height: 27px;
        object-fit: contain;
    }
`
export const Tabitem2 = styled.div`
    width: 120px; 
    height: 49px; 
    padding: 10px 46px 10px 47px;

    img {
        width: 27px;
        height: 29px;
        object-fit: contain;
    }
`

export const Tabitem3 = styled.div`
    width: 120px; 
    height: 49px; 
    padding: 10px 46px 9px 47px;

    img {
        width: 27px;
        height: 30px;
        object-fit: contain;
    }
`