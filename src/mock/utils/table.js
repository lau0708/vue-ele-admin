import Mock from "mockjs"
let Random = Mock.Random;

Mock.mock('@email')
Mock.mock('@email()')

function userList(){
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(Mock.mock({
      "id": Random.id(),
      "name": Random.name(),
      "address": Random.region(),
      "end_time": Random.date(),
      "email": Random.email(),
      "create_time": Random.date()
    }))
  }

  return Mock.mock({
    code:0,
    result: list,
    msg:"success"
  })
}

export {userList}
