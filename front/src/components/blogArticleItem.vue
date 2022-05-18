<template>
	<div class="article__contain">
		<div class="article__item animated slideInUp" v-for="(item, index) in articles" :key="this">
			<h2>{{ item.title }}</h2>
			<p>{{ item.descript }}</p>
			<div class="img"><img :src="item.img" /></div>
			<router-link :to="'/article/' + (index + 1)">阅读全文>>></router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleList: []
		};
	},
	props: ['keyword'],
	created() {
		const api = this.$api;
		this.$axios({
			method: 'get',
			url: api + '/article/indexSel'
		})
			.then(suc => {
				console.log(suc);
				suc.data.forEach(val => {
					val.img = 'articleImg/' + val.imgName + '.jpg';
				});
				this.articleList = suc.data;
			})
			.catch(err => {
				console.log(err);
			});
	},
	computed: {
		articles: function() {
			return this.articleList.filter(item => {
				return item.title.match(this.keyword);
			});
		}
	}
};
</script>

<style scoped="scoped">
/* 内容区样式 */
.article__contain .article__item {
	width: 50vw;
	height: 450px;
	margin: 100px auto;
	box-shadow: 0 0 10px #eee;
	color: #fff;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 0 10px #f5f5f5;
	animation-delay: 1s;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
.article__contain .article__item h2 {
	font-size: 24px;
	font-weight: bold;
}

.article__contain .article__item p {
	width: 80%;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.article__contain .article__item .img {
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.article__contain .article__item .img > img {
	height: 100%;
	border-radius: 15px;
}

.article__contain .article__item a {
	text-decoration: none;
	color: #353b48;
	border-bottom: 2px solid #353b48;
	font-size: 16px;
}
</style>
