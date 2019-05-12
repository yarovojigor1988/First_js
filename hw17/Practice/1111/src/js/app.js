import {HomeComponent} from './components/home.component';
import {LoginComponent} from './components/login.component';
import {NotFoundComponent} from './components/notfound.component';
import '../css/index.css';

const routes = { 
    '/': new HomeComponent(), 
    '/login': new LoginComponent(), 
    '**': new NotFoundComponent()
}; 
 
const router = () => { 
    const container = document.querySelector('app-container'); 
    const url = location.hash.slice(1).toLowerCase() || '/'; 
 
    const component = routes[url] || routes['**'];  
    container.innerHTML = component.render(); 
    component.afterRender(); 
} 
 
window.addEventListener('load', router); 
window.addEventListener('hashchange', router);


// cd hw17/Practice/1111
// npm run start:dev