<template>
	<div :class="itemClass">
		<slot>
			<i :class="iconClass"></i>
		</slot>
		<slot>
			<p v-text="itemTitle"></p>
		</slot>
	</div>
</template>
<script>
	export default {
		props:{
			itemClass: {
				default: 'item item_default'
			},
			itemTitle: {
				default: 'item'
			},
			iconClass: {
				default: 'iconfont icon-expression'
			}
		}
	}
</script>