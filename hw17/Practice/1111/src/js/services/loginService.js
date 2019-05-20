import {Routing} from './routing.service'
export function LoginService(info) {
    return new Promise ( (resolve) => {
        fetch ("https://mostlikedperson-api.herokuapp.com/api/public/auth/login", {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
            'Content-type': 'application/json' 
            }
        }).then((response) => response.json())
        .then((response) => {
        localStorage.setItem('user_token', response.token);  
        localStorage.setItem('user_id', response.id)
        resolve (response);
        })
    })  

}