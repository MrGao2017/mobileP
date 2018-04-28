<template>
  <div class="doc">
    <div class="doc-nav">
      <ul class="main-menu">
        <li>
          <router-link :to="{path:'#base'}">基础</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#start'}">开始</router-link>
            </li>
            <li>
              <router-link :to="{path:'#dongtai'}">动态路由</router-link>
            </li>
            <li>
              <router-link :to="{path:'#qiantaoluyou'}">嵌套路由</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{path:'#jinjie'}">进阶</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#jinjie1'}">导航钩子</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie2'}">路由元信息</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie3'}">过渡动效</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="doc-view">
      <!--<p>search值为：{{ $route.query }}</p>
      <p>参数值：{{ $route.params.block }}</p>
      <p>has值为：{{ $route.hash }}</p>
      <p>路有名字：{{ $route.name }}</p>-->
      <doc-view></doc-view>
    </div>
  </div>
</template>

<script>
  import DocView from '@/views/backend/doc-view'
  import TWEEN from 'tween.js'

  console.log(TWEEN)

  export default {
    name: 'Doc',
    data () {
      return {}
    },
    components: {
      DocView
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.animate(to)
      })
    },
    beforeRouteUpdate (to, from, next) {
      this.animate(to)
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log(to, from)
      next()
    },
    methods: {
      animate (to) {
        function animate (time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        if (to.hash) {
          var el = document.getElementById(to.hash.slice(1))
          var doc = document.getElementsByClassName('doc')
          if (el) {
            animate()
            new TWEEN.Tween({ tweeningNumber: doc[0].scrollTop })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: el.offsetTop }, 500)
              .onUpdate(function () {
                console.log(this.tweeningNumber.toFixed(0))
                doc[0].scrollTop = this.tweeningNumber.toFixed(0)
              })
              .start()
            window.onscroll = function (ev) {
              ev.preventDefault()
              return false
            }
          }
        }
      }
    }
  }
</script>
<style>

</style>
