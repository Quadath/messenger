export const RegisterRequest = (username, password) => {
    const body = {
        type: "register",
        username: username,
        password: password
    }
    return SendData(body);
}   

async function SendData(data) {
    const URL = 'http://34.203.247.249:5000/post';
    return fetch(URL, {
        cache: "no-cache",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(function(data) {
        console.log(data)
        return data.json()
      })
}