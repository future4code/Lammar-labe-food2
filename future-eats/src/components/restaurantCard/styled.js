import styled from "styled-components";

export const Rectangle = styled.div`
    width: 360px;
    height: 196px;
    margin: 50px 0 0;
    padding: 8px 16px 0;
`
export const RestaurantCard = styled.div`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px;
    border-color: #b8b8b8;

    img {
        width: 328px;
        height: 120px;
        margin: 0 0 12px;
        object-fit: contain;
    }
`
export const RestaurantName = styled.span`
    width: 296px;
    height: 18px;
    margin: 12px 16px 4px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
`

export const DeliveryTime = styled.span` 
    width: 148px;
    height: 18px;
    margin: 4px 8px 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const Shipping = styled.span`
    width: 140px;
    height: 18px;
    margin: 4px 16px 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
`