<template>
	<div class="header">
		<div class="logo">
			<div class="logo_name">
				<h3 class="animated fadeIn">Asaki-M</h3>
			</div>
		</div>
		<ul class="menu animated flipInX">
			<li :class="{active: type=='index'}">
				<router-link class="nav_link" to="/"><i class="iconfont icon-shouye"></i>&nbsp;&nbsp;首页</router-link >
			</li>
			<li :class="{active: type=='classification'}">
				<router-link class="nav_link" to="/classification"><i class="iconfont icon-fenlei-copy"></i>&nbsp;&nbsp;分类</router-link >
			</li>
			<li :class="{active: type=='record'}">
				<router-link class="nav_link" to="/record"><i class="iconfont icon-jilu"></i>&nbsp;&nbsp;归档</router-link >
			</li>
			<li :class="{active: type=='leaveMessage'}">
				<router-link class="nav_link" to="/leaveMessage"><i class="iconfont icon-message"></i>&nbsp;&nbsp;留言</router-link >
			</li>
			<li :class="{active: type=='aboutme'}">
				<router-link class="nav_link" to="/aboutme"><i class="iconfont icon-gerenxinxi"></i>&nbsp;&nbsp;关于</router-link >
			</li>
			<li :class="{active: type=='search'}">
				<router-link class="nav_link" to="/search"><i class="iconfont icon-sousuo"></i>&nbsp;&nbsp;搜索</router-link >
			</li>
			<li :class="{active: type=='editArticle'}">
				<router-link class="nav_link" to="/editArticle"><i class="el-icon-edit"></i>&nbsp;&nbsp;编写</router-link >
			</li>
		</ul>
		<div class="github">
			<a href="https://github.com/Asaki-M?tab=repositories" target="_blank"><img src="../../public/github.png" width="40"></a>
		</div>
	</div>
</template>

<script>
	export default{
		props:['type']
	}
</script>

<style>
	.header{
		width: 100%;
		height: 100px;
		background-color: rgba(0,0,0,.5);
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
	}
	
	.header::after{
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border: 10px solid #fff;
		border-top: 20px solid #fff;
		border-bottom: 10px solid transparent;
		top: 0;
		left: 5px;
	}
	
	.header .logo{
		width: 100px;
		height: 100%;
	}
	
	.header .logo .logo_name{
		width: 100px;
		padding: 10px 0;
		border-top: 2px solid #fff;
		border-bottom: 2px solid #fff;
		margin-top: 25px;
		animation: logoBorder 1s linear;
	}
	
	.header .logo h3{
		text-align: center;
		color: #fff;
		animation-delay: 0.8s;
		font-size: 20px;
	}
	
	
	.header .menu{
		list-style: none;
		display: flex;
		animation-delay: 0.5s;
	}
	
	.header .menu li{
		width: 80px;
		height: 30px;
		margin: 0 2px;
		border-radius: 8px;
		display: block;
	}
	
	.header .menu li:hover{
		background-color: pink;
	}
	
	.header .menu li.active{
		background-color: pink;
	}
	
	.header .menu li .nav_link{
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 30px;
		text-decoration: none;
		color: #fff;
		font-size: 16px;
	}
	
	.header .github {
		width: 40px;
		height: 40px;
	}
	.header .github a{
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}
</style>
