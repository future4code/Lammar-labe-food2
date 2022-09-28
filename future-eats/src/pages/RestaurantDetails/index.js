import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {baseUrl, tempToken} from "../../constants/constants"
import axios from "axios";
import {Title, Navbar, Adress, DeliveryTime, Image, ItemName, Main, PathCopy, ProductDescription, ProductDetails, ProductImage, ProductPrice, Rectangle, RestaurantCategory, RestaurantName, Shipping, TitleBar, UpperBar, ArrowImage} from '../RestaurantDetails/styled' 
import Arrow from "../../images/arrowBack/back.png"
import * as MyRoutes from "../../routes/coodinator"

function RestaurantDetails () {
    const pathParams = useParams()
    const [restaurantDetail, setRestaurantDetail] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    const token = localStorage.getItem('token')

    const getRestaurantDetails = () => {
        axios.get(`${baseUrl}restaurants/${pathParams.id}`, {
                headers: {
                    auth: tempToken,
                }
            })
            .then((response) => {
                console.log(response)
                setRestaurantDetail(response.data.restaurant)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    

    return (
        <div>
            <Navbar>
                <UpperBar></UpperBar>
                <ArrowImage src={Arrow} onClick={() => MyRoutes.goToHomePage(navigate)}></ArrowImage>
                {/*  <TitleBar> 
                        <Title>Restaurante</Title>
                    </TitleBar> */}
            </Navbar>
            
            {restaurantDetail && 
            <div>
                <Image src={restaurantDetail.logoUrl}></Image>
                <RestaurantName>{restaurantDetail.name}</RestaurantName> 
                <br></br>
                <RestaurantCategory> {restaurantDetail.category} </RestaurantCategory> 
                <br></br>
                <DeliveryTime> {restaurantDetail.deliveryTime -10} - {restaurantDetail.deliveryTime} min </DeliveryTime>
                <Shipping> Frete R$ {restaurantDetail.shipping},00 </Shipping>
                <br></br>
                <Adress>{restaurantDetail.address}</Adress>
            </div>
            }   
                <br></br>
                <Main> Principais </Main>
                <PathCopy></PathCopy>
            <div>
                    {restaurantDetail.products && restaurantDetail.products.map((product)=> {

                        return (
                            <Rectangle key={product.id}> 
                                <ProductImage src={product.photoUrl}></ProductImage>
                                <ProductDetails>
                                    <ItemName>{product.name}</ItemName>
                                    <ProductDescription>{product.description}</ProductDescription>
                                    <ProductPrice>{product.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</ProductPrice>
                                </ProductDetails>
                            </Rectangle>
                        )
                    })}

            </div>
            
        </div>
    )
}

export default RestaurantDetails;