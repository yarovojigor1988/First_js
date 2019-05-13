// export class HomeComponent {
//     constructor () {

//     }
//     render() {
//         return `
//         <div>Home</div>`
//     }
// }
export function AuthService(info) {
      
        fetch ("https://mostlikedperson-api.herokuapp.com/api/public/auth/signup", {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
            'Content-type': 'application/json' 
            }
        }).then((response) => response.json());
    
}