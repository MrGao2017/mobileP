<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
            <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="zhi"></el-slider>
            </div> 
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
            <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
 </template>

<script>
    export default {
        data(){
            return{
                activeName: 'second',
                zhi:10,
                value2: true
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

   

  