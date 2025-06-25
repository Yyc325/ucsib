<template>
	<div class="students">学生展示页</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
	name: 'Students',
	setup() {
		const sayHello = () => {
			console.log('hello');
		}
		return {
			sayHello
		};
	},
});
</script>

<style lang="scss" scoped>
@forward './students.scss';
</style>