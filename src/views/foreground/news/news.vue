<template>
  <div class="news-container">
    <div class="news-header">
      <div class="news-header-title">News</div>
      <div class="news-header-desc">Explore.Discover.Belong</div>
    </div>
    <div class="news-content">
      <div class="news-content-left">
        <!--        <div class="i-carousel">-->
        <!--          <div class="i-carousel-wrapper">-->
        <!--            <div class="i-carousel-content">-->
        <!--              <div class="i-carousel-item" v-for="(item,index) in newsImage" :key="index" :style="{-->
        <!--              backgroundImage: `url(${item.url})`,-->
        <!--            }">-->
        <!--                <div class="i-carousel-desc">-->
        <!--                  <span class="i-carousel-desc_date">{{item.date}}</span>-->
        <!--                  <span class="i-carousel-desc_content">{{item.desc}}</span>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="i-carousel-trigger">-->
        <!--            <div class="i-carousel-trigger__dot" v-for="(item,index) in newsImage" :key="'dot'+index" :class="{-->
        <!--              'is-active':isActiveDot==index-->
        <!--            }"></div>-->
        <!--          </div>-->
        <!--        </div>-->
        <el-carousel type="card" height="508px">
          <el-carousel-item v-for="(item,index) in newsImage"  :key="index">
            <div class="i-carousel-item" :style="{
                          backgroundImage: `url(${item.url})`,
                        }">
              <div class="i-carousel-desc">
                <span class="i-carousel-desc_date">{{ item.date }}</span>
                <span class="i-carousel-desc_content">{{ item.desc }}</span>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="news-content-right">
        <div class="i-carousel-item" v-for="(item,index) in newsImage" :key="index" :style="{
              backgroundImage: `url(${item.url})`,
            }">
          <div class="i-carousel-desc">
            <span class="i-carousel-desc_date">{{ item.date }}</span>
            <span class="i-carousel-desc_content">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';


export default defineComponent({
  name: 'News',
  setup() {
    const state = reactive({
      newsImage: [
        {
          date: "12/16",
          desc: "New Year Talent Show",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/new_year_talent_show.jpg'
        },
        {
          date: "11/28",
          desc: "Parents Meeting",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/parents_meeting.jpg'
        },
        {
          date: "10/11",
          desc: "Front Door Decoration",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/front_door_decoration.jpg'
        },
        {
          date: "11/25",
          desc: "Debates Competition",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/debates_competition.jpg'
        },
        {
          date: "10/29",
          desc: "Basketball Games",
          position: "right",
          url: 'https://website.xycloud.net.cn/images/basketball.jpg'
        },
        {
          date: "10/01",
          desc: "E-sports",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/e-sport.jpg'
        },
      ],
      isActiveDot: 0
    })
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="scss" scoped>
@import './news.scss';
</style>