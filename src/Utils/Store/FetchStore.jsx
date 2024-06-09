const FetchStore = async(accessToken, setItem, setIsLoading, storeId) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}store/${storeId}/`, {
            headers: headers,
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setItem(data);
        }
    } catch(error) {
        console.log(error)
    } finally {
        setIsLoading(false)
    }
}

export default FetchStore;
