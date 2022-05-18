<template>
	<div class="aboutme">
		<header>
			<topbar :type="currentPageClick"></topbar>
		</header>
		<article>
			<div class="aboutme__content animated fadeIn">
				<h1 class="aboutme__title animated flash">About Me</h1>
				<div class="aboutme__content__contain">
					<div class="me animated fadeInUp">
						<h1 class="title">关于我</h1>
						<p>网名:Asaki-M</p>
						<p>就读大学：广州大学华软软件学院，专业：软件工程</p>
						<p>希望职位：前端攻城狮</p>
						<p>擅长技术：<span class="no__letter__space">html，css，js，vue</span></p>
						<p>了解技术：<span class="no__letter__space">jQuery，bootsrap，java，mysql</span></p>
					</div>
					<div class="profile animated fadeInUp">
						<h1 class="title">个人简介</h1>
						<p>喜欢古风的东西，从我的背景就可以看得出哈哈哈，同时也喜欢前端，每天堆在代码里乐此不疲，累了的话就会打打游戏，喜欢听着古风的歌写代码，跟别人不一样，大部分喜欢听一些比较high的歌曲，但我不是十分喜欢。</p>
						<p>emmm，平时也比较喜欢逛逛B站，看看沙雕视频，快乐生活，最后重要一句：我头发挺多的！！！！</p>
					</div>
					<div class="about__blog animated flipInX">
						<h1 class="title">关于博客</h1>
						<p>博客地址：<a href="www.asaki-m.com">www.asaki-m.com</a></p>
						<p>博客上线时间：2020年3月23日</p>
						<p>他的链接：<a href="https://www.myong.top/">https://www.myong.top/</a></p>
					</div>
					<div class="updatelog animated flipInY">
						<h1 class="title">更新日志</h1>
						<ul>
							<i class="iconfont icon-xingxing"></i>
							2020年6月29日 - 2020年6月30日
							<li>1.新增编写文章页面</li>
							<li>2.重构首页，搜索文章项目展示</li>
							<li>3.重构文章详情页面，使用vue-mavon插件</li>
							<li>4.实现文章编写发送给后端并保存</li>
							<li>5.实现归档页面，搜索，首页等页面连接后端</li>
						</ul>
						<ul>
							<i class="iconfont icon-xingxing"></i>
							2020年6月11日
							<li>1.重构评论功能后端代码</li>
							<li>2.优化背景加载</li>
						</ul>
						<ul>
							<i class="iconfont icon-xingxing"></i>
							2020年4月14日 - 2020年4月16日
							<li>1.更新留言功能</li>
							<li>2.每一条留言存进数据库中</li>
						</ul>
						<ul>
							<i class="iconfont icon-xingxing"></i>
							2020年4月1日
							<li>1.更新背景每过20秒自动切换</li>
							<li>2.切换背景具有淡出淡入的功能</li>
							<li>3.切换背景更新在全局之中</li>
						</ul>
						<ul>
							<i class="iconfont icon-xingxing"></i>
							2020年2月26日-2020年3月25日
							<li>1.购买了阿里云服务器和域名</li>
							<li>2.部署阿里云服务器，域名备案</li>
							<li>3.搭建好博客ui界面</li>
							<li>4.正式上线</li>
						</ul>
					</div>
				</div>
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
				currentPageClick:'aboutme'
			}
		},
		components:{
			'topbar':()=>import('../components/topbar.vue'),
			'bottom-bar':()=>import('../components/bottombar.vue')
		}
	}
</script>

<style scoped="scoped">
	.aboutme{
		overflow-x: hidden;
	}
	article{
		padding: 50px;
	}
	.aboutme__title{
		text-align: center;
		font-size: 1.625rem;
		font-weight: bold;
		color: #333;
	}
	.aboutme__content{
		width: 80%;
		background-color: rgba(255,255,255,0.3);
		margin: 50px auto 0;
		padding: 50px;
		box-shadow: 0 0 10px #f5f5f5;
	}
	.aboutme__content__contain{
		font-weight: bold;
	}
	.title{
		font-size: 22px;
		padding: 50px 0;
		padding-left: 10%;
	}
	.me p, .profile p, .about__blog p{
		padding: 10px 12%;
		letter-spacing: 5px;
		font-size: 18px;
		line-height: 30px;
		color: #353B48;
	}
	.updatelog ul{
		font-size: 16px;
		padding: 10px 12%;
	}
	.updatelog ul i{
		color: #FFBD87;
	}
	.updatelog ul li{
		font-size: 18px;
		padding: 10px 5%;
	}
	.no__letter__space{
		letter-spacing: normal;
	}
	.aboutme__content{
		animation-delay: 1s;
	}
	.aboutme__title{
		animation-delay: 1.2s;
	}
	.me{
		animation-delay: 1.3s;
	}
	.profile{
		animation-delay: 1.5s;
	}
	.about__blog{
		animation-delay: 2s;
	}
	.updatelog{
		animation-delay: 2.3s;
	}
</style>
