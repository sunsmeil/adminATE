<template>
  <div class="hello">

    <el-row>
      <el-col :span="24">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-col :span="3">
            <div class="logo">
           <!--  {{msg}} -->
               <logo></logo>
            </div>
          </el-col>
          <el-col :span="10">
            <el-menu default-active="3" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="3">管理</el-menu-item>
              <el-menu-item index="4">数据报告</el-menu-item>
            </el-menu>
          </el-col> 
           <el-col :span="3" :offset="8">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  设置<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
           </el-col>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navmenu from './Nav'
import Logo from './Logo'
export default {
  components: {
    Navmenu,
    Logo
  },
  props:['msg'],
   data() {
      return {
        options: [{
          value: '选项1',
          label: '退出'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: #42b983;
  }
  logo{
    width: 10px;
  }
  .el-dropdown{
    padding: 10px;
    line-height:50px;
    cursor: pointer;
  }
  .el-menu{
    background-color: #4db3ff;
  }
  span{
    color:#fff;
  }
  .el-menu-item{
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding-top: 10px;
    height: 70px;
  }
  .is-active{
    border-bottom: 5px solid #fff;
    background-color:#4db3ff;
  }
  .el-menu-item:hover{
    border-bottom: 5px solid #fff;
    background-color:#4db3ff;
  }
</style>
