import Mock from "mockjs"

import {userList} from "./utils/table"

let baseUrl = "/api";

Mock.mock("/user_list", "get", userList)




