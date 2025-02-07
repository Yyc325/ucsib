<template>
    <div class="login">
        <div class="login-container">
            <div class="login-container-left">
                <div class="bg-img">
                    <!-- <img src="https://website.xycloud.net.cn/images/login-left.png" alt="" /> -->
                </div>
                <div class="login-container-left-content">
                    <div class="logo-container" @click="backHome">
                        <img src="https://website.xycloud.net.cn/images/logo.png" alt="" />
                    </div>
                    <div class="desc-container">
                        <h1>{{ t('login.title') }}</h1>
                    </div>
                </div>
            </div>
            <div class="login-container-right">
                <div class="login-container-right-content">
                    <component :is="activeComponent" ref="loginFormRef"
                        @update:activeComponent="handleActiveComponent" />
                </div>
                <div class="login-container-right-footer">
                    <div class="language-switch">
                        <el-popover trigger="click" v-model:visible="languageVisible"
                            popper-style="z-index:99999!important">
                            <template #reference>
                                <span class="lauguage-name" :style="{ fontSize: '14px' }">
                                    {{ currentLanguage }}
                                    <el-icon>
                                        <CaretBottom />
                                    </el-icon>
                                </span>
                            </template>
                            <div class="language-list">
                                <div class="language-item" v-for="lang in languages" :key="lang.value"
                                    @click="switchLanguage(lang)">
                                    {{ lang.label }}
                                </div>
                            </div>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs, ref, computed } from 'vue'
import { useI18n } from "vue-i18n";
import loginForm from './components/loginForm/loginForm.vue'
import registerForm from './components/registerForm/registerForm.vue'
import forgetForm from './components/forgetForm/forgetForm.vue';
import { CaretBottom } from '@element-plus/icons-vue';
import { router } from '@/router';
export default defineComponent({
    name: 'Account',
    components: {
        loginForm,
        registerForm,
        forgetForm,
        CaretBottom
    },
    setup() {
        const { t, locale } = useI18n();
        const loginFormRef = ref()
        const state = reactive({
            activeComponent: 'loginForm',
            languageVisible: false,
            languages: [
                {
                    label: "简体中文",
                    value: "zh",
                },
                {
                    label: "English",
                    value: "en",
                },
            ]
        })
        const currentLanguage = computed(() => {
            const { label } = state.languages.find((item) => item.value === locale.value) || {}
            return label
        })
        const login = () => {
            loginFormRef.value.login()
        }
        const handleActiveComponent = (name: string) => {
            state.activeComponent = name
        }
        const switchLanguage = (lang: any) => {
            locale.value = lang.value;
            state.languageVisible = false;
        }
        const backHome = () => {
            router.push({
                name: 'Home'
            })
        }

        return {
            t,
            ...toRefs(state),
            loginFormRef,
            currentLanguage,
            login,
            handleActiveComponent,
            switchLanguage,
            backHome
        }
    }
})
</script>
<style lang="scss" scoped>
@import './account';
</style>