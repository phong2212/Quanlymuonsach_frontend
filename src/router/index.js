import { createWebHistory, createRouter } from "vue-router";
import Book from "@/views/Book.vue";
import Nxb from "@/views/Nxb.vue";
import LoginAdmin from "@/views/LoginAdmin.vue";


const routes = [
    {
        path: "/loginAdmin",
        name: "loginAdmin",
        component: LoginAdmin,
    },
    {
        path: "/books",
        name: "book",
        component: Book,
    },
    {
        path: "/nxb",
        name: "nxb",
        component: Nxb,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/books/add",
        name: "book.add",
        component: () => import("@/views/BookAdd.vue"),
    },
    {
        path: "/books/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true
    },
    {
        path: "/nxbs/add",
        name: "nxb.add",
        component: () => import("@/views/NxbAdd.vue"),
    },
    {
        path: "/nxbs/:id",
        name: "nxb.edit",
        component: () => import("@/views/NxbEdit.vue"),
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;