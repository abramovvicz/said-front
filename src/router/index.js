import Vue from "vue";
import VueRouter from "vue-router";
import Measurement from "../components/Measurement";
import Measurements from "../components/Measurements";
import MeasurementsView from "../components/MeasurementView";
import Header from "../components/Header";
// import Content from "../components/Content";
import Footer from "../components/Footer"


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/", name: 'App', components: {
                default: Measurements,
                'headerView': Header,
                // 'contentView': SimpleTest,
                'footerView': Footer
            }
        },
        { path: "/measurement", component: Measurement },
        { path: "/measurements", component: Measurements },
        { path: "/measurementView/:id", component: MeasurementsView, props: true },
        {
            path: "/measurementView/:id",
            components: {
                default: Measurement,
                'headerView': Header,
                'footerView': Footer
            }

        },
        { path: "*", redirect: "/" }
    ]
})

export default router

    //
    ///
    // /
    // path: '/', name: 'Home', components: {
    //     default: Home,
    //     'searchUserView': SearchUser,
    //     'toolbarView': Toolbar,
    //     'footerView': Footer,

    //   }
