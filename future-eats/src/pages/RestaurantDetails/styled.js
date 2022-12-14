import styled from "styled-components";
import StyledGlobal from "../../StyledGlobal";

export const Title =styled.span`
    width: 84px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
`

export const UpperBar = styled.div`
    width: 360px;
    height: 20px;
    padding: 0 5px 0 0;
`
export const TitleBar = styled.div `
    width: 175px;
    height: 44px;
    margin: 20px 92px 20px 54px;
    padding: 13px 45.5px 12px;
`
export const Navbar = styled.div`
    width: 360px;
    height: 64px;
    margin: 0 0 17px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;

`
export const ArrowImage = styled.img`
    width: 23px;
    height: 24px;
`

export const Image = styled.img `
    width: 328px;
    height: 120px;
    margin: 17px 16px 12px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const RestaurantName =styled.span `
    width: 328px;
    height: 18px;
    margin: 12px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
` 
export const RestaurantCategory =styled.span`
    width: 104px;
    height: 18px;
    margin: 8px 8px 8px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const DeliveryTime = styled.span` 
    width: 104px;
    height: 18px;
    margin: 8px 8px 10px 16px;
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
    width: 104px;
    height: 18px;
    margin: 8px 128px 10px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;    
`

export const Adress = styled.span `
    width: 328px;
    height: 18px;
    margin: 10px 16px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;

`

export const Main = styled.span `
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
`

export const PathCopy = styled.div `
    width: 328px;
    height: 1px;
    margin: 0 16px 7px;
    border: solid 1px black;
    background-color: black
`

export const ItemName =styled.div`
    width: 167px;
    height: 18px;
    margin: 18px 49px 8px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
`
export const Rectangle = styled.div `
    width: 328px;
    height: 112px;
    margin: 7px 16px 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    flex-direction: row;

`
export const ProductImage = styled.img `
    width: 96px;
    height: 110px;
    margin: 0 16px 0 0;
    object-fit: cover;
    border-top-left-radius: 6.8px;
    border-bottom-left-radius: 6.8px;
`

export const ProductDescription = styled.span `
    width: 200px;
    height: 30px;
    margin: 8px 16px 4px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`

export const ProductPrice = styled.span `
    width: 118px;
    height: 19px;
    margin: 4px 8px 15px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
`

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonRectangle = styled.div `
    width: 91px;
    height: 31px;
    /* margin: 7px 0 0 8px; */
    margin-top: 80px;
    margin-left: -108px;
    padding: 8px 20.5px 9px 21.5px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px #5cb646;

    button {
        width: 48px;
        height: 14px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        text-align: center;
        color: #5cb646;
        display: flex;
    }
`

export const Loading = styled.div`
    display:flex;
    justify-content: center;
    align-content: center;
    text-align: center;
`