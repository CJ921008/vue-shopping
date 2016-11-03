<template>
	<div class="right_part" id="right_part">
		<group-bar></group-bar>

	</div>
</template>

<script>
  import { GroupBar, } from 'compon';

  export default {
    template: '#right_part',
    components: {
      'group-bar':GroupBar
    }
  }
</script>