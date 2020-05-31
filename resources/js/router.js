import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsFeed from "./Views/NewsFeed";
import ShowUser from './Views/Users/Show'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', name:'home', component: NewsFeed,
            meta: {
                title: 'NewsFeed'
            }
        },
        {
            path: '/users/:userId', name:'user.show', component: ShowUser,
            meta: {
                title: 'Profile'
            }
        }
    ]
})
