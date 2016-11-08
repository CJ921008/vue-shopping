<template>
	<div :class="itemClass">
		<slot name="icon">
			<i :class="iconClass"></i>
		</slot>
		</slot name="text">
			<p v-text="itemTitle"></p>
		</div>
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