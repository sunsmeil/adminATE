<template>
  <div class="content">
    <!-- 筛选 -->
    <adscreen></adscreen>  

    <div class="block">
      <!-- 广告位展示table -->
      <adtable></adtable>
    </div>
  </div>
</template>

<script>
import Adscreen from './adscreen'
import Adtable from './adtable'
export default {
  components: {
    Adscreen,
    Adtable
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
  .el-tabs{
    width: 100%;
  }
  .nav{
    height: 10%;
    background-color: #20A0FF;
  }
  .bg-purple-light {
    background: #eff2f7;
  }
  .item{
    position: absolute;
    right:3%;
    z-index: 2;
    margin-top: 5px;
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
