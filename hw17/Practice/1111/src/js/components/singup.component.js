import{AuthService} from '../services/autService'
export class SingUpComponent {

    render() {
        return `
        <div class="login_box">
            <div>Sing Up</div>
            <form name="singUpForm" id="singUpForm">
                <input placeholder="First Nane" type="text" name="first_name" id="first_name" class="form-control">
                <input placeholder="Last Nane" ype="text" name="last_name" id="last_name" class="form-control">
                <input placeholder="Nickname" type="text" name="nickname" id="nickname" class="form-control">
                <input placeholder="City" type="text" name="city" id="city" class="form-control">
                <input placeholder="Email" type="email" name="email" id="email" class="form-control">

                <select id="country" name="country">
                    <option value="" selected="selected">Выберите страну</option>
                    <option value="Россия">Россия</option> 
                    <option value="Украина">Украина</option> 
                    <option value="Беларусь">Беларусь</option> 
                </select> 
                <select id="gender_orientation" name="gender_orientation">
                    <option value="" selected="selected">Gender Orientation</option>
                    <option value="male">male</option> 
                    <option value="female">female</option> 
                </select> 
                <div class="date_of_birth">
                    <select id="date_of_birth_day" name="date_of_birth_day">
                        <option value="" selected="selected">Day</option>
                        <option value="1">1</option> 
                        <option value="2">2</option>
                        <option value="3">3</option> 
                        <option value="4">4</option>
                        <option value="5">5</option> 
                        <option value="6">6</option>
                        <option value="7">7</option> 
                        <option value="8">8</option>
                        <option value="9">9</option> 
                        <option value="10">10</option>
                    </select>
                        <select id="date_of_birth_month" name="date_of_birth_month">
                        <option value="" selected="selected">Month</option>
                        <option value="January">January</option> 
                        <option value="February">February</option>
                        <option value="March">March</option> 
                        <option value="April">April</option>
                        <option value="May">May</option> 
                        <option value="June">June</option>
                        <option value="July">July</option> 
                        <option value="August">August</option>
                        <option value="September">September</option> 
                        <option value="October">October</option>
                        <option value="November">November</option> 
                        <option value="December">December</option> 
                    </select> 
                    <select id="date_of_birth_year" name="date_of_birth_year">
                        <option value="" selected="selected">Year</option>
                        <option value="1900">1900</option> 
                        <option value="1950">1950</option>
                        <option value="2000">2000</option> 
                    </select> 
                </div>
                <input placeholder="Password" type="text" name="password" id="password" class="password">
                <input placeholder="Confirm Password" type="text" name="confirmPassword" id="confirmPassword" class="form-control">

                <button type="submit">Sing Up</button>
            </form>
        </div>
        `
    }
    afterRender() {
        const form = document.forms['singUpForm'];
        form.addEventListener('submit', function (e) {
            e.preventDefault();
                let first_name = document.getElementById("first_name");
                let last_name = document.getElementById("last_name");
                let nickname = document.getElementById("nickname");
                let city = document.getElementById("city");
                let email = document.getElementById("email");
                let country = document.getElementById("country");
                let gender_orientation = document.getElementById("gender_orientation");
                let date_of_birth_day = document.getElementById("date_of_birth_day");
                let date_of_birth_month = document.getElementById("date_of_birth_month");
                let date_of_birth_year = document.getElementById("date_of_birth_year");
                let password = document.getElementById("password");
                let confirmPassword = document.getElementById("confirmPassword");

                if (!first_name.value || !last_name.value || !nickname.value || !city.value || !email.value || !country.value || !gender_orientation.value ||!gender_orientation.value ||!date_of_birth_day.value ||!date_of_birth_month.value ||!date_of_birth_year.value ||!password.value ||!confirmPassword.value ){
                    return alert('Все поля обязательны для заполнения!!!')
                } else if (password.value !== confirmPassword.value) {
                    return alert('Пароль не совпадает!!!')
                } ;
                let info = {
                    first_name: first_name.value,
                    last_name: last_name.value,
                    nickname: nickname.value,
                    city: city.value,
                    email: email.value,
                    country: country.value,
                    gender_orientation: gender_orientation.value,
                    date_of_birth_day: date_of_birth_day.value,
                    date_of_birth_month: date_of_birth_month.value,
                    date_of_birth_year: date_of_birth_year.value,
                    confirmPassword: confirmPassword.value
                };
                console.log(info);
                AuthService(info);
        });
    }
}

