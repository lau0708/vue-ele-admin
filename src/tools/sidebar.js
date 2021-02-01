/**
 * 备注
 * 无下拉菜单
 * 例：{
 *      path:"/path",        //路径
 *      icon:"",            //图标
 *      name:"菜单名字",     //菜单标题
 *      level:1             //菜单等级
 *    }
 *
 * 有下拉菜单
 *
 * {
 *      path:"",            //path为空
 *      icon:"",            //图标
 *      name:"菜单名字",     //菜单标题
 *      level:1             //菜单等级
 *      children:[
 *        {
 *          path:"/son_menu",   //子级菜单路径
            name:"子级菜单",      //子级菜单名称
            level:2              //菜单等级
 *        }
 *      ]
 *    }
 * **/

const sidebarList = [
  {
    path: "/home_page",
    icon:"el-icon-location",
    component:"homePage",
    level:1,
    meta: { title: '首页' }
  },
  {
    path:"/components",
    icon:"el-icon-menu",
    component:"modules",
    level:1
  },
  {
    path:"/setting",
    icon:"el-icon-setting",
    component:"setting",
    level:1
  },
  {
    path: "",
    icon:"el-icon-document-delete",
    component:"errorPage",
    level:1,
    children:[
      {
        path:"/404",
        name: "404",
        component:"404",
        level:2
      }
    ]
  },
  {
    path:"",
    icon:"el-icon-s-grid",
    component:"parentMenu",
    level:1,
    children:[
      {
        path:"/son_menu",
        component:"sonMenu",
        level:2
      }
    ]
  },
  {
    path:"/document",
    icon:"el-icon-document",
    component:"useDoc",
    level:1
  }
]
export default sidebarList
