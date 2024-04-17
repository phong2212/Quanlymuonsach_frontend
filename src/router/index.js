import { createWebHistory, createRouter } from "vue-router";
import Book from "@/views/Book.vue";
const routes = [
    {
        path: "/",
        name: "book",
        component: Book,
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
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;