<template>
  <div class="hello">
    <el-button type="primary" @click="get">主要按钮</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <hr>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <hr>
    <tabs></tabs>


  <my-button @click.native="get"></my-button>

    <div>
      {{myMsg}}
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import Button from './Button.vue'
import axios from 'axios'
export default {
  data () {
    return {
      radio:'1',
      input:'',
      value1: 2,
      myMsg:'默认数据'
    }
  },
  components:{
    'tabs':Tabs,
    'my-button':Button
  },
  methods:{
    get(){
      axios.get('1.txt')
      .then(function(response){
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
