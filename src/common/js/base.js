/**
 * @param {Object} cfg{
 *  self: vue对象
 *  api: 接口名称
 *  data: 传递的参数
 *  onSuccess: 请求成功回调
 *  onError: 请求失败回调
 * }
 */
export const AjaxPost = function ( cfg ) {
  console.log()
  //请求成功回调
  let successCallback = (response) => {
    let jsondata = {};
    try {
      if(typeof(response.data) == 'string'){
          jsondata = JSON.parse(response.data)
      }else{
          jsondata = response.data;
      }
    } catch(e) {
      // statements
      console.log(e, 'Json解析失败');
    }

    if(jsondata&&jsondata.code==200){
      cfg.onSuccess && cfg.onSuccess(jsondata);
    }else {
      cfg.onError && cfg.onError(jsondata);
    }
  }

  let errorCallback = (json)=> {
    cfg.onError && cfg.onError(json);
  }

  cfg.self.$http.post( ENV_OPT.baseApi + cfg.api , cfg.data )
      .then(successCallback, errorCallback);
}