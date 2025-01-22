<template>
    <div class="login">
        <div class="login__wrapper">
            <div class="login-box">
                <div class="login-box__logo">
                    <div class="logo">
                        <i class="iconfont icon-mogui"></i>
                    </div>
                </div>
                <div class="login-box__top">
                    LOGIN
                </div>
                <div class="login-box__form">
                    <el-form :model="loginData" label-position="top">
                        <el-form-item prop="account">
                            <el-input v-model="loginData.account" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="loginData.password" clearable showPassword
                                placeholder="请输入密码"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="login-box__bottom">
                    <el-button type="primary" @click="loginHandle">立即登录</el-button>
                </div>
                <div class="login-box__tip">
                    没有账号?<div class="tip-text" @click="goRegister">去注册</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, toRefs, PropType } from 'vue';
import { LoginData } from "@/types/login";
import { loginHandle, state, goRegister } from '@/views/Login/login'

const { loginData } = toRefs(state)
</script>
<style lang="scss" scoped>
@import './Login.scss';
</style>