<template>
  <div class="project">
    <div class="add-project-box" @click="addProject">
      <i class='fa fa-plus-square'></i>
      <span>创建项目</span>
    </div>
    <div class="content-main"  id='page-group'>
      <div v-for="(item,index ) in projectList" :key="index"  class="grid-content trans">
          <i class="fa fa-sun-o trans"></i>
          <p class="group-name">{{item.title}}</p>
          <i class="fa fa-trash-o remove" @click="removeHandle(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Project',
    data () {
      return {
        show: false,
        projectList: []
      }
    },
    methods: {
      addProject () {
        // this.show = true
        this.$prompt(' ', '写入项目名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /.+/,
          inputErrorMessage: '请输入项目名称'
        })
        .then(({value}) => {
          this.projectList.push({
            title: value
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      removeHandle (index) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.projectList.splice(index, 1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') !== 'true') {
          vm.$router.push({
            path: '/login'
          })
        }
      })
    }
  }
</script>
<style>

</style>
