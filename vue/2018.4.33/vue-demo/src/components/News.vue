<template>
    <div id="news">
        <h3>我是新闻页面</h3>
        <ul>
          <li v-for="(val,index) of news" :key="index">{{val}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                news:['111','222','333','444']
            }
        }
    }
</script>

