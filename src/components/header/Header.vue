<template>
  <div class="hello">

    <el-row>
      <el-col :span="24">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-col :span="3">
          <div class="logo">
          {{msg}}
             <logo></logo>
          </div>
        </el-col>
         <el-col :span="3" :offset="18">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
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
    background-color: #3c8dbc;
  }
  span{
    color:#fff;
  }
</style>
