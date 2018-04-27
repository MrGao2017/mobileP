<template>
    <div>
        我是用户
        <div class="userList">
            <!-- <router-link style="padding:10px" :to="{path:'/user/'+item.tip +'/'+ item.id}" v-for="(item,index) of data" :key="index">{{item.userName}}</router-link> -->
            <router-link style="padding:10px" :to="{path:'/user/'+item.tip +'/'+ item.id,query:{info:'flow'}}" v-for="(item,index) of data" :key="index">{{item.userName}}</router-link>
        </div>
        <ul v-if="userInfo.userName" style="font-size:20px">
            <li><p>姓名:{{userInfo.userName}}</p></li>
            <li><p>性别:{{userInfo.sex}}</p></li>
            <li><p>爱好:{{userInfo.hobby}}</p></li>
      </ul>
      <hr>
      <div class="nav-list" v-if="userInfo.userName">
          <!-- <router-link exact to="?info=flow">他的关注</router-link>
          <router-link exact to="?info=shar">他的分享</router-link> -->
          <!-- 对象的形式 -->
          <router-link exact :to="{path:'',query:{info:'flow'}}">他的关注</router-link>
           <router-link exact :to="{path:'',query:{info:'share'}}">他的分享</router-link>
      </div>
      <div>{{$route.query}}</div>
    </div>
</template>
<style>
a{ text-decoration: none; font-size: 25px; color: #000}
</style>

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
    data () {
      return {
          data:data,
          userInfo:{}
      }
     },
     watch:{
         $route(){
            let id = this.$route.params.userId;
            
            if(id){
                this.userInfo = this.data.filter((item)=>{
                    return  item.id == id
                })[0]
            }else{
            this.userInfo = {}
            
            }
         }
     },
     created(){
        let id = this.$route.params.userId;
       console.log(id)
        if(id){
            this.userInfo = this.data.filter((item)=>{
                return  item.id == id
            })[0]
        }else{
           this.userInfo = {}
           console.log(this.userInfo)
        }
     }
 }
</script>
