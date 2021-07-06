import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home")
	},
	{
		path: "/:catchAll(.*)",
		name: "NotFound",
		redirect: "/"
	}
];

const router = createRouter({
	history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
	routes
});

export default router;
