import axios from "axios"


export default {
  data(){
    return {

    }
  },
  mounted(){
  },
  methods:{

    /**
     * @function req_XXX 二次封装ajax请求函数
     * @param {url}   String 请求路径
     * @param {params} Object  传入参数（请求携带的数据）
     * @return {Promise}
     * */

    // get请求
    req_get(url, params={}){
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params:params
        }).then((res)=>{
          //对后台返回状态值(码)进行二次封装（实际项目不同，返回的值不同）
          if(res.data.code===0){
            resolve(res.data);
          }else{
            //错误状态 后端给一个错误msg信息   针对不同错误执行不同操作
            //执行操作
            console.log(res.data.msg)
          }
        }).catch((error)=>{
          //可直接返回错误，也可二次处理
          reject(error);
        })
      })
    },

    // post请求
    req_post(url, params={}){
      return new Promise((resolve, reject) => {
        axios.post(url, params).then((res)=>{
          if(res.data.code === 0){
            resolve(res.data)
          }else{
            this.msg_error(res.data.msg)
          }
        }).catch((error)=>{
          reject(error)
        })
      })
    },

    // put请求
    req_put(url, params={}){
      return new Promise((resolve, reject) => {
        axios.put(url, params).then((res)=>{
          if(res.data.code === 0){
            resolve(res.data)
          }else{
            console.log(res.data.msg)
          }
        }).catch((error)=>{
          reject(error)
        })
      })
    },

    //delete请求
    req_delete(url,params={}){
      return new Promise((resolve, reject) =>{
        axios.delete(url, {data:params}).then((res)=>{
          if(res.data.code === 0){
            resolve(res.data)
          }else{
            console.log(res.data.msg)
          }
        }).catch((error)=>{
          reject(error)
        })
      })
    }


  }
}




