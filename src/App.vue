<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup>
</script>
<style lang="scss" scoped>
/*
    路由过渡样式
*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  position: absolute;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-node-enter-active,
.fade-node-leave-active {
  transition: all 0.5s;
  position: relative;
  opacity: 1;
}

.fade-node-enter,
.fade-node-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-menu-enter-active,
.slide-menu-leave-active {
  will-change: transform;
  transition: all 600ms;
  position: absolute;
}

.slide-menu-enter {
  opacity: 0;
  transform: translate(-18px, 0);
}

.slide-menu-leave-to {
  opacity: 0;
  transform: translate(18px, 0);
}
</style>
