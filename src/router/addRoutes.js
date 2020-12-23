import Router from "./index"
import store from "@/store/index"

function lazyLoading(name){
  return  () => import(`@/views/page/${name}.vue`)
}

function generaMenu(routers,data){
  data.forEach((item)=>{
    let menu = Object.assign({},item);

    if(menu.path !== "" && menu.path !== null){
      menu.meta = {
        name: menu.name || ""
      };
      menu.name = String(menu.component);
      menu.component = lazyLoading(menu.component);
      routers.push(menu)
    }
    if(menu.children && menu.children.length){
      generaMenu(routers,menu.children)
    }

  })
}

export default (sidebarList = store.state.sidebarList)=>{
  //vuex添加sidebar信息
  store.commit("RefreshSidebarList",sidebarList);

  let route = [
    {
      path:"/index",
      component:()=>import(`@/views/index/index.vue`),
      children:[]
    }
  ];
  //后台sidebarList路由转换组件
  generaMenu(route[0].children,sidebarList);

  //动态添加路由
  Router.addRoutes(route);
}
