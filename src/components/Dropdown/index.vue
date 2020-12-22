<template>
  <div class="drop-down-wrapper">
<!--          :v-model="modelds"-->
    <el-select
      v-model="svalue"
      :placeholder="placeholder"
      :disabled="disabled"

      @change="select"

      filterable
      clearable>
      <el-option v-for="(item,i) in shuzu" :key="i" :label="item.label" :value="item.index" ></el-option>
    </el-select>
  </div>
</template>



<script type="text/ecmascript-6">
  export default {
    name: 'Pagination',
    data(){
      return{
        svalue: this.value
      }
    },
    props: {
      // 传来的数据  - 数组 下拉选择时的数据
      shuzu:{
        required: true,    // 必填的
        type:Array,        // 类型为数组
      },
      // 下拉框选择完后显示的东西
      // 接受外部 v-model 传入的值
      value:{
        type:String        // 类型为字符串
      },
      // 下拉框 不选择时 的默认 灰色字体
      placeholder:{
        type:String,
        default(){
          return '请选择'
        }
      },
      // 默认选择框 能否选择 默认能
      disabled:{
        default() {
          return false;
        }
      }
    },
    // 计算属性
 /*   computed: {

      modelds: {
        get() {
          return this.value
        },

        set(val) {
          this.$emit('update:value', val)
        }
      }
    },*/
    methods: {
      select(val){
        this.$emit('select', { val })
        // console.log(val,'选择的id')
      }

    },
    watch:{
      value(val) {
        // console.log(val,11)
        this.svalue = val;    // 监听外部对 props 属性 value 的变更，并同步到组件内的 data 属性 svalue 中
      },
    }
  }
</script>

<style scoped>

</style>



<!--
 使用方法！！！！~~~~~~~
 <div>
  <Dropdown
    v-model="edit.login"
    @select="select"
    :shuzu="shuzu"
    :placeholder="placeholder"
    >
  </Dropdown>
</div>


edit:{
  login:''
},
shuzu:[
  { index:1,label:'llll' },
  { index:2,label:'kkkk' },
  { index:3,label:'iiii' },
  { index:4,label:'yyyy' },
]
placeholder:'请选择label'



select(val){
  // console.log(val,999999)
  if(val.val == null || val.val == '') return
  else {
    let obj = {};
    obj = this.shuzu.find(item => {
      return item.index == val.val;
    });
    // console.log(obj,333)
    this.edit.login = obj.label
  }
}



-->
