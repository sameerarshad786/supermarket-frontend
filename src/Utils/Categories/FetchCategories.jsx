const FetchCategories = async(accessToken) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}category/search/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default FetchCategories;
