import {HomeComponent} from './components/home.component';
import {LoginComponent} from './components/login.component';
import {NotFoundComponent} from './components/notfound.component';
import {SingUpComponent} from './components/singup.component';
import {UserComponent} from './components/user.component';
import {ActiveRoute} from './services/active.route.service';


import '../css/index.css';
import { Routing } from './services/routing.service';

const routes = { 
    '/': new HomeComponent(), 
    '/login': new LoginComponent(), 
    '/signup': new SingUpComponent(),
    '**': new NotFoundComponent(),
    '/user/:id' : new UserComponent()

}; 

const activeRoute = new ActiveRoute();
const _routing = new Routing();


 
const router =  () => { 
    const container = document.querySelector('app-container'); 

    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');
    const component = routes[url] || routes['**'];  

    component.beforeRender().then(() => {
        container.innerHTML = component.render(); 
        component.afterRender();
    });
 
} 
 
window.addEventListener('load', router); 
window.addEventListener('hashchange', router);


// cd hw17/Practice/1111
// npm run start:dev