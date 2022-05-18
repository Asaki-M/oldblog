<template>
	<div class="leaveMessage">
		<header><topbar :type="currentPageClick"></topbar></header>
		<article>
			<div class="leave__msg__form animated lightSpeedIn">
				<form ref="form">
					<div class="form__item">
						<label for="name">用户名</label>
						<input type="text" name="name" placeholder="请输入您的名字" v-model="form.name" autocomplete="off" />
					</div>
					<div class="form__item">
						<label for="message">留言内容</label>
						<textarea name="message" class="lv__msg__content" placeholder="请输入您的留言内容" v-model="form.message"></textarea>
					</div>
					<div class="form__item">
						<label>头像颜色</label>
						<ul class="avatar__color" ref="ac">
							<li style="background-color: #F57983;" @click="getAvatarColor('#F57983', 0)"></li>
							<li style="background-color: #F1C239;" @click="getAvatarColor('#F1C239', 1)"></li>
							<li style="background-color: #00E078;" @click="getAvatarColor('#00E078', 2)"></li>
							<li style="background-color: #811DAF;" @click="getAvatarColor('#811DAF', 3)"></li>
							<li style="background-color: #177BB0;" @click="getAvatarColor('#177BB0', 4)"></li>
							<li style="background-color: #171823;" @click="getAvatarColor('#171823', 5)"></li>
						</ul>
					</div>
					<div class="form__item"><el-button type="primary" class="lv__msg__btn" @click="onSubmit">留言</el-button></div>
				</form>
			</div>
			<div class="leave__msg__panel animated zoomIn"><comments v-for="item in commentsList" :msgList="item" :key="item.id"></comments></div>
		</article>
		<footer><bottom-bar></bottom-bar></footer>
	</div>
</template>

<script>
import Comment from '../components/comments.vue';
export default {
	data() {
		return {
			currentPageClick: 'leaveMessage',
			form: {
				name: '',
				message: ''
			},
			avatarColor: '',
			isActive: false,
			commentsList: {}
		};
	},
	created() {
		this.getComments();
	},
	methods: {
		getAvatarColor(color, index) {
			this.avatarColor = color;
			this.$nextTick(() => {
				for (let i = 0; i < 6; i++) {
					if (index == i) {
						this.$refs.ac.childNodes[index].classList.add('active');
					} else {
						this.$refs.ac.childNodes[i].classList.remove('active');
					}
				}
			});
		},
		getDate() {
			const now = new Date();
			const year = now.getFullYear();
			const month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
			const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
			const date = year + '-' + month + '-' + day;
			return date;
		},
		onSubmit() {
			const date = this.getDate();
			const url = this.$api + '/comments/add';
			this.$axios({
				method: 'post',
				url: url,
				data: {
					name: this.form.name,
					comment: this.form.message,
					color: this.avatarColor,
					date
				}
			})
				.then(response => {
					if (response.data == 1) {
						this.$message({
							message: this.form.name + '，留言成功!',
							type: 'success'
						});
						this.form.name = '';
						this.form.message = '';
						this.getComments();
					} else {
						this.$message({
							message: '留言失败,请重试',
							type: 'warning'
						});
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		getComments() {
			const api = this.$api;
			this.$axios({
				method: 'get',
				url: api + '/comments/select'
			})
				.then(success => {
					console.log(success);
					this.commentsList = success.data;
					this.commentsList.forEach(value => {
						let day = new Date(value.date);
						value.date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate();
					});
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	components: {
		topbar: () => import('../components/topbar.vue'),
		'bottom-bar': () => import('../components/bottombar.vue'),
		comments: Comment
	}
};
</script>

<style scoped="scoped">
.leaveMessage {
	overflow-x: hidden;
}
.leave__msg__form {
	width: 50%;
	margin: 80px auto;
	background-color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 0 10px #f5f5f5;
	padding: 20px;
	animation-delay: 1s;
}
.form__item {
	display: flex;
	margin: 20px 0;
	box-sizing: border-box;
}
.form__item label {
	display: inline-block;
	text-align: right;
	width: 80px;
	color: #fff;
	font-weight: bold;
	padding: 15px 0;
}
.form__item input::-webkit-input-placeholder,
.form__item .lv__msg__content::-webkit-input-placeholder {
	text-align: center;
	color: #fff;
}
.form__item .lv__msg__content::-webkit-input-placeholder {
	padding-top: 10%;
	padding-left: 10%;
	font-size: 16px;
	text-align: left;
}
.form__item input,
.form__item .lv__msg__content {
	margin-left: 50px;
	background-color: transparent;
	outline: none;
	border: 1px solid #fff;
	border-radius: 12px;
	color: #fff;
	padding: 20px;
	font-size: 16px;
}
.form__item input {
	width: 30%;
	height: 10px;
}
.form__item .lv__msg__content {
	width: 75%;
	height: 150px;
}
.avatar__color {
	display: flex;
	list-style: none;
	margin-left: 6%;
	padding-top: 10px;
}
.avatar__color > li {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 20px;
}
.avatar__color > li.active {
	transform: scale(1.3);
	transition: transform 0.5s;
}
.lv__msg__btn {
	margin-left: 130px;
}

.leave__msg__panel {
	width: 70%;
	background-color: rgba(255, 255, 255, 0.3);
	margin: 50px auto;
	overflow-x: hidden;
	box-shadow: 0 0 10px #f5f5f5;
	animation-delay: 1.5s;
}
</style>
