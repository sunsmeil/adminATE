<template>
	<div class="logo-nav">
		<img class="logo" src="../../assets/logo.png" ref="img">
	    <h2>{{msg}}</h2>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'DSP'
    }
  }
}
</script>
<style type="text/css" scoped>
img{
	width: 35px;
	float: left;
	padding: 0 10px;
}
h2{
	line-height: 30px;
	color: #fff;
}

</style>