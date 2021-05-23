<template>
  <img alt="Vue logo" src="./assets/logo.png">
 {{data.list}}
</template>

<script setup>
import {onMounted ,reactive} from  "vue"
import {getlist} from "@/api";
let data = reactive({
  list:[]
})
onMounted(()=>{
  getlist().then(res=>{
    data.list = res
    console.log(res,'data')
  })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
