<template>
  <div class="adtable">
      <!-- 广告位操作控制 -->
      <el-button-group class="l mb15" v-if="ads_active == 0" >
        <el-button  
          type="primary" 
          @click="openad()"
        >开启广告位</el-button>
        <el-button @click="closead()">已关闭广告位</el-button>
      </el-button-group>
      <el-button-group class="l mb15" v-else>
        <el-button  
          @click="openad()"
        >开启广告位</el-button>
        <el-button  
          type="primary"  
          @click="closead()"
        >已关闭广告位</el-button>
      </el-button-group>
      <el-tooltip class="item r" effect="dark" content="添加" placement="top">
        <el-button  size="small" type="primary" @click="addAds()"><i class="el-icon-plus"></i></el-button>
      </el-tooltip>
      <!-- 广告位列表 -->
      <adslist :tabledata="newtableData"></adslist>
      
  </div>
</template>

<script>
import Adslist from './adslist'
import { AjaxPost} from '../../common/js/base.js'

export default {
  components:{
    Adslist
  },
  data () {
    return {
      adsData:[],
      ads_active:0
    }
  },
  methods: {
    getAjax(){
      console.log(2)
      const self = this;
      AjaxPost({
        self: this,
        api: 'Irregularads.List&format=json',
        onSuccess: function (r) {
          console.log(r.data.data)
          self.adsData = r.data.data;
        }
      })
    },
    openad() {
      //上线状态0
      this.ads_active=0;
    },
    closead() {
      //下线状态-1
      this.ads_active=-1;
    },
    addAds() {
       window.open("?do=Irregularads.Add");
    }
  },
  computed:{
    newtableData:function(){
      var that = this;
      var status = that.ads_active;
      return that.adsData.filter(function(data) {
        return data.ads_status === status
      })
     
    }
  },
  created () {
    console.log(2)
    this.getAjax();
  }
}
</script>

<style lang="scss" scoped>
  @import "../../common/style/index";
</style>
