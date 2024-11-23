<template>
    <view class="flex-y">
        this is markets
        <view> 
<market :market="item" v-for="(item,index) in markets" :key="index"></market>

        </view>
        <view>这里是前端从api拿到的裸露的数据</view>
        <view>{{ markets }}</view>
    </view>
</template>
<script setup>

import market from '../../components/market.vue'
import {ref,onMounted} from 'vue'
import api from '../../request/api';
//模拟日期的id
const id = ref(1)
const markets = ref()
//建立axios的使用实例


//在组件挂载的时候拿数据
onMounted(async ()=>{
    //useAxios里面封装的函数
   const res = await api.requestMarketsById(1,{})
   console.log(res)
   markets.value = res.markets
 

})

</script>

<style scoped>

</style>