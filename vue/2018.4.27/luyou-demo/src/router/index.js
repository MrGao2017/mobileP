import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import About from '@/components/About'
import noFund from '@/components/404'
import User from '@/components/User'


//about 里边的组件
import Study from '@/views/study'
import Work from '@/views/Work'
import Hobby from '@/views/Hobby'
import Slider from '@/views/slider'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',  //设置选中的class  全局的,
  scrollBehavior (to, from, savedPosition){
    //savedPosition   记录滚动条的坐标  ,点击前进,后退触发
  //  if(savedPosition){
  //   return savedPosition
  //  }else{
  //    return {x:0,y:0}
  //  }
      if(to.hash){
        return {
          selector:to.hash
        }
      }
    
  },
  routes: [
    {
      path: '/',
      component: Home,
      meta:{    //meta 定义数据存在路由信息中
        index:0
      }
    },
    //home
    {
      path: '/home',
      name: 'Home',
      component: Home,
      alias:'/index'   //设置别名   用途:访问index路径的时候,index路劲不变但是跳到 home页  因为访问的是hone根路径所以他不会被激活
    },
    //news
    {
      path: '/news',
      name: 'News',
      meta:{
        index:1
      },
      // component: News   单个组件
      components:{
        default:News,
        slider:Slider
      }
    },
    //关于
    {
      path: '/about',
      // name: 'About',
      component: About,
      children:[
        {
          path:'/',   //默认的字路由,如果有字路由那就不要在父路由设置 name.,应该设置他自己身上 写上/ 代表根路径
          name: 'About',
          meta:{
            index:2
          },
          component: Study,
        },
        {
          path:'/work',  
          name:'Work',
          component: Work,
        },
        {
          path:'/hobby',
          name:'Hobby',
          component: Hobby,
        },
      ]
    },
    //用户
    
    {
      path: '/user/:tip?/:userId?', ///user/:tip?/:id?'
     
      component: User,
      meta:{
        index:3
      }
     
    },
    {
      path: '*',
      // component: noFund       
      // redirect:'/home'    直接写要跳到的路劲
      // redirect:{path:'/home'}   对象的形式
      // redirect:{name:'News'}    name 对应的是 路由routes 里边各个路由的名字
      redirect:(to)=>{   //to目标路由对象 就是访问的路经的路由信息
        if(to.path === '/123'){
          return '/home'
        }else if(to.path === '/abc'){
          return {path:'/news'}
        }else{
          return {path:'/about'}
        }
        

        // return '/home'
      }
    }
  ]
})
