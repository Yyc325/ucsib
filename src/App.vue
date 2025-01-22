<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component"/>
    </transition>
  </router-view>
</template>
<script setup>
import {onMounted} from "vue";
import {loginOutHandle} from "@/views/Login/login";
// onMounted(() => {
//   window.addEventListener('beforeunload ', (event) => {
//     event.preventDefault()
//     if (event.clientX > document.body.clientWidth && event.clientY < 0 || event.altKey) {
//       loginOutHandle()
//     } else {
//       alert("你正在刷新页面");
//     }
//   })
// })
</script>
<style lang="scss" scoped></style>
