<template>
  <div id="app">
    <ul>
      <router-link to="/" exact tag="li" event="mouseover">
        <i>☹</i>
        <span>首页</span>
      </router-link>
      
      <li>
        <router-link to="/news#abc" active-class="activeClass" event="mouseover">新闻</router-link>   <!--to="news#abc" 跟to.hash配合 -->
      </li>
      <li>
        <router-link to="/about" event="mouseover">关于</router-link>
      </li>
      <li>
        <router-link to="/user" event="mouseover">用户</router-link>
      </li>
    </ul>  
   
      <div class="main">
       
          <router-view name="slider"/> 
      
         <!--如果有多个组件 就配置多个组件的视图的 -->
         <!--  <transition mode="out-in"  name="left"> -->
        <transition  :name="names">
           <router-view class="center"/>
        </transition>
      </div>
   
   {{$route.meta}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      names:'left'
    }
  },
  //监控导航变化
  watch:{
    $route(to,from){
      //to.meta.index目标导航下标
      //from.meta.index 离开导航下标
      if(to.meta.index<from.meta.index){
        this.names = 'left'
      }else{
         this.names = 'right'
      }
    }
  }
}
</script>

<style>
#app {

}
*{ margin: 0; padding: 0;}
ul,li,i{ list-style:none; text-align: center; font-style: normal}
li{ float: left; width: 140px; text-align: center}
ul{ height: 50px; background: pink;   color: #fff; font-size: 14px; line-height: 50px; padding-left: 100px}
li a{ color: #fff; padding-left: 20px; text-decoration: none}
.is-active{background: rgb(204, 67, 67)}
.activeClass{ background: cadetblue}
.center{ font-size: 50px; text-align: center}
.main{ position: relative}

.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}

.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 1s;
}

.left-enter{
  transform: translateX(100%)
}
.left-enter-active,.left-leave-active{
  transition: 1s;
}
.left-leave-to{
  transform: translateX(-100%)
}

.right-enter{
  transform: translateX(-100%)
}
.right-enter-active,.right-leave-active{
  transition: 1s;
}
.right-leave-to{
  transform: translateX(100%)
}



</style>
