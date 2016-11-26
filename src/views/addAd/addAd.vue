<template>
  <div id="app" class="pt30 pl20 pr20">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <p class="form-title mb20">广告内容</p>
      <el-form-item label="活动ID :" prop="bid">
        <el-col :span="22">
          <el-input v-model="form.bid"></el-input>
        </el-col>
        <el-col :span="1" :offset="1">
          <span class="red-span">必填</span>
        </el-col>
      </el-form-item>
      <el-form-item label="活动标题 :" prop="title">
        <el-col :span="22">
          <el-input v-model="form.title" :maxlength="20" placeholder="字数20个字以内"></el-input>
        </el-col>
        <el-col :span="1" :offset="1">
          <span class="red-span">必填</span>
        </el-col>
      </el-form-item>
      <el-form-item label="活动对话 :">
        <el-col :span="22">
          <el-input v-model="form.dialogs" placeholder="弹窗对话，多条对话请用英文都好分割"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="活动icon :">
        <el-col :span="22">
          <p class="ad-content-text">png.3-10k;尺寸114*114，10kb以内</p>
        </el-col>
        <el-col :span="1" :offset="1">
          <span class="red-span">必填</span>
        </el-col>
        <el-upload
          action="//jsonplaceholder.typicode.com/posts/"
          type="drag"
          :thumbnail-mode="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-upload"></i>
          <div class="el-dragger__text">将文件拖到此处或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="活动主图 :">
        <el-col :span="22">
          <p class="ad-content-text">png.3-10k;尺寸114*114，10kb以内</p>
        </el-col>
        <el-col :span="1" :offset="1">
          <span class="red-span">必填</span>
        </el-col>
        <el-upload
          action="//jsonplaceholder.typicode.com/posts/"
          type="drag"
          :thumbnail-mode="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-upload"></i>
          <div class="el-dragger__text">将文件拖到此处或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="活动链接 :" placeholder="链接地址，可留空">
        <el-col :span="22">
          <el-input v-model="form.url" :maxlength="20" placeholder="字数20个字以内"></el-input>
        </el-col>
        <el-col :span="24">
        <el-checkbox-group v-model="form.url_params">
          <el-checkbox label="imei" name="type">用户标识imei</el-checkbox>
          <el-checkbox label="model" name="type">设备机型</el-checkbox>
          <el-checkbox label="vendor" name="type">生产商</el-checkbox>
          <el-checkbox label="dpi_h" name="type">分辨率高度</el-checkbox>
          <el-checkbox label="dpi_w" name="type">分辨率宽度</el-checkbox>
          <el-checkbox label="vcode" name="type">魔秀app版本号小版本</el-checkbox>
          <el-checkbox label="child" name="type">魔秀app渠道</el-checkbox>
          <el-checkbox label="release" name="type">安卓系统版本</el-checkbox>
          <el-checkbox label="conn" name="type">网络</el-checkbox>
          <el-checkbox label="carrier" name="type">运营商</el-checkbox>
          <el-checkbox label="skips" name="type">请求频率</el-checkbox>
          <el-checkbox label="androidID" name="type">安卓ID</el-checkbox>
          <el-checkbox label="mac" name="type">mac地址</el-checkbox>
        </el-checkbox-group>
        </el-col>
      </el-form-item>
      <el-form-item label="拉活uri :">
        <el-col :span="22">
          <el-input v-model="form.uri" :maxlength="20" placeholder="拉活uri，如：market://details?id=com.moxiu.launcher"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="广告 :" class="red-color">
        <el-radio-group v-model="form.is_ad">
          <el-radio label="0">是</el-radio>
          <el-radio label="1">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <p class="form-title mb20">投放策略</p>
      <div class="strategy pl20">
          <Showbox class="strategy-content"
            >
            <el-checkbox v-model="checkList.times" slot="title">投放时间</el-checkbox>
            <div class="strategy-content-detail" slot="footer">
              <el-form-item label="开始" class="mt10 mb10">
                <el-col :span="22">
                  <el-date-picker
                    v-model="form.act_attr.stime"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                  <!-- <el-input v-model="form.act_attr.stime"></el-input> -->
                </el-col>
              </el-form-item>
              <el-form-item label="结束" class="mt10 mb10">
                <el-col :span="22">
                  <el-date-picker
                    v-model="form.act_attr.etime"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
          <Showbox class="strategy-content"
            >
            <el-checkbox v-model="checkList.skips" slot="title">平缓推送</el-checkbox>
            <div class="strategy-content-detail" slot="footer">
              <el-form-item label="平缓推送" class="mt20 mb10 red-color">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.skips" placeholder="默认每秒3000条"></el-input>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
          <Showbox class="strategy-content"
            >
            <el-checkbox v-model="checkList.active_time" slot="title">挂件显示有效时间</el-checkbox>
            <div class="strategy-content-detail" slot="footer">
              <el-form-item label="有效时间" class="mt20 mb10">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.active_time" placeholder="选择时间，秒为单位，如2700时（2小时）"></el-input>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
          <Showbox class="strategy-content"
            :title-tips="'[米push]'"
            >
            <el-checkbox v-model="checkList.version" slot="title">投放版本</el-checkbox>
            <div class="strategy-content-detail" slot="footer">
             <el-form-item class="mt20 mb10 red-color-two">
                <el-col :span="22">
                  <el-radio-group v-model="form.act_attr.inverse_version">
                    <el-radio label="0">包含制定版本</el-radio>
                    <el-radio label="1">排除指定版本</el-radio>
                  </el-radio-group>
                </el-col>
              </el-form-item>
              <el-form-item class="mt20 mb10 red-color">
                <el-col :span="22">
                    <el-select v-model="form.act_attr.version" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
          <Showbox class="strategy-content"
            :title-tips="'[米push]'"
            >
            <el-checkbox v-model="checkList.channel" slot="title">投放渠道</el-checkbox>
            <div class="strategy-content-detail" slot="footer">
              <el-form-item class="mt20 mb10 red-color-two">
                <el-col :span="22">
                  <el-radio-group v-model="form.act_attr.inverse_channel">
                    <el-radio label="0">包含制定版本</el-radio>
                    <el-radio label="1">排除指定版本</el-radio>
                  </el-radio-group>
                </el-col>
              </el-form-item>
              <el-form-item class="mt20 mb10 red-color">
                <el-col :span="22">
                    <el-select v-model="form.act_attr.channel" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
          <Showbox class="strategy-content"
            :title-tips="'[米push,接口没此项]'"
            >
            <el-checkbox v-model="checkList.tfimei" slot="title">投放imei</el-checkbox>
            <div class="strategy-content-detail" slot="footer">
              <el-form-item class="mt20 mb10 red-color-two">
                <el-col :span="22">
                  <el-radio-group v-model="form.act_attr.inverse_tfimei">
                    <el-radio label="0">包含制定版本</el-radio>
                  </el-radio-group>
                </el-col>
              </el-form-item>
              <el-form-item class="mt20 mb10 red-color">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.tfimei" placeholder="默认每秒3000条"></el-input>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
          <Showbox class="strategy-content"
            :title-tips="'[16年双11淘宝]'"
            >
            <el-checkbox v-model="checkList.expurl" slot="title">曝光链接</el-checkbox>
            <div class="strategy-content-detail label-adw" slot="footer">
              <el-form-item label="淘宝618曝光链接" class="mt10 mb10">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.expurl_618"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="淘宝618点击链接" class="mt10 mb10">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.cliurl_618"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="淘宝双11曝光链接" class="mt10 mb10">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.expurl_double11"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="淘宝链接参数追加" class="mt10 mb10">
                <el-col :span="22">
                  <el-checkbox-group v-model="form.act_attr.url_params">
                    <el-checkbox label="imei" name="type">用户标识imei</el-checkbox>
                    <el-checkbox label="model" name="type">设备机型</el-checkbox>
                    <el-checkbox label="vendor" name="type">生产商</el-checkbox>
                    <el-checkbox label="dpi_h" name="type">分辨率高度</el-checkbox>
                    <el-checkbox label="dpi_w" name="type">分辨率宽度</el-checkbox>
                    <el-checkbox label="vcode" name="type">魔秀app版本号小版本</el-checkbox>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="22">
                  <el-checkbox-group v-model="form.act_attr.url_params">
                    <el-checkbox label="child" name="type">魔秀app渠道</el-checkbox>
                    <el-checkbox label="release" name="type">安卓系统版本</el-checkbox>
                    <el-checkbox label="conn" name="type">网络</el-checkbox>
                    <el-checkbox label="carrier" name="type">运营商</el-checkbox>
                    <el-checkbox label="skips" name="type">请求频率</el-checkbox>
                    <el-checkbox label="androidID" name="type">安卓ID</el-checkbox>
                    <el-checkbox label="mac" name="type">mac地址</el-checkbox>
                  </el-checkbox-group>
                </el-col>
              </el-form-item>
              <el-form-item label="淘宝双11曝光时间" class="mt10 mb10">
                <el-col :span="22">
                  <el-input v-model="form.act_attr.exptime_double11" placeholder="单位：S;含义广告显示X秒后上面曝光"></el-input>
                </el-col>
              </el-form-item>
            </div>
          </Showbox>
      </div>
      <el-form-item class="form-submit">
        <el-button  size="large" type="primary" @click="onSubmit">确定</el-button>
        <el-button  size="large" class="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Showbox from '../../components/showBox/showbox.vue'
