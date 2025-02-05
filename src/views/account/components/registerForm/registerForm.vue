<template>

	<div class="register">
		<div class="register-container">
			<div class="register-container-back">
				<span @click="backLogin">
					{{ t('register.title') }}
				</span>
			</div>
			<div class="register-container-main">
				<el-form class="register-form" ref="registerFormRef" :model="accountInfo" :rules="formRules">
					<el-form-item prop="companyName">
						<el-input :placeholder="t('tip.schoolName')" v-model="accountInfo.companyName"></el-input>
					</el-form-item>
					<el-form-item prop="userName">
						<el-input :placeholder="t('tip.name')" v-model="accountInfo.userName"></el-input>
					</el-form-item>
					<el-form-item prop="phone">
						<el-input :placeholder="t('tip.phone')" v-model="accountInfo.phone"></el-input>
					</el-form-item>
					<el-form-item prop="code">
						<el-input class="auth-code-inp" :placeholder="t('tip.authCode')" v-model="accountInfo.code">
							<template #append>
								<div @click="handleGainAuthCode">
									{{ authCodeState.authCodeBtnCon }}
								</div>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" show-password :placeholder="t('tip.password')"
							v-model="accountInfo.password"></el-input>
					</el-form-item>
					<el-form-item prop="confirmPassword">
						<el-input type="password" show-password :placeholder="t('tip.confirmPassword')"
							v-model="accountInfo.confirmPassword"></el-input>
					</el-form-item>
					<el-button type="primary" @click="register" :loading="isBtnLoading">{{ t('buttonText.signUp')
						}}</el-button>
					<div class="register-form-func">
						<span class="sign"><el-checkbox v-model="isAgree">{{ t('tip.agreement') }}</el-checkbox>
						</span>
						<span class="sign-txt" @click="backLogin">{{ t('tip.signInNow') }}</span>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { debounce } from 'lodash'
import { reactive, toRefs, defineEmits, ref } from 'vue'
import { gainAuthCodeStep } from '@/views/account/account'
import { useI18n } from 'vue-i18n'
const { authCodeState, accountInput, handleGainAuthCode } = gainAuthCodeStep()
const registerFormRef = ref()
const emit = defineEmits(['update:activeComponent'])
const { t } = useI18n()
const state = reactive({
	isAgree: false,
	accountInfo: {
		account: '',
		code: '',
		companyName: '',
		password: '',
		confirmPassword: '',
		userName: ''
	} as any,
	formRules: {
		companyName: [
			{ required: true, message: t('tip.schoolName'), trigger: 'blur' }
		],
		userName: [{ required: true, message: t('tip.name'), trigger: 'blur' }],
		phone: [
			{ required: true, message: t('tip.phone'), trigger: 'blur' },
			{
				trigger: 'blur',
				validator: (rule: any, value: string, callback: any) => {
					const accountReg =
						/^1(3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/
					if (!accountReg.test(value)) {
						callback(new Error(t('tip.correctPhone')))
					} else {
					}
				}
			}
		],
		code: [{ required: true, message: t('tip.authCode'), trigger: 'blur' }],
		password: [
			{ required: true, message: t('tip.password'), trigger: 'blur' },
			{
				pattern: /^[\s\S]{6,16}$/,
				message: t('tip.passwordNotEnough'),
				trigger: 'blur'
			}
		],
		confirmPassword: [
			{
				trigger: 'blur',
				validator: (rule: any, value: string, callback: Function) => {
					let pwdReg = /^[\s\S]{6,16}$/
					if (!value) {
						callback(new Error(t('tip.confirmPassword')))
					} else if (pwdReg.test(state.accountInfo.password)) {
						if (value === state.accountInfo.password) {
							callback()
						} else {
							callback(new Error(t('tip.passwordNotSame')))
						}
					} else {
						callback(new Error(t('tip.throughAuthCode')))

					}
				}
			}
		]
	},
	isBtnLoading: false
})

const { accountInfo, isAgree, formRules, isBtnLoading } = toRefs(state)
const register = debounce(
	() => {
		registerFormRef.value.validate(async (valid: boolean) => {
			if (!valid) return false
			if (!isAgree.value) {
				ElMessage({
					type: 'warning',
					message: t('tip.agreementNotChecked')
				})
				return false
			}
			state.isBtnLoading = true
			const req = {
				userType: 1
			} as any
				; ({ msgId: req.msgId, account: req.account } = authCodeState)
				; ({
					code: req.code,
					companyName: req.companyName,
					userName: req.userName,
					password: req.password
				} = state.accountInfo)
			// req.password = md5(req.password).toLocaleLowerCase()
			// const registerData = await registerCall(req)
			// if (registerData.success) {
			// 	router.push({ name: 'Login' })
			// } else {
			// 	ElMessage.error('注册失败')
			// }
			state.isBtnLoading = false
		})
	},
	800,
	{
		leading: true,
		trailing: false
	}
)
const backLogin = () => {
	emit('update:activeComponent', 'loginForm')
}
</script>
<style lang="scss" scoped>
@import './registerForm.scss';
</style>