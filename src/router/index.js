import Vue from 'vue'
import VueRouter from "vue-router";

// Navigation
const Nav = () => import("../components/Navigation")

const Logins = () => import("../views/Login")
const Dashboard =()=> import("../views/Dashboard")
const Leads =()=> import("../views/Leads")

// Listing
const Listing =()=> import("../views/Listing/Listing")
const AddListing =()=> import("../views/Listing/AddListing")
const DetailListing =()=> import("../views/Listing/DetailListing")


// Pages

const routes = [
    {
        path: "",
        redirect: "dashboard",
        name: "Navigation",
        component: Nav,
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "listing",
                name: "Listing",
                component: Listing
            },
            {
                path: "listing/add-listing",
                name: "AddListing",
                component: AddListing
            },
            {
                path: "listing/detail-listing",
                name: "DetailListing",
                component: DetailListing
            },
            {
                path: "leads",
                name: "Leads",
                component: Leads
            }
        ]
    },
    {
        path: "/",
        redirect: "/login",
        name: "Pages",
        component: {
            render(c) {
                return c ("router-view");
            },
        },
        children: [
            {
                path: "login",
                name: "Login,",
                component: Logins,
            }
        ]
    }
]


let router = new VueRouter({
    mode: "hash",
    routes,
    scrollBehavior (to) {
        if (to.hash) {
        return {
            selector: to.hash
        }
        }
    }

});

Vue.use(VueRouter);

export default router;