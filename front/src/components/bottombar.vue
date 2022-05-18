<template>
	<div class="bottombar">
		<span class="bottom__year">© 2020</span>
		<span class="bottom__name">
			<i class="iconfont icon-xingxing"></i>
				Asaki-M
			<i class="iconfont icon-xingxing"></i>
		</span>
		<span class="bottom__beian">
			<a href="http://www.beian.miit.gov.cn/">粤ICP备20018492号</a>
		</span>
	</div>
</template>

<script>
</script>

<style>
	.bottombar{
		width: 100%;
		height: 80px;
		background-color: rgba(0,0,0,.5);
		text-align: center;
		color: #e1e1e1;
		font-size: 18px;
		line-height: 80px;
	}
	.bottom__year{
		padding: 0 20px;
	}
	.bottom__name{
		padding: 0 20px;
		border-left: 2px solid #fff;
		border-right: 2px solid #fff;
	}
	.bottom__name i{
		color: #FFBD87;
		padding: 0 5px;
	}
	.bottom__beian{
		padding: 0 20px;
	}
	.bottom__beian a{
		color: #e1e1e1;
		text-decoration: none;
	}
	.bottom__beian a:hover{
		color: #fff;
	}
</style>
