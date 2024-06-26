const AddToCart = async(accessToken, product_id, setOnCart) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}carts/add-to-cart/${product_id}/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            method: "POST"
        })
        if (response.ok) {
            setOnCart(true)
        }
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default AddToCart;
