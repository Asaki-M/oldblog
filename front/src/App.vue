<template>
  <div id="app">
	  <div class="bg" v-for="(item,index) in imglist" :key="item.backgroundImage" :style="item" :class="{active:isshow[index]}" ref="bg"></div>
	  <router-view/>
  </div>
</template>
<script>
	import 'animate.css/animate.min.css'
	export default{
		data(){
			return{
				imglist:[],
				idx:1,
				isshow:[]
			}
		},
		created(){
			for(let i = 1; i <= 11; i++){
				this.imglist[i-1] = {
					
					opacity:0,
					backgroundImage:`url(http://asaki-m.com/oldblog/indexBg/${i}.jpg)`
			
				} 
				this.isshow[i] = false 
			}
			this.imglist[0].opacity = 1
		},
		mounted(){
			this.autoToggleBg()
		},
		methods:{
			autoToggleBg(){
				setInterval(()=>{
					this.idx++
					this.$nextTick(()=>{
						if (this.idx == this.$refs.bg.length) {
							this.$refs.bg[this.idx-1].classList.remove("active")
							this.$refs.bg[this.idx-2].classList.remove("active")
							this.idx = 0
						}
						if(this.$refs.bg[this.idx-2]){
							this.$refs.bg[this.idx-2].classList.remove("active")
						}
						this.$refs.bg[this.idx].classList.add("active")
					})
				},20000)
			}
		}
	}
</script>
<style>
	@import url("./assets/font/iconfont.css");
	.bg{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -999;
		background: url('http://asaki-m.com/oldblog/indexBg/10.jpg') no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	.bg.active{
		animation: show 5s;
		animation-fill-mode: forwards;
	}
	@keyframes show{
		from{opacity: 0;}
		to{opacity: 1;display: block;}
	}
</style>
