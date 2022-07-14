

export const setUsername = (username) => {
    console.log(username)
    return{
        type:"ONCHANGE_USERNAME", 
        payload:username
    }
}

export const setPassword = password => {
    return {
        type:'ONCHANGE_PASSWORD',
        payload:password
    }
}

export const setFirstname = (firstname) => {
    return {
        type:'ONCHANGE_FIRSTNAME',
        payload:firstname
    }
}

export const setLastname = (lastname) => {
    return {
        type:'ONCHANGE_LASTNAME',
        payload:lastname
    }
}