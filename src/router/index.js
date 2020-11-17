import Vue from "vue";
import VueRouter from "vue-router";
import Measurement from "../components/Measurement";
import App from "../App";
import Measurements from "../components/Measurements";
import MeasurementsView from "../components/MeasurementView";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer"
Vue.use(VueRouter);


export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/", components: {
                default: App,
                'headerView': Header,
                'contentView': Content,
                'footerView': Footer
            }
        },
        { path: "/measurement", component: Measurement },
        { path: "/measurements", component: Measurements },
        { path: "/measurementsView", component: MeasurementsView },
        { path: "*", redirect: "/" }
    ]
})


    //
    ///
    // /
    // path: '/', name: 'Home', components: {
    //     default: Home,
    //     'searchUserView': SearchUser,
    //     'toolbarView': Toolbar,
    //     'footerView': Footer,

    //   }