import { AjaxPost } from '../../common/js/base.js'
export default {
  data() {
    return {
      form: {
        bid: '',
        title: '',
        dialogs: '',
        icon: '',
        cover: '',
        url: '',
        url_params:[],
        uri:'',
        is_ad: '',
        act_attr: {
          stime: '',
          etime: '',
          skips: '',
          active_time: '',
          version: '',
          channel: '',
          tfimei: '',
          inverse_version: '0',
          inverse_channel: '0',
          inverse_tfimei: '0',
          expurl_618: '',
          cliurl_618: '',
          expurl_double11: '',
          exptime_double11: '',
          url_params:[],
        },
      },
      checkList:{
        times:'',
        skips:'',
        version:'',
        channel:'',
        tfimei:'',
        expurl:'',
        active_time:''
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, 
        {
          value: '选项2',
          label: '双皮奶'
        }, 
        {
          value: '选项3',
          label: '蚵仔煎'
        }, 
        {
          value: '选项4',
          label: '龙须面'
        }, 
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      rules: {
        bid: { required: true, message: '请输入活动ID'},  
        title: { required: true, message: '请输入活动标题'},  
      }
    }
  },
  watch:{
    'form.act_attr.stime' : function (newV) {
        this.form.act_attr.stime = this.formatDate(newV);
    },
    'form.act_attr.etime' : function (newV) {
        this.form.act_attr.etime = this.formatDate(newV);
    },
  },
  methods: {
    onSubmit() {
      this.sendData(this.form);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    formatDate: function (arg) {
      let date = arg.toLocaleString();
      date = date.replace(/\//g,'-').replace(/[\u4E00-\u9FA5]+/,"");
      return date;
    },
    sendData: function (obj) {
      const form = this.form;
      const act_attr = this.form.act_attr;
      const check = this.checkList;
      let attr = {},
          sendData = {},
          checkArr = [];

      for(var k in check) {
        if(check[k]) {
          checkArr.push(k);
        }
      }

      checkArr.map((item)=>{
        if(item == 'times') {
          attr.stime = act_attr.stime;
          attr.etime = act_attr.etime;
        }
        if(item == 'skips') {
          attr.skips = act_attr.skips;
        }
        if(item == 'active_time') {
          attr.active_time = act_attr.active_time;
        }        
        if(item == 'version') {
          attr.inverse_version = act_attr.inverse_version;
          attr[item] = act_attr[item];
        }
        if(item == 'channel') {
          attr.inverse_channel = act_attr.inverse_channel;
          attr[item] = act_attr[item];
        }
        if(item == 'tfimei') {
          attr.inverse_tfimei = act_attr.inverse_tfimei;
          attr[item] = act_attr[item];
        }
        if(item == 'expurl') {
          attr.expurl_618 = act_attr.expurl_618;
          attr.cliurl_618 = act_attr.cliurl_618;
          attr.expurl_double11 = act_attr.expurl_double11;
          attr.exptime_double11 = act_attr.exptime_double11;
          attr.url_params = act_attr.url_params;
        }
      })

      sendData = {
        bid: form.bid,
        title: form.title,
        dialogs: form.dialogs,
        icon: form.icon,
        cover: form.cover,
        url: form.url,
        url_params: form.url_params,
        uri: form.uri,
        is_ad: form.is_ad,
        act_attr: attr,
      }
      console.log(sendData)

      return attr;
    }
  },
  components: {
    Showbox
  },

  mounted(){
  },
}
</script>

<style lang="scss">
@import "../../common/scss/index.scss";

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

.el-form {
  width: 100%;
  .form-title {
    font-size: 18px;
  }
  .el-form-item__label {
    font-weight: bold;
  }
}

.el-upload {
  width: 360px;
  .el-dragger {
    width: 120px;
    height: 120px;
    margin-top: 20px;
    padding: 3px;
    .el-icon-upload {
      font-size: 30px;
      margin: 0;
    }
  }
}


.ad-content-text {
  display: block;
  padding: 6px 10px;
  width: 100%;
  height: 36px;
  color: #1f2d3d;
  border: 1px solid #C0CCDA;
  border-radius: 4px;
  font-size: inherit;
  line-height: normal;
}

.red-span {
  width: 50px;
  display: block;
  text-align: center;
  color: #FF4949;
  border: 1px solid #FF4949;
}

.red-color {
  color: red;
  label {
    color: red;
  }
  .el-radio-group > label:last-child {
    margin-left: 100px;
  }
}

.red-color-two {
  color: red;
  label:nth-child(2) {
    color: red;
    margin-left: 100px;
  }
}
.red-text {
  color: red;
}

.strategy {
  
  .strategy-content{
    border: 1px solid #ccc;
    .strategy-content-title {
      height: 28px;
      line-height: 28px;
      background: #e4e4e4;
      .cur {
        cursor: pointer;
      }
    }
    .strategy-content-detail {
      margin: 0 auto;
      width: 80%
    }

    .label-adw {
      .el-form-item > label {
        width: 150px!important;     
      }
    }
  }
}

.form-submit {
  width: 100%;
  height: 200px;
  padding-top: 100px;
  .el-form-item__content {
    width: 30%;
    margin: 0 auto!important;
    .cancel {
      margin-left: 100px!important;
    }
  }
}
</style>
