import Mock from "mockjs"

import {userList} from "./utils/table"
import {login} from "./utils/account"

let baseUrl = "/api";

Mock.mock("/user_list", "get", userList)
Mock.mock("/login", "post", login)




