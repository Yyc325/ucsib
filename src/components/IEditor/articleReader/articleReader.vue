<template>
	<div class="article-reader">
		<iframe ref="readerRef" src="/editor/editor.html"></iframe>
		<el-image-viewer
			v-show="state.previewImages.length"
			:url-list="state.previewImages"
			@close="closeViewer"
		></el-image-viewer>
	</div>
</template>
<script setup lang="ts">
	import { onMounted, reactive, ref, defineProps, type PropType, watch } from 'vue';
	// import { uploadFileFn } from '@/api/catalog/catalog';
	const props = defineProps({
		content: {
			type: String as PropType<string>,
			default: ''
		}
	});
	watch(
		() => props.content,
		val => {
			state.editorInstance && state.editorInstance.setDocument('text/lake', val);
		}
	);
	const getSaveData = (type = 'text/lake') => {
		return state.editorInstance ? state.editorInstance.getDocument(type) : '';
	};
	const setData = (data: any) => {
		return state.editorInstance.setDocument('text/lake', data);
	};
	defineExpose({
		getSaveData,
		setData
	});
	const readerRef = ref();
	const state = reactive({
		loading: false,
		content: '',
		editorInstance: null as any,
		previewImages: [] as any[]
	});
	const closeViewer = () => {
		state.previewImages = [];
	};
	onMounted(() => {
		state.loading = true;
		readerRef.value &&
			(readerRef.value.onload = () => {
				const { Doc, document, onlineFile, mindMap, EditorPlugins } =
					readerRef.value.contentWindow;
				const { createOpenViewer, ToolbarUIDescriptor } = Doc;
				state.editorInstance = createOpenViewer(document.getElementById('editor-root'), {
					input: {},
					envAdapter: {
						openLink: (url: string, isExternal: boolean) => {
							window.open(url, '__blank');
						},
						previewImgs: (imgs: any[], index: number) => {
							state.previewImages = [imgs[index].src];
						}
					},
					toc: {
						enable: true,
						allowModifyHash: false
					},
					image: {
						canPreview: () => true,
						isCaptureImageURL() {
							return false;
						}
					},
					file: {
						canDownload: () => true,
						canPreview: () => true,
						onViewerInlineFileClick: (e: MouseEvent, ui: any) => {
							const src = ui.cardData.getSrc();
							const a = document.createElement('a');
							a.href = src;
							a.target = '_blank';
							a.click();
						},
						viewerTooltip(ui: any) {
							const src = ui.cardData.getSrc();
							ui.getDownloadUrl = () => src;
							ui.getPreviewUrl = () => {
								return `https://view.officeapps.live.com/op/view.aspx?src=${src}`;
							};
							ui.getIFrameUrl = () => {
								return `https://view.officeapps.live.com/op/view.aspx?src=${src}`;
							};
							ui.downloadFile = () => {
								const a = document.createElement('a');
								a.href = src;
								// a.download = src;
								// a.target = '_blank';
								a.click();
							};
						}
					},
					video: {
						useOriginSrc: src => {
							return true;
						}
					}
				});
				state.editorInstance &&
					state.editorInstance.setDocument('text/lake', props.content);
				state.loading = false;
			});
	});
</script>

<style scoped lang="scss">
	@use 'articleReader';
</style>
