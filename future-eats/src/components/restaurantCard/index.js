import { DeliveryTime, Rectangle, RestaurantCard, RestaurantName, Shipping } from "./styled";

export function RestaurantCards(props) {

    return (
        <Rectangle>
            <RestaurantCard>
                <img src= {props.logo}/>
                <RestaurantName>
                    {props.name}
                </RestaurantName>
                <br/>
                <DeliveryTime>
                    {props.deliveryTime} min
                </DeliveryTime>
                <Shipping>
                    R$ {props.shipping},00
                </Shipping>
            </RestaurantCard>
        </Rectangle>
    )
}