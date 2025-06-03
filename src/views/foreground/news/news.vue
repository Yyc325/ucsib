<template>
  <div class="news-container">
    <div class="news-header">
      <div class="news-header-title">News</div>
      <div class="news-header-desc">Explore.Discover.Belong</div>
    </div>
    <div class="news-content">
      <div class="news-content-left">
        <div class="i-carousel">
          <div class="i-carousel-wrapper" ref="carouselWrapperRef">
            <div class="previous-btn" @click="handlePrevious">
              <el-icon><ArrowLeft /></el-icon>
            </div>
            <div class="next-btn" @click="handleNext">
              <el-icon><ArrowRight /></el-icon>
            </div>
            <div class="i-carousel-content" :style="{transform: `translateX(-${380*isActiveDot}px)`}">
              <div class="i-carousel-item" v-for="(item,index) in newsImage" :key="index" :style="{
              backgroundImage: `url(${item.url})`,
            }" :class="{'is-focus':isFocusItem===item.url}" @click="handleFocus(item)">
                <div class="i-carousel-desc">
                  <span class="i-carousel-desc_date">{{item.date}}</span>
                  <span class="i-carousel-desc_content">{{item.desc}}</span>
                </div>
              </div>
            </div>
          </div>
<!--          <div class="i-carousel-trigger">-->
<!--            <div class="i-carousel-trigger__dot" v-for="(item,index) in newsImage" :key="'dot'+index" :class="{-->
<!--              'is-active':isActiveDot==index-->
<!--            }"></div>-->
<!--          </div>-->
        </div>
<!--        <el-carousel type="card" height="508px">-->
<!--          <el-carousel-item v-for="(item,index) in newsImage"  :key="index">-->
<!--            <div class="i-carousel-item" :style="{-->
<!--                          backgroundImage: `url(${item.url})`,-->
<!--                        }">-->
<!--              <div class="i-carousel-desc">-->
<!--                <span class="i-carousel-desc_date">{{ item.date }}</span>-->
<!--                <span class="i-carousel-desc_content">{{ item.desc }}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
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
import {defineComponent, reactive, ref, toRefs} from 'vue';
import {ArrowRight,ArrowLeft} from '@element-plus/icons-vue'
import {ElMessage} from "element-plus";

export default defineComponent({
  name: 'News',
  components:{
    ArrowRight,
    ArrowLeft
  },
  setup() {
    const state = reactive({
      carouselWrapperRef:ref(),
      newsImage: [
        {
          date: "4/16",
          desc: "IB Collaborative Sciences Project",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/about2.png'
        },
        {
          date: "3/25 - 3/39",
          desc: "Chinese Culture Week",
          position: "left",
          url: 'https://website.xycloud.net.cn/images/ChineseCultureWeek.png'
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
      isActiveDot: 0,
      isFocusItem:""
    })
    // 处理轮播图 单项移动
    const handleFocus = (item:any)=>{
      state.isFocusItem = item.url
    }
    // 处理轮播图 向前
    const handlePrevious = ()=>{
      if(state.isActiveDot<=0){
        return
      }
      state.isActiveDot = state.isActiveDot-1
    }
    // 处理轮播图 向后
    const handleNext = ()=>{
      if(state.isActiveDot>=state.newsImage.length-2){
        return
      }
      state.isActiveDot = state.isActiveDot+1
    }
    return {
      ...toRefs(state),
      handleFocus,
      handlePrevious,
      handleNext
    };
  },
});
</script>

<style lang="scss" scoped>
@import './news.scss';
@import "news_mb";
</style>