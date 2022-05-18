import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use( VueRouter )

const routes = [ {
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/classification',
		name: 'Classification',
		component: () => import( '../views/classification.vue' )
	},
	{
		path: '/record',
		name: 'Record',
		component: () => import( '../views/record.vue' )
	},
	{
		path: '/leaveMessage',
		name: 'LeaveMessage',
		component: () => import( '../views/leaveMessage.vue' )
	},
	{
		path: '/aboutme',
		name: 'Aboutme',
		component: () => import( '../views/aboutme.vue' )
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import( '../views/search.vue' )
	},
	{
		path: '/editArticle',
		name: 'EditArticle',
		component: () => import( '../views/editArticle.vue' )
	},
	{
		path: '/article/:id',
		name: 'Article',
		component: () => import( '../views/blogArticleContent.vue' )
	},
	{
		path: '*',
		name: '404',
		component: () => import( /* webpackChunkName: "page-not-found" */ '../views/404/index.vue' )
	},
]

const router = new VueRouter( {
	mode: '',
	base: process.env.BASE_URL,
	routes
} )

export default router
