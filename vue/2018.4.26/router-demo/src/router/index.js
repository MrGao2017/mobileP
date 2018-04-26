import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import About from '@/components/About'
import Nofund from '@/components/404'
import user from '@/components/User'

import Study from '@/views/Study'
import Work from '@/views/Work'
import Hobby from '@/views/Hobby'
import Slider from '@/views/slider'



let router = new VueRouter({
  mode:'history', 
  scrollBehavior (to, from, savedPosition){   //点击浏览器的前进后退,切换导航触发
    //to 进去目标路由对象  要去哪里
    //from离开路由对象  从哪里来
    //savedPosition记录滚动条的坐标  点击前进后退的时候记录的值
   console.log(to)
   console.log(from)
   console.log(savedPosition)
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  },
  routes:[
    {
      path:'/home',
      component:Home,
      name:'home',    //设置路由的名字
      alias: '/index'  //可设置别名,当有index 的路径没有跳到home
    },
    {
      path:'/news',
      name:'news',
      // component:News   //单个视图
      components:{    //如果有多个试图就走这个
        default:News,   //默认的走 <router-view/>
        slider:Slider    //如果有多个试图走 <router-view name="slider"></router-view>
      }
    },
    
    {
      path:'/about',
      component:About,
      children:[
        {
          path:'',   //默认的字路由
          component:Study
        },
        {
          path:'work',   //不要写/ 都是相对于根路径
          component:Work
        },
        {
          path:'hobby',   //不要写/ 都是相对于根路径
          component:Hobby
        },
      ]
    },
    {
      path:'/user/:tip?/:userId?',  //userId写什么名字都可以
      name:'user',
      component:user
    },
    // {
    //   path:'*',
    //   component:Nofund
    // }
    {
      path:'*',
      redirect:(to) => {
        return '/home'
      }
    }
    
  ]
})

export default router

