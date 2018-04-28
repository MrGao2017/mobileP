<template>
  <div>
    <div class="block-content">
      这是工作台页面
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Code',
    data () {
      return {}
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
