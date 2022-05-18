<template>
	<div class="edit-article">
		<header><topbar :type="currentPageClick"></topbar></header>
		<div class="contain animated fadeIn">
			<router-link class="backBtn" tag="button" to="/">
				<i class="el-icon-position"></i>
				返回
			</router-link>
			<div class="acticle">
				<div class="title">
					<span>文章标题:</span>
					<el-input v-model="artcleInfo.title" placeholder="输入文章标题" size="mini" :disabled="canEdit"></el-input>
				</div>
				<div class="type">
					<span>文章类型:</span>
					<el-select v-model="artcleInfo.type" placeholder="请选择" size="mini" :disabled="canEdit">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</div>
			</div>
			<div class="desc">
				<span>文章描述:</span>
				<el-input type="textarea" :rows="1" :disabled="canEdit" placeholder="请输入描述" v-model="artcleInfo.desc"></el-input>
			</div>
			<mavon-editor v-model="artcleInfo.value" @change="getmd" :editable="!canEdit"></mavon-editor>
			<el-button type="primary" class="submit" round @click="senddata" :disabled="canEdit">提交</el-button>
		</div>
	</div>
</template>

<script>
import topbar from '../components/topbar.vue';
export default {
	data() {
		return {
			canEdit: true,
			currentPageClick: 'editArticle',
			artcleInfo: {
				title: '',
				type: '',
				value: '',
				content: '',
				desc: ''
			},
			options: [
				{
					value: 'css',
					label: 'css'
				},
				{
					value: 'jquery',
					label: 'jquery'
				},
				{
					value: 'js',
					label: 'js'
				},
				{
					value: 'vue.js',
					label: 'vue.js'
				},
				{
					value: '其他',
					label: '其他'
				}
			]
		};
	},
	components: {
		topbar
	},
	mounted() {
		this.$prompt('请输入暗号', '暗号', {
			confirmButtonText: '确定',
			cancelButtonText: '取消'
		}).then(({ value }) => {
			console.log(value);
			if (value == 'anhao') {
				this.canEdit = false;
				this.$message({
					message: '暗号输入成功，可以进行编写文章',
					type: 'success'
				});
			} else {
				this.$message.error('错了哦，不能进行编写文章');
				this.canEdit = true;
			}
		});
	},
	methods: {
		getmd(value, render) {
			this.artcleInfo.content = render;
		},
		senddata() {
			const api = this.$api;
			this.$axios({
				method: 'post',
				url: api + '/article/add',
				data: {
					title: this.artcleInfo.title,
					type: this.artcleInfo.type,
					mdtext: this.artcleInfo.value,
					mdhtml: this.artcleInfo.content,
					desc: this.artcleInfo.desc
				}
			})
				.then(success => {
					if (success.data === 0) {
						this.$message({
							message: '添加文章成功！',
							type: 'success'
						});
					} else {
						this.$message.error('添加文章发生错误！请重试！');
					}
				})
				.catch(error => {
					console.log(error);
				});
			this.artcleInfo.title = this.artcleInfo.value = this.artcleInfo.content = this.artcleInfo.type = '';
		}
	}
};
</script>

<style scoped="scoped">
.contain {
	width: 95vw;
	margin: 2em auto 0;
	background-color: rgba(255, 255, 255, 0.5);
	animation-delay: 1s;
}
.backBtn {
	width: 6em;
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
.backBtn:hover {
	background-color: #a6a9ad;
}
.acticle {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
}
.title,
.type,
.desc {
	display: flex;
	justify-content: center;
	align-items: center;
}
.title span,
.desc span {
	width: 6em;
}
.desc {
	width: 65vw;
	margin: 0em auto 1em;
	color: #fff;
}
.submit {
	width: 10em;
	height: 3em;
	background-color: #409eff;
	border-radius: 2em;
	color: #fff;
	border: none;
	outline: none;
	display: block;
	margin: 2em auto;
	cursor: pointer;
}
.submit:hover {
	background-color: #00c5ff;
	transition: all 0.5s;
}
</style>
