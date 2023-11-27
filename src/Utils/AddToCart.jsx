const AddToCart = async(accessToken, product_id) => {
    console.log(accessToken)
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}carts/add-to-cart/${product_id}/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken.accessToken}`
            },
            method: "POST"
        })
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default AddToCart;
