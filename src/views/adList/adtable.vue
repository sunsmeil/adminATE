<template>
  <div class="adtable">
      <!-- 广告位操作控制 -->
      <el-button-group class="l mb15" v-if="ads_active == 0" >
        <el-button  
          type="primary" 
          @click="openad()"
        >开启广告</el-button>
        <el-button @click="closead()">已关闭广告</el-button>
      </el-button-group>
      <el-button-group class="l mb15" v-else>
        <el-button  
          @click="openad()"
        >开启广告</el-button>
        <el-button  
          type="primary"  
          @click="closead()"
        >已关闭广告</el-button>
      </el-button-group>
      <el-tooltip class="item r" effect="dark" content="添加" placement="top">
        <el-button  size="small" type="primary"><i class="el-icon-plus"></i></el-button>
      </el-tooltip>
      <!-- 广告列表 -->
      <adlist :tabledata="newtableData" :linestatus="ads_active"></adlist>
  </div>
</template>

<script>
import Adlist from './adlist'
export default {
  components:{
    Adlist
  },
  data () {
    return {
      tablestatus:'ad',
      adsData:[
        {
          _id: '5822d8c48c1cc6fc73730409',
          ads_name: '广告顺序测试',
          ads_summary: '广告顺序测试说明',
          ads_appname:'launcher',
          ads_status:0,
          ads_ctime:'2002-5-87'
        }, 
        {
          _id: '5822d8c48c1cc6fc73730409',
          ads_name: '广告顺序测试',
          ads_summary: '广告顺序测试说明',
          ads_appname:'launcher',
          ads_status:0,
          ads_ctime:'2002-5-85'
        }, 
        {
          _id: '5822d8c48c1cc6fc73730409',
          ads_name: '广告顺序测试',
          ads_summary: '广告顺序测试说明',
          ads_appname:'launcher',
          ads_status:0,
          ads_ctime:'2002-3-88'
        }, 
        {
          _id: '5822d8c48c1cc6fc73730409',
          ads_name: '广告顺序测试',
          ads_summary: '广告顺序测试说明',
          ads_appname:'launcher',
          ads_status:-1,
          ads_ctime:'2002-5-8'
        }
      ],
      adData:[
        {
          act_id: '5822d8c48c1cc6fc73730409',
          bid: '5822d8c48c1cc6fc73730409',
          ads_name:'广告sss',
          stime:'2002-5-87',
          etime:'2002-5-87',
          act_level:2,
          push_status:'推送中',
          act_ctime:'2002-5-87',
          act_status:0
        }, 
        {
          act_id: '5822d8c48c1cc6fc73730409',
          bid: '5822d8c48c1cc6fc73730409',
          ads_name:'广告sss',
          stime:'2002-5-87',
          etime:'2002-5-87',
          act_level:2,
          push_status:'推送中',
          act_ctime:'2002-5-87',
          act_status:0
        }, 
        {
          act_id: '5822d8c48c1cc6fc73730409',
          bid: '5822d8c48c1cc6fc73730409',
          ads_name:'广告sss',
          stime:'2002-5-87',
          etime:'2002-5-87',
          act_level:2,
          push_status:'待推送',
          act_ctime:'2002-5-87',
          act_status:0
        }, 
        {
          act_id: '5822d8c48c1cc6fc73730409',
          bid: '5822d8c48c1cc6fc73730409',
          ads_name:'广告sss',
          stime:'2002-5-87',
          etime:'2002-5-87',
          act_level:2,
          push_status:'待推送',
          act_ctime:'2002-5-87',
          act_status:0
        }, 
        {
          act_id: '5822d8c48c1cc6fc73730409',
          bid: '5822d8c48c1cc6fc73730409',
          ads_name:'广告sss',
          stime:'2002-5-87',
          etime:'2002-5-87',
          act_level:2,
          push_status:'待推送',
          act_ctime:'2002-5-87',
          act_status:0
        }, 
        {
          act_id: '5822d8c48c1cc6fc73730409',
          bid: '5822d8c48c1cc6fc73730409',
          ads_name:'广告sss',
          stime:'2002-5-87',
          etime:'2002-5-87',
          act_level:2,
          push_status:'待推送',
          act_ctime:'2002-5-87 12.30',
          act_status:-1
        }
      ],
      ads_active:0
    }
  },
  methods: {
    openad() {
      //上线状态0
      this.ads_active=0;
    },
    closead() {
      //下线状态-1
      this.ads_active=-1;
    }
  },
  computed:{
    newtableData:function(){
      var that = this;
      var status = that.ads_active;
      return that.adData.filter(function(data) {
        return data.act_status === status
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../common/style/index";
</style>
