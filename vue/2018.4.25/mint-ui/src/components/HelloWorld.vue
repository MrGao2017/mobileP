<template>
  <div class="hello">
   <mt-header fixed title="固定在顶部"></mt-header>
   

   <div class="page-swipe">
     
     <mt-swipe :auto="4000">
      <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
      <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
      <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
    </mt-swipe>
   </div>

  <mt-tabbar>
    <mt-tab-item id="外卖"  @click.native="open">
      <img slot="icon" src="../assets/logo.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="../assets/logo.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>

  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  methods:{
    open(){
      Indicator.open('加载中...');
      // axios.get(XXX,{}).then(function(){
      //   Indicator.close();
      // }).catch()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}


</style>
