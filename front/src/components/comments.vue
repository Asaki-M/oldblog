<template>
	<div class="comment">
		<div class="comment__avatar" :style="{backgroundColor:msgList.color}">
			{{avatarName}}
		</div>
		<div class="comment__body">
			<div class="user__name">
				{{msgList.name}}
			</div>
			<div class="user__comment">
				{{msgList.comment}}
			</div>
			<div class="comment__info">
				{{msgList.date}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				avatarName:''
			}
		},
		created() {
			this.avatarName = this.msgList.name.substring(0,2)
		},
		props:['msgList']
	}
</script>

<style scoped="scoped">
	.comment{
		width: 100%;
		display: flex;
		padding: 2rem;
		color: #fff;
		font-weight: bold;
	}
	.comment__avatar{
		width: 65px;
		height: 65px;
		border-radius: 50%;
		background-color: #409EFF;
		text-align: center;
		font-size: 20px;
		line-height: 65px;
	}
	.comment__body{
		flex: 9;
		border-bottom: 1px solid #ccc;
	}
	.comment__body .user__name{
		font-size: 18px;
		padding: 20px 15px;
	}
	.comment__body .user__comment{
		padding: 0px 15px;
	}
	.comment__body .comment__info{
		padding: 1rem;
		font-size: 12px;
		color: #f9f9f9;
	}
</style>
