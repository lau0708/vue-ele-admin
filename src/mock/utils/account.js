import Mock from "mockjs"


function login(config){
  let data = JSON.parse(config.body)
  let user = {
    username:"admin",
    password: "123456",
    token: "weqrtweteter1424qwe",
    img: "https://i.gtimg.cn/club/item/face/img/8/15918_100.gif"
  }
  if(data.username === user.username && data.password === user.password){
    return Mock.mock({
      code: 0,
      result:user,
      msg: "成功"
    })
  }else{
    return Mock.mock({
      code: -1,
      msg: "用户名或密码验证失败"
    })
  }
}

function logout(){
  return Mock.mock({
    code: 0,
    msg: "success"
  })
}

export {login, logout}

