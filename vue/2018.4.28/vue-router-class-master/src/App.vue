<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$http.get('/api/4/news/latest').then((data) => {
      console.log(data.data)
    })
  }
}
</script>
