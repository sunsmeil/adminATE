<template>
  <div class="sidebar">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="train">
            <template slot="title">培训模块</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">培训列表</el-menu-item>
              <el-menu-item index="1-2">培训列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">简历系统</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">简历列表</el-menu-item>
          <el-menu-item index="3">流程配置</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/base";
.el-menu-vertical-demo{
  min-height: 1280px; 
}
</style>
