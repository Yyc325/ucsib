<template>
  <div class="home">
    <el-container class="home_container">
      <section class="home_section main">
        <section class="panel-collection" data-modular-content-collection="">
          <section class="panel theme--white" data-type="section" id="a-mission-defined-by-possibility" data-modular-content="" data-js="panel" data-index="3">
            <header>
              <h2 class="center">A Mission Defined by Possibility</h2>
            </header>
            <section class="panel theme--white" data-type="position-stmt" id="position-stmt-1" data-width="full">
              <p>At Stanford, our mission of discovery and learning is energized by a spirit of optimism and possibility that dates to our founding. Here you’ll find a place of intellectual expansiveness, wide-ranging perspectives, and freedom to explore new lines of thinking. Buzzing with ideas and innovation, approaching questions with openness and curiosity, pursuing excellence in all we do – this is Stanford.</p>
            </section><!-- panel  -->
            <section class="panel" data-type="call-to-action" id="more-about-stanford">
              <span >More about Stanford</span>
            </section><!-- panel More about Stanford -->
          </section><!-- panel A Mission Defined by Possibility -->
        </section>
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
