const RemoveFromCart = async(accessToken, product_id, setOnCart) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}carts/remove-from-cart/${product_id}/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            method: "DELETE"
        })
        if (response.ok) {
            setOnCart(false)
        }
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default RemoveFromCart;
