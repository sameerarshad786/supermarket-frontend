const FetchMessages = async({ accessToken }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}bot-messages/list/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE4MDg4OTAyLCJpYXQiOjE3MTcyMjQ5MDIsImp0aSI6IjVjOGMwNGRhZWRlMTQzM2NiYWVjNjkxMWExMWU4NzE1IiwidXNlcl9pZCI6MX0.-B1v8q2u_9_cuHc7ek6aNwR89P_wb0vxd9m57kuNd0M`
            },
            method: "GET"
        })
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default FetchMessages;
