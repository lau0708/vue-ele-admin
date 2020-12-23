<template>
  <el-table
    :data="tableData">

    <template v-for="(item,index) in columns">
      <!--是否有选择框-->
      <el-table-column
        v-if="item === 'selection'"
        type="selection"
        width="40">
      </el-table-column>

      <!--通用列无过滤-->
      <el-table-column
        :key="index"
        v-if="item.key&&!item.filter&&!item.opt&&!item.custom||item.trans"
        :formatter="item.trans?item.trans:checkNull"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
        :show-overflow-tooltip="true"
        align="left"
      ></el-table-column>

      <!-- 通用列有过滤 -->
      <el-table-column
        :key="index"
        v-if="item.key && !item.opt && !item.custom && !item.trans && item.filter"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
        :show-overflow-tooltip="true"
        align="left"
      >
        <template slot-scope="scope">
          <span>{{ VueFilter(item.filter)(scope.row[item.key])}}</span>
        </template>
      </el-table-column>

      <!--自定义列-->
      <el-table-column
        :key="index"
        v-else-if="item.custom"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
        align="left"
      >
        <template slot-scope="scope">
          <slot :name="item.custom" v-bind="scope.row"></slot>
        </template>
      </el-table-column>

      <!--操作列-->
      <el-table-column
        label="操作"
        v-else-if="item.opt"
        align="left"
        :width="item.width"
        :key="index"
      >
        <template slot-scope="scope">
          <el-button-group>
            <!--自定义操作按钮-->
            <template  v-for="(opt,key) in item.opt">
              <slot :name="opt.custom" v-bind="scope.row"></slot>
            </template>
          </el-button-group>
        </template>
      </el-table-column>

    </template>
  </el-table>

</template>
<script>
  /**
   *
   *   模板template  props接受当前行数据参数
   *   <template slot="自定义名称" slot-scope="props">
   *     自定义内容标签等
   *   </template>
   *
   *
   *columns:[
   *  "selection",  //是否有选择框
   *  {
   *    title: "每列的title",
   *    key: "取值的key"
   *  },
   *  {
   *    title: "",
   *    trans:(row)=>{  //自定义key函数
   *      return row.value
   *    }
   *  },
   *  {
   *    opt:[
   *      {
   *      "custom":"customerBtn"   //自定义按钮名称
   *      }
   *    ],
   *    width: 200  自定义宽度
   *  }
   *
   * ]
   *
   *
   *
   * **/

  export default {
    name: "e-table",
    props:{
      tableData:{
        type:Array,
        default:()=>{
          return []
        }
      },
      columns:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    data(){
      return {

      }
    },
    methods:{
      //检测内容为空
      checkNull(rows, column, cellValue, index) {
        if (cellValue !== 0 && cellValue !== "0" && !cellValue) {
          return "--";
        }
        return cellValue;
      },
      //获取vue filter过滤器方法
      VueFilter(filterName){
        return Vue.filter(filterName)
      }
    }
  }
</script>

<style scoped>

</style>
