<template>
  <el-dropdown :trigger="trigger"  @command="handleCommand">
    <span class="el-dropdown-link">
      {{$t("label."+dropTitle)}}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
      <el-dropdown-menu slot="dropdown">
        <template v-for="(item,index) in dropList">
          <el-dropdown-item :disabled="item.disabled" :command="item.value">
            {{item.label}}
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  /**
   * dropList:[
   *      {
   *        label:"123",  //下拉列表的名字
   *        disabled: false   //是否禁用
   *      }
   *
   * ]
   * **/
  export default {
    name: "e-dropdown",
    props:{
      dropList:{
        type:Array,
        default:()=>{
          return []
        }
      },
      dropTitle:{
        type:String,
        default:""
      },
      trigger:{  //触发下拉的行为   1.click 2.hover
        type:String,
        default: "click"
      }
    },
    methods:{
      handleCommand(val){
        this.dropList.map(item => {
          if(item.value === val) {
            this.label = item.label
          }
        })
        this.$emit('command', val)
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: teal;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
