import Mock from "mockjs"


function login(config){
  let data = JSON.parse(config.body)
  let user = {
    username:"admin",
    password: "123456",
    token: "weqrtweteter1424qwe"
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

export {login}

