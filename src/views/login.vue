<template>
    <div>登陆</div>
</template>



<script type="text/ecmascript-6">
  import { addAdmin } from '@/api/admin.js'
  import { getAllDeviceInfoByCodes } from '@/api/query.js'
export default {
    name:'index',
    data(){
        return{
          model: {
            username: "admin",
            password: "123456"
          },
        }
},
    // 计算属性
    computed: {},
    // 方法
    methods:{
      // AddAdmin(){
      //   addAdmin(this.model)
      //     .then(res => {
      //       console.log(res,3333333)
      //     })
      // }

      AddAdmin(){
        getAllDeviceInfoByCodes({
          deviceCodes:['ceshi1','device1']
        })
          .then(res => {
            console.log(res,3333333)
          })
      }
    },
    //存放 过滤器
    filters: {},
    // 监听
    watch:{},

    // 钩子函数
    // 创建期间
    // 对象创建前
    beforeCreate() { },
    // 对象创建完成
    created() {
      this.AddAdmin()
    },
    // 对象挂载前
    beforeMount() { },
    // 对象挂载完毕
    mounted() { },
    //运行期间
    // 对象更新前
    beforeUpdate() { },
    // 对象更新完毕
    updated() { },
    //销毁时期
    // 对象销毁前
    beforeDestroy() { },
    // 对象销毁后
    destroyed() { },
}
</script>

<style scoped>

</style>
