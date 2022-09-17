import React from 'react';
import { Tabbar, Tabitem1, Tabitem2, Tabitem3 } from '../../components/tabbar/styled';
import { Navbar, Title } from '../../components/navbar/styled';
import Avatar from '../../img/avatar.svg'
import HomeIcon from '../../img/homepage.svg'
import CartIcon from '../../img/shopping-cart.svg'
import { useState } from 'react';
import axios from "axios";
import { baseUrl, tempToken, restaurantListRequest } from '../../constants/constants' ;
import { useEffect } from 'react';
import { RestaurantCards } from '../../components/restaurantCard';

function Home () {
    const [restaurantDisplay, setRestaurantsDisplay] = useState([])
    const restaurantList = []
    const [filter, setFilter] = useState("")
    const [restaurantFront, setRestaurantFront] = useState([])

    useEffect(() => {
        restaurantListRequest.then((response) => {
            response.data.restaurants.map((restaurant) => {
                restaurantList.push({
                    id : restaurant.id,
                    name : restaurant.name,
                    category : restaurant.category,
                    description : restaurant.description,
                    deliveryTime : restaurant.deliveryTime,
                    address : restaurant.address,
                    shipping : restaurant.shipping,
                    logo : restaurant.logoUrl                     
                })
            })
            setRestaurantsDisplay(restaurantList)
            setFilter(filter)
        }).catch((error) => {
            console.log(error.message)
        })
    }, [])

    useEffect(() => {
        const restaurants = restaurantDisplay.map((restaurant) => {
            return <RestaurantCards 
                        key = {restaurant.id}
                        name = {restaurant.name}
                        logo = {restaurant.logo}
                        deliveryTime = {restaurant.deliveryTime}
                        shipping = {restaurant.shipping}
                    />
        })
        setRestaurantFront(restaurants)
    }, [filter])

    

        

    return (
        <div>
            <Navbar>
                <Title>FutureEats</Title>
            </Navbar>
            {restaurantFront && restaurantFront}
            <Tabbar>
                <Tabitem1>
                    <img src = {HomeIcon} />
                </Tabitem1>
                <Tabitem2>
                    <img src = {CartIcon} />
                </Tabitem2>
                <Tabitem3>
                    <img src = {Avatar} />
                </Tabitem3>
            </Tabbar>
        </div>
    )
}

export default Home;