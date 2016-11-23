<template>
  <div class="sidebar">
    <el-row>
      <el-col :span="24">
        <el-menu mode="vertical" default-active="add" class="el-menu-vertical-demo"  theme="dark" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">广告位管理</template>
              <el-menu-item index="1">常规广告位</el-menu-item>
              <el-menu-item index="add">非常规广告位</el-menu-item>
              <el-menu-item index="2">版本渠道</el-menu-item>
              <el-menu-item index="3">广告源填充率</el-menu-item>
              <el-menu-item index="4">广告内容记录</el-menu-item>
              <el-menu-item index="5">操作记录</el-menu-item>
          </el-submenu>
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
@import "../../common/style/index";
.el-menu-vertical-demo{
  min-height: 1280px;
  max-width: 194px;
}
.el-menu-item:hover{
  border-left: 5px solid #20a0ff;
} 
</style>
