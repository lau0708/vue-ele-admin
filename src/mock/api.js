import Mock from "mockjs"

import {userList} from "./utils/table"
import {login, logout} from "./utils/account"

let baseUrl = "/api";

Mock.mock("/user_list", "get", userList)
Mock.mock("/login", "post", login)
Mock.mock("/logout", "post", logout)




