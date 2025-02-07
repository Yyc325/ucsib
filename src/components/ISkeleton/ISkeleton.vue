<template>
	<div class="i-skeleton">
		<div class="i-skeleton-container">
			<div class="i-skeleton-header">
				<h1 class="i-skeleton-title">{{ router.currentRoute.value.meta.title }}</h1>
				<div class="i-skeleton-desc">{{ router.currentRoute.value.meta.description }}</div>
			</div>
			<div class="i-skeleton-body">
				<slot name="body"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ISkeleton',
	props: {


	},
	setup() {
		const router = useRouter();
		return {
			router
		}
	}
});
</script>

<style lang="scss" scoped>
@import './ISkeleton.scss';
</style>