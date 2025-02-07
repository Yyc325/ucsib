<template>
  <div class="home">
    <el-container class="home_container">
      <section class="home_section main">
        <section class="panel-collection" data-modular-content-collection="">
          <section
            class="panel theme--white"
            data-type="section"
            id="Beyond east or west, for all humanity"
            data-modular-content=""
            data-js="panel"
            data-index="3"
          >
            <header>
              <h2 class="center">Beyond east or west, for all humanity</h2>
            </header>
            <section
              class="panel theme--white"
              data-type="position-stmt"
              id="position-stmt-1"
              data-width="full"
            >
              <p>We are committed to cultivating talents</p>
              <p>
                who possess a scientific spirit, humanistic literacy, and a
                strong physique.
              </p>
            </section>
            <!-- panel  -->
            <section
              class="panel"
              data-type="call-to-action"
              id="more-about-ucs"
            >
              <span>More about UCS IB</span>
            </section>

            <section class="panel" data-type="call-to-action">
              <div class="activities-wrapper">
                <div class="activities activitie-1">
                  <div class="info">
                    <div class="title">12.4 Ulink Concert</div>
                    <div class="desc">
                      Ten best singers in Ulink will take you explore the
                      possibilities of music.”
                    </div>
                  </div>
                </div>
                <div class="activities-wrapper-right">
                  <div class="activities activitie-2">
                    <div class="info">
                      <div class="title">12.3 Economic week</div>
                      <div class="desc">
                        Insight into the economy in everyday life
                      </div>
                    </div>
                  </div>
                  <div class="activities activitie-3">
                    <div class="info">
                      <div class="title">10.30 Halloween</div>
                      <div class="desc">Tonight, subvert the daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- panel More about UCS -->
          </section>
          <!-- panel Beyond east or west, for all humanity -->
        </section>
      </section>
    </el-container>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  onMounted,
  defineComponent,
  ref,
  nextTick,
} from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "./home";
</style>
