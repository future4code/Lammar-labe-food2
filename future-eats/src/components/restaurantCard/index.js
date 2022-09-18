import { DeliveryTime, Rectangle, RestaurantCard, RestaurantName, Shipping } from "./styled";
import {useNavigate} from "react-router-dom";
import { goToRestaurantDetailsPage } from "../../routes/coodinator";

export function RestaurantCards(props) {
    const navigate = useNavigate();

    return (
        <Rectangle>
            <RestaurantCard onClick={() => goToRestaurantDetailsPage(navigate, props.id)}>
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