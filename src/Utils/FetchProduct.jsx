const FetchProduct = async(accessToken, queryParams) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}products/list/?${queryParams}`, {
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

export default FetchProduct;
