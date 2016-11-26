<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
           <div is="Head_" msg="props传过来的值"></div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="3">
        <div class="grid-content"> 
          <sidebar></sidebar>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content"> 
          <contentbody v-on:increment="incrementTotal" ></contentbody>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Head_ from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Index'
import Contentbody from './index'
export default {
  components: {
    Head_,
    Sidebar,
    Contentbody
  },
  data () {
    return {
      messages: [],
      total:0
    }
  },
  methods: {
    incrementTotal:function() {
      this.total +=1;
    }
  },
  props:['msg'],
  mounted(){
    console.log('el->ref',this.$refs.img)
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: #eeeff4;
}

.content{
  padding: 10px;
}
</style>
