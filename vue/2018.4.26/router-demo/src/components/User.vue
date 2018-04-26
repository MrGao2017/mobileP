<template>
  <div>
      wosh用户
      <div class="userList">
        <router-link style="padding:10px" :to="'/user/'+item.tip +'/'+ item.id" v-for="(item,index) of userList" :key="index">{{item.userName}}</router-link>
      </div>
      <div v-show="userInfo.userName">
        <p>姓名:{{userInfo.userName}}</p>
        <p>性别:{{userInfo.sex}}</p>
        <p>爱好:{{userInfo.hobby}}</p>
      </div>
  </div>
</template>
<script>
let data = [
  {
    id:1,
    userName:'leo1',
    tip:'vip',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    userName:'leo2',
    tip:'vip',
    sex:'女',
    hobby:'唱歌'
  },
  {
    id:3,
    userName:'leo3',
    tip:'normal',
    sex:'男',
    hobby:'跳舞'
  }
  
]
export default {
  data(){
    return {
      userList:data,
      userInfo:{}
    }
  },
  watch: {
    $route(){
       this.getData()
    }
  },
  created () {
     this.getData()
   
  },
  methods:{
    getData(){
      let id = this.$route.params.userId;
      if(id){
        this.userInfo = this.userList.filter((item)=>{
          return item.id == id
        })[0]
      }else{
        this.userInfo = {}
      }
    }
  }
}
</script>
