export const returnToLastPage = (navigate) => {
    navigate(-1)
}

export const goToLoginPage = (navigate) => {
    navigate('/signin')
}

export const goToSignUpPage = (navigate) => {
    navigate('/signup')
}

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToRestaurantDetailsPage = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const goToCartPage = (navigate) => {
    navigate('/cart')
}

export const goToProfilePage = (navigate) => {
    navigate('/profile')
}