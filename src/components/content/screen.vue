<template>
  <div class="block clearfix">
    <div class="grid-content f ml15">
        <el-col :span="6">
          <div class="grid-content">
            <el-select v-model="selectvalue" placeholder="所属应用" :change="appChange">
              <el-option
                v-for="item in options"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
            <el-button type="text">筛选</el-button>
          </div>
        </el-col>
    </div>
    <div class="grid-content r mr15">
      <el-input placeholder="请输入内容" v-model="searchvalue" style="width: 300px;">
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '魔秀'
      }, {
        value: '选项2',
        label: '微锁屏'
      }],
      selectvalue: '',
      searchvalue:''
    }
  },
  methods: {
    appChange(){
      console.log(this.value)
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
