<template>
	<div class="index">
		<header>
			<topbar :type="currentPageClick"></topbar>
		</header>
		<article>
			<blog-article></blog-article>
		</article>
		<footer>
			<bottom-bar></bottom-bar>
		</footer>
	</div>
</template>

<script>
	import Topbar from '../components/topbar.vue'
	import BlogArticle from '../components/blogArticleItem.vue'
	import BottomBar from '../components/bottombar.vue'
	export default {
		data(){
			return {
				currentPageClick:'index'
			}
		},
		components:{
			'topbar':Topbar,
			'blog-article':BlogArticle,
			'bottom-bar':BottomBar
		}
	}
</script>

<style scoped="scoped">
</style>
