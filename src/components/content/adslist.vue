<template>
  <div class="tablelist">
      <el-table
        :data="tabledata"
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
          label="创建时间"
          sortable>
          <div>
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ row.ads_ctime }}</span>
          </div>
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作"
          width="260"
          fixed="right">
          <div>
            <el-button  
              :plain="true"  
              @click="handleEdit($index, row)"
              v-if="row.ads_status == 0"
            >编辑</el-button>
            <el-button  type="primary"   
              @click="handleLine($index, row)"
              v-if="row.ads_status == 0" 
            >下线</el-button>
            <el-button  
              type="primary"   
              @click="handleLine($index, row)"
              v-if="row.ads_status == -1" 
              >上线</el-button>
          </div>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  props:['tabledata'],
  data () {
    return {
      options: [{
        value: '选项1',
        label: '魔秀'
      }, {
        value: '选项2',
        label: '微锁屏'
      }],
      lineData:{},
      edit:{}
    }
  },
  methods: {
    increment:function () {
      this.counter += 1
      this.$emit('increment')
    },
    handleEdit(index, row) {
      this.edit._id = row._id;
      this.$message('编辑~');
      console.log(this.edit)
    },
    handleLine(index, row) {
      this.lineData._id = row._id;
      this.lineData.ads_status = row.ads_status;
      this.$message({
        message: '操作成功~',
        type: 'success'
      });
      console.log(this.lineData)
    }
  },
  created () {

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
