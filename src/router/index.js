import Vue from "vue";
import VueRouter from "vue-router";
import Measurement from "../components/Measurement";
import App from "../App";
import Measurements from "../components/Measurements";
Vue.use(VueRouter);


export default new VueRouter({
    mode: "history",
    routes: [
    { path: "/", component: App },
    { path: "/measurement", component: Measurement },
    { path: "/measurements", component: Measurements },
    { path: "*", redirect: "/"}
    ]
    })