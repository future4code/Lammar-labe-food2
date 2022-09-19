import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {baseUrl, tempToken} from "../../constants/constants"
import axios from "axios";
import { Navbar, Title } from '../../components/navbar/styled';
import {Adress, DeliveryTime, Image, ItemName, Main, PathCopy, ProductDescription, ProductDetails, ProductImage, ProductPrice, Rectangle, RestaurantCategory, RestaurantName, Shipping} from '../RestaurantDetails/styled' 


function RestaurantDetails () {
    const pathParams = useParams()
    const [restaurantDetail, setRestaurantDetail] = useState([])

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
                <Title>Restaurante</Title>
            </Navbar>
            {restaurantDetail && 
            <div>
                <Image src={restaurantDetail.logoUrl}></Image>
                <RestaurantName>{restaurantDetail.name}</RestaurantName> 
                <br></br>
                <RestaurantCategory> {restaurantDetail.category} </RestaurantCategory> 
                <br></br>
                <DeliveryTime> {restaurantDetail.deliveryTime} min </DeliveryTime>
                <Shipping> Frete R${restaurantDetail.shipping}</Shipping>
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
                                    <ProductPrice>R${product.price}</ProductPrice>
                                </ProductDetails>
                            </Rectangle>
                        )
                    })}

            </div>
            
        </div>
    )
}

export default RestaurantDetails;