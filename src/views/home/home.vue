<template>
  <div class="home">
    <el-container class="home_container">
      <section class="home_section main">
        <img src="../../assets/images/layout/home-background.png" alt="">
        <img src="../../assets/images/layout/home-background.png" alt="">
      </section>
    </el-container>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, defineComponent, ref, nextTick } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {

    return {
    };
  },
});
</script>
<style lang="scss" scoped>
@import './home';
</style>
