
//引入elementUI中文库整合
import elementUI_ZH from "element-ui/lib/locale/lang/zh-CN"

const zh = {
  form:{
    label:{
      userName: "用户名",
      pwd: "密码"
    }
  },
  label:{
    admin:"admin"
  },
  button:{
    cancel: "取消",
    confirm: "确定"
  },
  menu:{
    homePage: "首页",
    modules: "组件",
    useDoc: "使用文档",
    setting: "配置",
    errorPage: "错误页",
    parentMenu: "父级菜单",
    sonMenu: "子级菜单"
  },
  title:{
    tip: "提示"
  },
  ...elementUI_ZH

}
export default zh
