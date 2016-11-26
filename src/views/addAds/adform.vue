<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="150px">
    <el-form-item label="广告位名称" prop="ads_name">
      <el-input v-model="form.ads_name" placeholder="如：桌面天气挂件（20字以内)" :maxlength="20"></el-input>
    </el-form-item>
    <el-form-item label="所属应用" prop="ads_appname">
      <el-select v-model="form.ads_appname" placeholder="所属应用">
        <el-option label="魔秀桌面" value="vlocker"></el-option>
        <el-option label="微锁屏" value="launcher"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="广告位说明" prop="ads_summary">
      <el-input type="textarea" v-model="form.ads_summary" placeholder="如支持mipush和接口形式;574mipush上线"></el-input>
    </el-form-item>
    <el-form-item label="广告位样式" class="ad-style">
      <el-input v-model="form.icon" placeholder="广告位icon尺寸"></el-input>
      <el-input v-model="form.cover" placeholder="广告位主图尺寸"></el-input>
    </el-form-item>
    <el-form-item label="推送类型" prop="subtype">
      <el-select v-model="form.subtype" placeholder="类型">
        <el-option label="ICON" value="icon_mask"></el-option>
        <el-option label="挂件" value="pendant"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { AjaxPost } from '../../common/js/base.js';
  export default {
    data() {
      return {
        form: {
          ads_name: '',
          ads_appname: '',
          icon: '',
          cover: '',
          subtype: '',
          ads_summary: ''
        },
        rules: {
          ads_name: [{ 
            type: 'string', required: true, message: '请输入广告位名称'
          }],
          ads_summary: [{ 
            type: 'string', required: true, message: '请输入广告位说明'
          }],
          ads_appname: [
            { required: true, message: '请选择所属应用', trigger: 'change' }
          ],
          subtype: [
            { required: true, message: '请选择推送类型', trigger: 'change' }
          ],
        }
      }
    },
    methods: {
      onSubmit(ev) {
        var self = this;
        self.$refs.form.validate((valid) => {
          if (valid) {
            console.log(valid)
            self.postData();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      reset() {
        this.$refs.form.resetFields();
      },
      postData() {
        const self = this;
        AjaxPost({
          self: this,
          api: 'Irregularads.Add',
          data:self.form,
          onSuccess: function (r) {
            console.log(r)
            self.$message({
              message: '广告位添加成功',
              type: 'success'
            });
          }
        })
      }
    },
    created () {
      this.form = {
          ads_name: 'e',
          ads_appname: 'vlocker',
          icon: '344',
          cover: '233',
          subtype: 'icon_mask',
          ads_summary: 'dddddd'
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
  .ad-style .el-input{
    margin-bottom: 20px;
  }
</style>
