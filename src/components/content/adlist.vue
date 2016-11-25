<template>
  <div class="adlist">
      <el-table
        :data="tabledata"
        style="width: 100%"
        align="center"
        border
        @selection-change="handleSelectionChange"
        @row-click="handleDeatil"
        @cell-click="handleCell"
        >
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          inline-template
          label="广告ID">
          <div>
            <span style="margin-left: 10px">{{ row.act_id }}</span>
          </div>
        </el-table-column>
        <el-table-column
          inline-template
          label="活动ID">
          <div>
            <span style="margin-left: 10px">{{ row.bid }}</span>
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
          label="推送时间"
          sortable
          width="180">
          <div>
            <span style="margin-left: 10px">{{ row.stime }}~{{ row.etime }}</span>
          </div>
        </el-table-column>
        <el-table-column
          inline-template
          label="推送优先级顺序"
          
          >
          <span style="margin-left: 10px">{{ row.act_level }}</span>
        </el-table-column>
        <el-table-column
          inline-template
          label="推送状态">
          <span style="margin-left: 10px">{{ row.push_status }}</span>
        </el-table-column>
        <el-table-column
          inline-template
          label="创建时间"
          sortable>
          <div>
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ row.act_ctime }}</span>
          </div>
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作"
          width="180"
          fixed="right">
          <div>
            <el-button  
              :plain="true"  
              @click="handleEdit($index, row)"
              v-if="row.act_status == 0"
            >编辑</el-button>
            <el-button  type="primary"   
              @click="handleLine($index, row)"
              v-if="row.act_status == 0" 
            >下线</el-button>
            <el-button  
              type="primary"   
              @click="handleLine($index, row)"
              v-if="row.act_status == -1" 
              >上线</el-button>
          </div>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-button type="primary">发送<i class="el-icon-upload el-icon--right"></i></el-button>
      </div>
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
      edit:{},
      priority:{}
    }
  },
  methods: {
    handleEdit(index, row) {
      this.edit.act_id = row.act_id;
      this.$message('编辑~');
      console.log(this.edit)
    },
    handleLine(index, row) {
      this.lineData.act_id = row.act_id;
      this.lineData.act_status = row.act_status;
      this.$message({
        message: '操作成功~',
        type: 'success'
      });
      console.log(this.lineData)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleDeatil(val) {
      // console.log(val)
    },
    handleCell(row, column, cell, event) {
      console.log(row, column, cell, event)
      this.editInput()
    },
    editInput() {
      this.$prompt('请输入优先级', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[1-9]\d*$/,
        inputErrorMessage: '优先级格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你输入的优先级是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
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
