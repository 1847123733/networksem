<template>
    <div class="wrapper">
      主页

      <div>
        <pagination
          :total="pagination.total"
          :pageNo.sync="pagination.pageNo"
          :length.sync="pagination.length"

          @pagination="paginations"/>
      </div>
      <div>
        <Dropdown
          v-model="edit.login"
          :shuzu="shuzu"
          :placeholder="placeholder"

          @select="select"/>
      </div>
    </div>
</template>



<script type="text/ecmascript-6">
export default {
    name:'index',
    data(){
        return{
          // 总条数     页数      每页的条数
          pagination: { total: 0, pageNo: 1, length: 8 },
          edit:{
            login:''
          },
          shuzu:[
            { index:1,label:'llll' },
            { index:2,label:'kkkk' },
            { index:3,label:'iiii' },
            { index:4,label:'yyyy' },
          ] ,
          placeholder:'请选择label'
        }
},
    methods:{
      paginations(data){

        console.log(data)
        this.pagination.pageNo = data.pageNo
        this.pagination.length = data.length
      },
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
    },


}
</script>

<style scoped>

</style>
