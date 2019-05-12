export class LoginComponent {
    constructor () {

    }
    render() {
        return `
        <div class="login_box">
            <div>Login</div>
            <input type="text" name="login" id="login" class="form-control">
            <div>Password</div>
            <input type="text" name="title" id="title" class="form-control">
            <button type="submit">Login</button>
        </div>
        `
    }
}