<template>
  <div>
      我是关于页面
      <hr>
      <!--a不用写href 会自动检测到a 的href -->
      <!-- <ul>
        <router-link tag="li" to="/about" exact><a>study</a></router-link>
        <router-link tag="li" to="/about/work"><a>work</a></router-link>
        <router-link tag="li" to="/about/hobby"><a>hobby</a></router-link>  
      </ul> -->
      <!-- 用name的方式来写路由 :to="{name:'name名字'}" -->
      <ul>
        <router-link tag="li" :to="{name:'About'}" exact><a>study</a></router-link>
        <router-link tag="li" :to="{name:'Work'}"><a>work</a></router-link>
        <router-link tag="li" :to="{name:'Hobby'}"><a>hobby</a></router-link>  
      </ul>
      <router-view/>
  </div>
</template>
