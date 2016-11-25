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


    if(jsondata){
      cfg.onSuccess && cfg.onSuccess(jsondata);
    }
  }

  let errorCallback = (json)=> {
    console.log(json);
    cfg.onError && cfg.onError;
  }
   // console.log(ENV_OPT.baseApi)
  cfg.self.$http.post( cfg.api , cfg.data )
      .then(successCallback, errorCallback);
}