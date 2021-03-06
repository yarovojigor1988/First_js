import{LoginService} from '../services/loginService'
import {Routing} from '../services/routing.service'


export class LoginComponent {
    constructor () {
        this._routing = new Routing();
    }
    render() {
        return `
        <form class="login_box" name="login_form" id="login_form">
            <div>Login</div>
            <input type="email" name="login" id="login" class="form-control">
            <div>Password</div>
            <input type="text" name="password" id="password" class="form-control">
            <button type="submit">Login</button>
        </form>
        `
    }

    async beforeRender () {
        
    }
    afterRender() {
        const form = document.forms['login_form'];
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let login = document.getElementById("login");
            let password = document.getElementById("password");


            let loginInfo = {
                email: login.value,
                password: password.value
            }

            console.log(loginInfo);
            LoginService(loginInfo).then((response) => {
                this._routing.navigate(`/user/${response.id}`);
                console.log()
            });

        }.bind(this));
    }
}