<template>
  <div class="table-box">
    <el-table
      style="width: 100%"
      :header-cell-style="headerStyle"
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
        ></el-table-column>

        <!-- 通用列有过滤 -->
        <el-table-column
          :key="index"
          v-if="item.key && !item.opt && !item.custom && !item.trans && item.filter"
          :prop="item.key"
          :label="item.title"
          :width="item.width"
          :show-overflow-tooltip="true"
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
        >
          <template slot-scope="scope">
            <slot :name="item.custom" v-bind="scope.row"></slot>
          </template>
        </el-table-column>

        <!--操作列-->
        <el-table-column
          label="操作"
          v-else-if="item.opt"
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

    <!--表格分页-->
    <div class="pagination-box" v-if='isPageShow'>
      <el-pagination
        class="pagination"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pagesizelimit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>


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
      },
      isPageShow:{
        type:Boolean,
        default:true
      },
      total:{
        type:Number,
        default:0
      },
      pageSize:{
        type:Number,
        default:10
      },
      pagesizelimit:{
        type:Array,
        default:()=>{
          return [10,20,50,100]
        }
      }
    },
    data(){
      return {
        headerStyle:{
          "color":"black",
          "background":"aliceblue"
        },
        currentPage:1,
        pagesize:this.pagesizelimit[0]
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
      },
      handleCurrentChange(val){
        this.$emit("PageChange",val);
        this.currentPage = val;
      },
      //页面条数改变触发 值：更改之后条数
      handleSizeChange(val){
        this.$emit("SizeChange",val)
        this.pagesize = val;
      }
    }
  }
</script>

<style scoped lang="scss">
  .table-box{
    .pagination-box{
      width: 100%;
      height: 50px;
      background-color: white;
      .pagination{
        float: right;
        margin-top: 10px;
      }
    }
  }
</style>
