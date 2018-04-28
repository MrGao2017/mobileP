<template>
  <div>
    <header-todo></header-todo>
    <section-todo></section-todo>
    <footer-todo></footer-todo>
  </div>
</template>

<script>
  import headerTodo from '@/views/todolist/header'
  import sectionTodo from '@/views/todolist/section'
  import footerTodo from '@/views/todolist/footer'

  export default {
    components: {
      headerTodo,
      sectionTodo,
      footerTodo
    }
  }
</script>
<style src='@/assets/css/todolist.css' scoped>

</style>
