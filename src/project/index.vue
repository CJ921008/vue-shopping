<template>
<div class="container">
  <header-bar>
    	
  </header-bar>
  <div class="content_body">
  	<sider-bar></sider-bar>
  	  <router-view></router-view>
  </div>

</div>
</template>

<script>
import { HeaderBar, SiderBar } from 'compon';

export default{
  components:{
  	HeaderBar,
  	SiderBar
  }
}
</script>
<style>
@import 'style.css';
</style>