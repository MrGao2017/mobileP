<template>
  <div id="app" style="height:3000px">
       <div class="name-box">
        <ul>
          <router-link :to="index" tag="li">
            <i>1</i>
            <span>首页</span>
          </router-link>
          
          <li>
            <router-link :to="{path:'/news'}" active-class="pink">新闻</router-link>
            
          </li>
          <li>
            <router-link to="/about" event="mouseover">关于</router-link>
          </li>

          <li>
            <router-link to="/user" event="mouseover">用户</router-link>
          </li>

        </ul>
      </div>
       <router-view name="slider"></router-view>
     <router-view/>   <!-- 简写: <router-view><router-view/>-->
  </div> 
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      index:'/home'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li{ list-style: none}
li{ float: left; margin:15px}
.name-box{ height: 50px}
.pink{ background: pink}
</style>
