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
    name: "首页",
    level:1
  },
  {
    path:"/components",
    icon:"el-icon-menu",
    name:"组件",
    level:1
  },
  {
    path:"/document",
    icon:"el-icon-document",
    name:"使用文档",
    level:1
  },
  {
    path:"/setting",
    icon:"el-icon-setting",
    name:"配置",
    level:1
  },
  {
    path: "/error",
    icon:"el-icon-document-delete",
    name:"错误页",
    level:1
  },
  {
    path:"",
    icon:"el-icon-s-grid",
    name:"一级菜单",
    level:1,
    children:[
      {
        path:"/son_menu",
        name:"子级菜单",
        level:2
      }
    ]
  }
]
export default sidebarList
