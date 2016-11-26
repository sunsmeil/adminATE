<template>
  <div class="content">
    <el-breadcrumb separator="/" class="ml15">
      <el-breadcrumb-item >首页</el-breadcrumb-item>
      <el-breadcrumb-item>广告位管理</el-breadcrumb-item>
      <el-breadcrumb-item>广告位添加</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="block">
      <!-- 广告位添加form -->
      <adform></adform>
    </div>
  </div>
</template>
<script>
import Adform from './adform'
export default {
  components: {
    Adform,
  },
  data () {
    return {
      value: '',
      input:''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$message('编辑~');
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
    handleRemove(tab) {
      console.log(tab);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../common/style/index";
  p{
    color: #fff;
  }
  .bg-purple-light {
    background: #eff2f7;
  }
  .block{
    padding: 30px 25px;
    margin: 20px;
    text-align: center;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
  }
</style>
