<template>
	<div class="classification">
		<header>
			<topbar :type="currentPageClick"></topbar>
		</header>
		<article class="classification__content animated fadeInRight">
			<div class="classification__content__contain">
				<p class="classification__amount">目前共计分类：<span style="padding: 0 5px;">5</span>个</p>
				<ul class="classification__content__menu">
					<li class="item">JQuery<span class="item__arrow">-----></span><span class="item__amount">(1)</span></li>
					<li class="item">Vue.js<span class="item__arrow">-----></span><span class="item__amount">(1)</span></li>
					<li class="item">CSS<span class="item__arrow">-----></span><span class="item__amount">(1)</span></li>
					<li class="item">实战项目<span class="item__arrow">-----></span><span class="item__amount">(2)</span></li>
					<li class="item">技术杂谈<span class="item__arrow">-----></span><span class="item__amount">(1)</span></li>
				</ul>
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
				currentPageClick:'classification'
			}
		},
		components:{
			'topbar':()=>import('../components/topbar.vue'),
			'bottom-bar':()=>import('../components/bottombar.vue')
		}
	}
</script>

<style scoped="scoped">
	.classification{
		overflow-x: hidden;
	}
	.classification__content{
		width: 100%;
		height: 700px;
		position: relative;
		animation-delay: 1s;
	}
	.classification__content__contain{
		width: 50%;
		background-color: rgba(255,255,255,0.5);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 30px;
		box-shadow: 0 0 10px #ccc;
	}
	.classification__content__menu{
		width: 100%;
		height: 70%;
	}
	.classification__content__menu .item{
		font-size: 18px;
		font-weight: bold;
		padding: 5% 10%;
		text-align: center;
	}
	.classification__content__menu .item:hover{
		color: #C0564B;
		transition: all 0.5s; 
	}
	.item__amount,.item__arrow{
		padding: 0 30px;
	}
	.classification__amount{
		text-align: center;
		color: #3B3B3B;
		font-size: 24px;
		font-weight: bold;
	}
</style>
