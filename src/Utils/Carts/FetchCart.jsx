const FetchCart = async(accessToken) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}carts/list/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            method: "GET"
        })
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default FetchCart;
