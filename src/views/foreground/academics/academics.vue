<template>
  <div class="academics">
    <div class="academics-container">
      <div class="academics-header">
        <div class="academics-header-title">
          {{ t('primaryNav.academics') }}
        </div>
      </div>
      <div class="academics-body">
        <section class="academics-section swapper">
          <div class="swapper-inner">
            <img src="https://www.ulink.cn/wp-content/uploads/2024/12/ib-profile-scaled.jpg" alt="">
          </div>
        </section>
        <section class="academics-section theme-tabs">
          <div class="theme-tabs__inner">
            <div class="theme-tab" v-for="tab in themeTabs" :key="tab.name">
              <div class="theme-tab__label">{{tab.label}}</div>
            </div>
          </div>
        </section>
        <section class="academics-section pre-ib">
          <div class="academics-section__title">{{t('foreground.academics.course.preIb')}}</div>
          <div class="academics-section__body">
            <div class="section-card">
              <div class="section-card__content">
                <article class="section-card__inner">
                  <div class="section-card__title">Pre-IB Education:</div>
                  <div class="section-card__desc">Brief description of pre-ib  education</div>
                  <div class="section-card__title">Courses:</div>
                  <div class="section-card__desc">Brief description of pre-ib course</div>
                  <div class="section-card__link">
                    <span>Explore Courses</span>
                  </div>
                </article>
              </div>
              <div class="section-card__preview">
                <img src="https://static.canva.cn/web/images/87e22a62965f141aa08e93699b0b3527.jpg" alt="">
              </div>
            </div>
          </div>
        </section>
        <section class="academics-section ibdp">
          <div class="academics-section__title">{{t('foreground.academics.course.ibdp')}}</div>
          <div class="academics-section__body">
            <div class="section-card">
              <div class="section-card__content">
                <article class="section-card__inner">
                  <div class="section-card__title">IBDP Education:</div>
                  <div class="section-card__desc">Brief description of IBDP  education</div>
                  <div class="section-card__title">Courses:</div>
                  <div class="section-card__desc">Brief description of IBDP course</div>
                  <div class="section-card__link">
                    <span>Explore Courses</span>
                  </div>
                </article>
              </div>
              <div class="section-card__preview">
                <img src="https://static.canva.cn/web/images/87e22a62965f141aa08e93699b0b3527.jpg" alt="">
              </div>
            </div>
          </div>
        </section>
        <section class="academics-section ibdp-core">
          <div class="academics-section__title">{{t('foreground.academics.course.ibdpCore')}}</div>
          <div class="academics-section__body">
            <div class="ibdp-core-box">
              <div class="ibdp-core-node">CAS</div>
              <div class="ibdp-core-node items-end">TOK</div>
              <div class="ibdp-core-node">EE</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name:'Academics',
  setup(){
    const {t} = useI18n()
    const state = reactive({
      themeTabs:[
        {
          label:'Faculty members',
          name:"1"
        },
        {
          label:'Student:Faculty',
          name:"2"
        },
        {
          label:'Courses',
          name:"3"
        },
      ]
    })
    return {
      t,
      ...toRefs(state)
    }
  }
})
</script>
<style scoped lang="scss">
@use "academics";
@use "academics_media";
</style>