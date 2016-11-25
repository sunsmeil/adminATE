<template>
  <div class="content">
    <!-- 筛选 -->
<<<<<<< HEAD
    <adscreen></adscreen>  

    <div class="block">
      <!-- 广告位展示table -->
      <adtable></adtable>
    </div>

    <div class="block">
      <!-- 广告位添加form -->
      <adform></adform>
    </div>

=======
    <screen></screen>  
    <div class="block">
      <el-tooltip class="item" effect="dark" content="创建广告位" placement="top-start">
        <el-button  size="small" type="primary"><i class="el-icon-plus"></i></el-button>
      </el-tooltip>
      <el-tabs   type="card" @tab-click="handleClick" @tab-remove="handleRemove">
        <el-tab-pane label="开启广告位">
          <el-table
            :data="tableData"
            style="width: 100%"
            align="center"
            border>
            <el-table-column
              inline-template
              label="广告位ID">
              <div>
                <span style="margin-left: 10px">{{ row._id }}</span>
              </div>
            </el-table-column>
            <el-table-column
              inline-template
              label="广告位名称">
              <div>
                <span style="margin-left: 10px">{{ row.ads_name }}</span>
              </div>
            </el-table-column>
            <el-table-column
              inline-template
              label="所属应用">
              <span style="margin-left: 10px">{{ row.ads_appname }}</span>
            </el-table-column>
            <el-table-column
              inline-template
              label="广告位说明"
              >
              <span style="margin-left: 10px">{{ row.ads_summary }}</span>
            </el-table-column>
            <el-table-column
              inline-template
              label="创建时间">
              <div>
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ row.ads_ctime }}</span>
              </div>
            </el-table-column>
            <el-table-column
              :context="_self"
              inline-template
              label="操作">
              <div>
                <el-button  :plain="true"  @click="handleEdit($index, row)">编辑</el-button>
                <el-button  type="primary"   @click="handleDelete($index, row)">下线</el-button>
              </div>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已关闭广告位">
          <el-table
            :data="tableData"
            style="width: 100%"
            align="center"
            border>
            <el-table-column
              inline-template
              label="广告位ID">
              <div>
                <span style="margin-left: 10px">{{ row._id }}</span>
              </div>
            </el-table-column>
            <el-table-column
              inline-template
              label="广告位名称">
              <div>
                <span style="margin-left: 10px">{{ row.ads_name }}</span>
              </div>
            </el-table-column>
            <el-table-column
              inline-template
              label="所属应用">
              <span style="margin-left: 10px">{{ row.ads_appname }}</span>
            </el-table-column>
            <el-table-column
              inline-template
              label="广告位说明"
              >
              <span style="margin-left: 10px">{{ row.ads_summary }}</span>
            </el-table-column>
            <el-table-column
              inline-template
              label="创建时间">
              <div>
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ row.ads_ctime }}</span>
              </div>
            </el-table-column>
            <el-table-column
              :context="_self"
              inline-template
              label="操作">
              <div>
                <el-button  type="primary"   @click="handleDelete($index, row)">上线</el-button>
              </div>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="block">
      <adform></adform>
    </div>
>>>>>>> 949e5566c616af89f7bbc67e3e31bc3e3781f12d
  </div>
</template>

<script>
<<<<<<< HEAD
import Adscreen from './adscreen'
import Adform from './adform'
import Adtable from './adtable'
export default {
  components: {
    Adscreen,
    Adform,
    Adtable
  },
  data () {
    return {
=======
import Screen from './screen'
import Adform from './adform'
export default {
  components: {
    Screen,
    Adform
  },
  data () {
    return {
      tableData: [{
        _id: '5822d8c48c1cc6fc73730409',
        ads_name: '广告顺序测试',
        ads_summary: '广告顺序测试说明',
        ads_appname:'launcher',
        ads_status:0,
        ads_ctime:'2002-5-8'
      }, {
        _id: '5822d8c48c1cc6fc73730409',
        ads_name: '广告顺序测试',
        ads_summary: '广告顺序测试说明',
        ads_appname:'launcher',
        ads_status:0,
        ads_ctime:'2002-5-8'
      }, {
        _id: '5822d8c48c1cc6fc73730409',
        ads_name: '广告顺序测试',
        ads_summary: '广告顺序测试说明',
        ads_appname:'launcher',
        ads_status:0,
        ads_ctime:'2002-5-8'
      }, {
        _id: '5822d8c48c1cc6fc73730409',
        ads_name: '广告顺序测试',
        ads_summary: '广告顺序测试说明',
        ads_appname:'launcher',
        ads_status:-1,
        ads_ctime:'2002-5-8'
      }],
      options: [{
        value: '选项1',
        label: '魔秀'
      }, {
        value: '选项2',
        label: '微锁屏'
      }],
>>>>>>> 949e5566c616af89f7bbc67e3e31bc3e3781f12d
      value: '',
      input:''
    }
  },
  methods: {
<<<<<<< HEAD
=======
    increment:function () {
      this.counter += 1
      this.$emit('increment')
    },
>>>>>>> 949e5566c616af89f7bbc67e3e31bc3e3781f12d
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
