const FetchProduct = async(searchParams, accessToken, setItems, setHasMore) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}products/list/?${searchParams}`, {
            headers: headers,
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setHasMore(data.next !== null);
            setItems(prevItems => [...prevItems, ...data.results]);
        }
    } catch(error) {
        console.log(error)
    }
}

export default FetchProduct;
