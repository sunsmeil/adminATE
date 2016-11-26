<template>
	<div>
    <div class="strategy-content-title pl5" slot="header">
      <span v-if="titleName">{{ titleName }}</span>
			<slot name="title"></slot>
      <span class="red-text ml5" v-if="titleTips">{{ titleTips }}</span>
      <span 
      	class="r mr20 f18 mt5 cur"
      	:class="{'el-icon-arrow-down' : !isShow, 'el-icon-arrow-up' : isShow }"
				@click="changeFot"
      	></span>
    </div>
    <transition name="slide-fade">
			<slot name="footer" v-if="isShow"></slot>
		</transition>
	</div>
</template>

<script>
	
	export default {
		props:['titleName','titleTips'],
		data() {
			return {
				isShow: false,
				// titleTips: '',
			}
		},
		mounted:function () {
		},
		methods:{
			changeFot: function () {
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(0.7, 0.5, 0.3, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>