const FetchLogin = async(email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}user/login/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        return await response
    } catch(error) {
        console.log(error)
    }
}

export default FetchLogin;
