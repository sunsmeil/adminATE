<template>
  <div class="content">
  {{msg}}
  <button v-on:click="increment">{{counter}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '主页',
      counter:0
    }
  },
  methods: {
    increment:function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  color: #fff;
}
.nav{
  height: 10%;
  background-color: #20A0FF;
}
</style>
