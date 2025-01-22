<template>
  <div class="i-layout">
    <div class="i-layout-wrap">
      <div class="i-layout-header">
        <div class="brand-bar">
          <div class="brand-bar__wrapper">

            <div class="logo">
              <span>UCS IBDP</span>
            </div>
            <nav class="menu-gateway-nav">
              <div class="menu-gateway-nav-container">
                <div class="gateway-nav--label">Information for:</div>
                <ul class="menu">
                  <li class="menu-item">Students</li>
                  <li class="menu-item">Faculty & Staff</li>
                  <li class="menu-item">Families</li>
                  <li class="menu-item">Alumni</li>
                  <li class="menu-item">Students</li>
                </ul>
                <div class="search-toggle">
                  <el-icon color="#fff">
                    <Search />
                  </el-icon>
                  <span class="search-toggle-inner">
                    Search
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="menu-primary-nav-container">
          <ul class="menu">
            <li class="menu-item" v-for="item in primaryNavs" :key="item.label">{{ item.label }}</li>
          </ul>
        </div>
        <div class="panel-collection">
          <img src="../../assets/images/layout/home-background.png" alt="">
          <p class="panel-collection-title">UCS IBDP Department</p>
        </div>
      </div>
      <div class="i-layout-body">
        <div class="i-layout-body-content">
          <div class="i-layout-body-content__wrap">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, toRefs, onMounted } from "vue";
import { useUser } from "@/hooks/useUser";
import { loginOutHandle } from "@/views/Login/login";
import localRoutes from '@/router/routes/localRoutes'
import { AppRouteRecordRaw } from '@/router/type'
import { router } from "@/router";
import moment from 'moment'

import { Search } from "@element-plus/icons-vue";

const { getUserInfo } = useUser();

const state = reactive({
  primaryNavs: [
    {
      label: "News",
      path: "",
    },
    {
      label: "Events",
      path: "",
    },
    {
      label: "Academics",
      path: "",
    },
    {
      label: "Research",
      path: "",
    },
    {
      label: "Health Care",
      path: "",
    },
    {
      label: "Campus Life",
      path: "",
    },
    {
      label: "Admission",
      path: "",
    },
    {
      label: "About",
      path: "",
    },
  ]
});
const { primaryNavs } = toRefs(state);

onMounted(() => {
})
</script>
<style lang="scss" scoped>
@import "./layout.scss";
</style>
