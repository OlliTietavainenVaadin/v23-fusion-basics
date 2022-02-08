import {Route, Router} from '@vaadin/router';
import "./about-view";
import "./home-view";
import "./robot-view";
import "./not-found-view"
import {Flow} from '@vaadin/flow-frontend';

const {serverSideRoutes} = new Flow({
    imports: () => import('../target/frontend/generated-flow-imports')
});

export const routes: Route[] = [
    {
        path: '/',
        component: 'home-view',
        animate: true
    },
    {
        path: '/about',
        component: 'about-view',
        animate: true
    },
    {path: '(.*)', component: 'not-found-view', animate: true},
];
export const router = new Router(
    document.querySelector('#outlet'));
router.setRoutes(routes);



