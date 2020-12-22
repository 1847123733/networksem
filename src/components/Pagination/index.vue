<template>
  <div class="pagination-container">
    <el-pagination
      background
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :total="total"
      :page-sizes="pageSizes"
      :layout="layout"

      @size-change="sizeChangeHandler"
      @current-change="currentChangeHandler"
    ></el-pagination>
<!--  .sync  请求两次、页码没有改变的问题  没有测试!  -->
  </div>
</template>



<script type="text/ecmascript-6">
export default {
    name: 'Pagination',
    props: {
      // 总数
      total: {
        required: true,   // 必填的字符串
        type: Number
      },
      //  页数  默认第一页
      pageNo: {
        type: Number,
        default: 1    // 初始值
      },
      // 每页的个数 默认 8 条数据
      length: {
        type: Number,
        default: 8
      },
      // 条数选择
      pageSizes: {
        type: Array,
        default() {
          return [6, 8, 10, 20, 30, 40]
        }
      },
      // 分页器的工具栏
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
    },
      // 计算属性
    computed: {
      // 页数的
      currentPage: {
        // get 是基于其他的数据来获取到 computed 里定义的那个数据
        get() {
          return this.pageNo
        },
        // set 是根据 computed 里定义的那个数据来改变其他的数据
        // 改变 pageNo 页数的
        set(val) {
          this.$emit('update:pageNo', val)
        }
      },
      // 每页 个数的
      pageSize: {
        get() {
          return this.length
        },
        // 改变 length 每页的个数
        set(val) {
          this.$emit('update:length', val)
        }
      }
    },
    methods: {
      // 换每页条数
      sizeChangeHandler(val) {
        this.$emit('pagination', {  length: val,pageNo:this.currentPage,A:'换每页的条数' })
      },
      // 换页
      currentChangeHandler(val) {
        this.$emit('pagination', { pageNo: val,length: this.pageSize,A:'换页' })
      }
    }
}
</script>

<style scoped>
  .pagination-container {
    text-align: center;
  }
  .pagination-container >>> .el-pagination.is-background .btn-next,
  .pagination-container >>> .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li{ background-color: #fff; }
  .pagination-container >>> .el-pagination.is-background .el-pager li{ background-color: #fff; }
  .pagination-container >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #08C0B9;color: #FFF; }
  .pagination-container >>>  .el-pagination.is-background .el-pager li.active {
    color: #fff;cursor: default; }
  .pagination-container >>> .el-pagination.is-background .el-pager li:hover { color: #08C0B9; }
  .pagination-container >>>.el-pagination.is-background .el-pager li:not(.disabled):hover { color: #08C0B9; }
  .pagination-container >>> .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    background-color: #08C0B9;color: #FFF; }

</style>


<!--
-----------------------
类型及其默认值如下：

String   ''

Number  0

Array []

Object  {}
-------------------------
computed: {
    editData () {
        return this.value
    }
}
// 相当于
computed: {
    editData: {
      get () {
        return this.value
      }
    }
}
-------------------------

-->


<!--
<div>
  <pagination
    :total="pagination.total"
    :pageNo.sync="pagination.pageNo"
    :length.sync="pagination.length"
    @pagination="paginations"
  />
</div>

 // 总条数     页数      每页的条数
pagination: { total: 0, pageNo: 1, length: 8 },


paginations(data){
  console.log(data)
  this.pagination.pageNo = data.pageNo
  this.pagination.length = data.length
  todo~~~~ 请求数据
},


-->
