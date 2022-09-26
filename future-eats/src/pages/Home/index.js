import React from 'react';
import { Tabbar, Tabitem1, Tabitem2, Tabitem3 } from '../../components/tabbar/styled';
import { Navbar, Title } from '../../components/navbar/styled';
import Avatar from '../../img/avatar.svg'
import HomeIcon from '../../img/homepage.svg'
import CartIcon from '../../img/shopping-cart.svg'
import SearchIcon from '../../img/search.svg'
import { useState } from 'react';
import axios from "axios";
import { baseUrl, tempToken, restaurantListRequest } from '../../constants/constants' ;
import { useEffect } from 'react';
import { RestaurantCards } from '../../components/restaurantCard';
import { Filter } from '../../components/filter/styled';
import useForm from '../../hooks/useForm';
import { SearchBox } from '../../components/searchBox/styled';
import { Form } from 'react-router-dom';
import { RestaurantName } from '../../components/restaurantCard/styled';

function Home () {
    const [restaurantDisplay, setRestaurantsDisplay] = useState([])
    const restaurantList = []
    const [filter, setFilter] = useState("")
    const [restaurantFront, setRestaurantFront] = useState([])
    const categories = ["Árabe", "Asiática", "Hamburguer","Italiana", "Sorvetes", "Carnes", "Baiana", "Petiscos", "Mexicana" ]
    const [query, setQuery] = useState("")
    

    const handleInputQuery = (e) => {
        setQuery(e.target.value)
    }

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
        }).catch((error) => {
            console.log(error.message)
        })
    }, [])

    useEffect(() => {
        const restaurants = restaurantDisplay.filter((restaurant) => {
            if(!filter){
                return true
            }
            return restaurant.category === filter
        }).filter((restaurant) => {
            if(!query){
                return true
            }
            return restaurant.name.toUpperCase().includes(query.toUpperCase())

        }).map((restaurant) => {
            return <RestaurantCards 
                        key = {restaurant.id}
                        name = {restaurant.name}
                        logo = {restaurant.logo}
                        deliveryTime = {restaurant.deliveryTime}
                        shipping = {restaurant.shipping}
                        id = {restaurant.id}
                    />
        })
        setRestaurantFront(restaurants)
    }, [restaurantDisplay, filter, query])

    return (
        <div>
            <Navbar>
                <Title>FutureEats</Title>
            </Navbar>
            <SearchBox>
                <img src={SearchIcon} />
                <input placeholder='Restaurante' value={query} onChange = {handleInputQuery} ></input>
            </SearchBox>
            <Filter>
                {categories.map((category, index) => <span onClick={() => {
                    if(filter === category){
                        setFilter("")
                    }else{
                        setFilter(category)
                    }
                    
                }} 
                    key = {index}>{category}</span>)}
            </Filter>
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