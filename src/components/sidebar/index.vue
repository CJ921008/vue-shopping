<template>
	<div class="sidebar">
		<ul>
			<li class="side_head">
				<i class="iconfont icon-expression"></i>
			</li>
			<li v-for="item in sidebarList" @click="$router.push(item.link)">
				<i :class="item.iconClass"></i>
				<div :class="item.value" v-text="item.title">
					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				sidebarList:[
					{
						iconClass: "iconfont icon-homeshape",
						title: "主页",
						value: 'side Home',
						link: '/'
					},
					{
						iconClass: "iconfont icon-homeshape",
						title: "用户中心",
						value: 'side User',
						link: '/User'
					},
					{
						iconClass: "iconfont icon-homeshape",
						title: "商品中心",
						value: 'side Product',
						link: '/Product'
					},
					{
						iconClass: "iconfont icon-homeshape",
						title: "代购中心",
						value: 'side Shop',
						link: '/Shop'
					},
				]
			}
		}
	}
</script>