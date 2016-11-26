<template>
  <div class="tablelist">
    <el-table
        :data="tabledata"
        style="width: 100%"
        align="center"
        height="955"
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
          label="广告位说明"
          >
          <span style="margin-left: 10px">{{ row.ads_summary }}</span>
        </el-table-column>
        <el-table-column
          inline-template
          label="创建时间"
          >
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
        <el-table-column
          prop="tag"
          label="所属应用筛选"
          width="150"
          :filters="[{ text: '魔秀桌面', value: 'launcher' }, { text: '微锁屏', value: 'vlocker' }]"
          :filter-method="filterTag"
          inline-template>
          <el-tag :type="row.ads_appname === 'launcher' ? 'primary' : 'success'" close-transition>{{row.ads_appname}}</el-tag>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { AjaxPost} from '../../common/js/base.js'

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
      lineData:{}
    }
  },
  methods: {
    increment:function () {
      this.counter += 1
      this.$emit('increment')
    },
    handleEdit(index, row) {
      //编辑跳转
      window.open("?do=Irregularads.Edit&adsid="+row._id);
    },
    handleLine(index, row) {
      this.lineData.id = row._id;
      this.lineData.ads_status = row.ads_status;
      this.openConfirm(row);
    },
    filterTag(value, row) {
      return row.ads_appname === value;
    },
    postAdslist(row){
      const self = this;
      AjaxPost({
        self: this,
        api: 'Irregularads.Edit',
        data:self.lineData,
        onSuccess: function (r) {
          row.ads_status =r.message;
          self.$message({
            type: 'success',
            message: '操作成功!'
          });
        }
      })
    },
    openConfirm(row) {
      this.$confirm('此操作将改变广告位状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.postAdslist(row);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
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
