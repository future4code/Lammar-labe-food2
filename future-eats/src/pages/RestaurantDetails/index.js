import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {baseUrl, tempToken} from "../../constants/constants"
import axios from "axios";
import {Title, Navbar, Adress, DeliveryTime, Image, ItemName, Main, PathCopy, ProductDescription, ProductDetails, ProductImage, ProductPrice, Rectangle, RestaurantCategory, RestaurantName, Shipping, TitleBar, UpperBar, ArrowImage, ButtonRectangle, Loading} from '../RestaurantDetails/styled' 
import Arrow from "../../images/arrowBack/back.png"
import * as MyRoutes from "../../routes/coodinator"
import useProtectedPage from "../../hooks/useProtectedPage";

function RestaurantDetails () {
    const pathParams = useParams()
    const [restaurantDetail, setRestaurantDetail] = useState([])
    const [isLoading, setIsLoading] = useState(undefined)
    const navigate = useNavigate()

    useProtectedPage()

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    const token = localStorage.getItem('token')

    const getRestaurantDetails = () => {
        setIsLoading(true)
        axios.get(`${baseUrl}restaurants/${pathParams.id}`, {
                headers: {
                    auth: tempToken,
                }
            })
            .then((response) => {
                console.log(response)
                setRestaurantDetail(response.data.restaurant)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }
    
    const renderProducts = () => {
        const categories = []
        const products = []

        for (let i=0; i<restaurantDetail.products.length; i++) {
            categories.push(restaurantDetail.products[i].category)
        }

        const filteredCategories = [...new Set(categories)]

        for (let y=0; y<filteredCategories.length; y++) {            
            products.push(
                <div key={y}>
                <br></br>
                <Main> {filteredCategories[y]}</Main>
                <PathCopy></PathCopy>
                {restaurantDetail.products.map(product => {
                    if (product.category === filteredCategories[y]) {
                        return (
                            <Rectangle key={product.id}> 
                                <ProductImage src={product.photoUrl} alt={product.name}></ProductImage>
                                <ProductDetails>
                                    <ItemName>{product.name}</ItemName>
                                    <ProductDescription>{product.description}</ProductDescription>
                                    <ProductPrice>{product.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</ProductPrice>
                                </ProductDetails>
                                <ButtonRectangle>
                                        <button>adicionar</button>
                                </ButtonRectangle>
                            </Rectangle>
                        )
                    }
                })}    
                </div>)
        }
        return products
    }

    return (
        <div>
            
            <Navbar>
                <UpperBar></UpperBar>
                <ArrowImage src={Arrow} onClick={() => MyRoutes.goToHomePage(navigate)}></ArrowImage>
                <TitleBar> 
                        <Title>Restaurante</Title>
                </TitleBar>
            </Navbar>
            
            {isLoading && <Loading> Carregando...</Loading>}
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
            
            <div> {restaurantDetail.products && renderProducts()} </div>
        </div>
    )
}

export default RestaurantDetails;