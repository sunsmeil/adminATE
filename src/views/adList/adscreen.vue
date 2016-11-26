<template>
  <div class="block clearfix">
    <el-form :inline="true" :model="formInline" class="demo-form-inline r">
      <el-form-item>
        <el-input v-model="formInline.q" placeholder="搜索内容"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appValue:{},
      formInline: {
        q: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.formInline)
    },
    selectChange() {
      this.selectApp.app = this.appValue;
      console.log(this.selectApp)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../common/style/index";
  .block{
    padding: 30px 25px;
    margin: 20px;
    background-color: #fff;
    text-align: center;
    -ms-flex: 1;
    flex: 1;
  }
</style>
