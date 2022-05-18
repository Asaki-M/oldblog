<template>
	<div class="article-content">
		<header>
			<topbar></topbar>
		</header>
		<article class="content animated fadeIn">
			<p class="title">
				{{article.title}}
			</p>
			<mavon-editor :subfield="false"
						  :defaultOpen="'preview'"
						  :editable="false"
						  :toolbarsFlag="false"
						  :value="article.content">
			</mavon-editor>
			<router-link class="backBtn" tag="button" to="/"><i class="el-icon-position"></i>返回</router-link >
		</article>
		<footer>
			<bottom-bar></bottom-bar>
		</footer>
	</div>
</template>

<script>
	import topbar from '../components/topbar.vue'
	import bottomBar from '../components/bottombar.vue'
	export default {
		data() {
			return {
				article: {
					title:"",
					content:""
				}
			}
		},
		components:{
			topbar,
			bottomBar
		},
		mounted() {
			const id = this.$route.params.id, api = this.$api
			this.$axios({
				method:'get',
				url: api + '/article/select?id=' + id
			}).then(suc => {
				this.article.title = suc.data.title
				this.article.content = suc.data.md
				console.log(suc)
			}).catch( err => {
				console.log(err)
			})
		}
	}
</script>

<style scoped="scoped">
	.content{
		width: 80vw;
		margin: 2em auto;
		background-color: #fbfbfb;
		border-radius: 1em;
		animation-delay: 1.2s;
	}
	.title{
		text-align: center;
		font-size: 1.5em;
		padding: 1em 0;
		font-weight: bold;
	}
	.backBtn{
		display: block;
		margin: 0 auto;
		width: 20vw;
		height: 3em;
		border: none;
		outline: none;
		line-height: 3em;
		text-align: center;
		background-color: #82848a;
		color: #fff;
		border-radius: 0.5em;
		cursor: pointer;
	}
	.backBtn:hover{
		background-color: #a6a9ad;
	}
</style>
