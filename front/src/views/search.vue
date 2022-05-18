<template>
	<div class="search">
		<header>
			<topbar :type="currentPageClick"></topbar>
		</header>
		<article>
			<div class="search__contain animated zoomIn">
				<span class="search__content" :class="{active:isClick}">
					<i class="el-icon-search" @click="click()"></i>
					<input type="text" placeholder="请输入你的想要搜索的关键字" class="search__input" :class="{active:isClick}" v-model="keyword" ref="search" />
				</span>
			</div>
			<div class="search__result">
				<blog-item :keyword="keyword"></blog-item>
			</div>
		</article>
		<footer>
			<bottom-bar></bottom-bar>
		</footer>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				currentPageClick: 'search',
				isClick: false,
				keyword: ''
			}
		},
		methods:{
			click(){
				this.isClick = !this.isClick
				this.$nextTick(()=>{  
				   this.$refs.search.focus();
				})
			}
		},
		components:{
			'topbar':()=>import('../components/topbar.vue'),
			'bottom-bar':()=>import('../components/bottombar.vue'),
			'blog-item':()=>import('../components/blogArticleItem.vue')
		}
	}
</script>

<style scoped="scoped">
	.search{
	}
	.search__contain{
		width: 60%;
		height: 50px;
		margin: 100px auto;
		box-sizing: border-box;
		text-align: center;
		animation-delay: 1s;
	}
	.search__content{
		display: inline-block;
		width: 70px;
		height: 70px;
		background-color: rgba(255,255,255,.3);
		border-radius: 50%;
		text-align: center;
		line-height: 70px;
		color: #fff;
	}
	.search__content i{
		font-weight: bold;
		font-size: 18px;
	}
	.search__input{
		display: none;
		height: 60px;
		outline: none;
		border: 1px solid #fff;
		border-radius: 10px;
		background-color: transparent;
		padding: 0 50px;
		font-size: 18px;
		color: #fff;
	}
	.search__contain.active{
		text-align: left;
	}
	.search__content.active{
		width: 100%;
		padding: 10px 0;
		border-radius: 15px;
		transition: all 0.5s;
	}
	.search__content.active i{
		padding-right: 15px;
	}
	.search__input.active{
		display: inline;
		animation: showsearch 1s;
		animation-fill-mode: forwards;
	}
	input::-webkit-input-placeholder{
		font-size: 14px;
		text-align: center;
		color: #fff;
	}
	@keyframes showsearch{
		from{
			width: 0;
		}
		to{
			width: 80%;
		}
	}
</style>
