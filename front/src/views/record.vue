<template>
	<div class="record">
		<header><topbar :type="currentPageClick"></topbar></header>
		<article>
			<div class="time__stamp__contain">
				<h3 class="time__stamp__title">我的归档</h3>
				<el-timeline class="time__stamp">
					<el-timeline-item
						placement="top"
						class="item__timeline animated flipInX"
						:size="timerlineAttributes.size"
						:color="timerlineAttributes.color"
						:timestamp="item.times"
						v-for="item in records"
						:key="this"
					>
						<el-card class="time__card">
							<h3>{{ item.title }}</h3>
							<p>{{ item.descript }}</p>
						</el-card>
					</el-timeline-item>
				</el-timeline>
			</div>
		</article>
		<footer><bottom-bar></bottom-bar></footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPageClick: 'record',
			timerlineAttributes: {
				size: 'large',
				color: '#fff'
			},
			records: []
		};
	},
	components: {
		topbar: () => import('../components/topbar.vue'),
		'bottom-bar': () => import('../components/bottombar.vue')
	},
	mounted() {
		const api = this.$api;
		this.$axios({
			method: 'get',
			url: api + '/article/record'
		})
			.then(suc => {
				console.log(suc);
				this.records = suc.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

<style scoped="scoped">
.record {
}
.time__stamp__contain {
	width: 80%;
	margin: 0 auto;
	padding: 50px;
}
.time__stamp__title {
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	color: #fff;
	letter-spacing: 10px;
}
.time__stamp {
	padding: 5% 20%;
}
.item__timeline {
	font-size: 16px;
	animation-delay: 1s;
}
.time__card {
	width: 60%;
	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 10px #f5f5f5;
	padding: 10px;
}
.time__card h3 {
	font-size: 18px;
	font-weight: bold;
	color: #3b3b3b;
}
.time__card p {
	padding: 15px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
</style>
