import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const route = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "/",
            component: () => import("./components/Table.vue")
        },
        {
            path: "/Exit",
            name: "Exit",
            component: () => import("./components/Exit.vue")
        },
    ]
})

export default route