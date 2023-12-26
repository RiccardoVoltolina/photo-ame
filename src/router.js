import { createWebHashHistory, createRouter } from "vue-router";
import SubView from "./views/SubView.vue";
import HomeView from "./views/HomeView.vue";
import MountainView from "./views/MountainView.vue";
import PlantsView from "./views/Plants.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/subaquea',
        name: 'subaquea',
        component: SubView,
    },
    {
        path: '/montagna',
        name: 'mountain',
        component: MountainView,
    },
    {
        path: '/plants',
        name: 'piante',
        component: PlantsView,
    },
];

const router = createRouter ({
    history: createWebHashHistory(),
    routes
});

export {router}

