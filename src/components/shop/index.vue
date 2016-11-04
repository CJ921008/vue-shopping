<template>
	<div class="right_part" id="right_part">
		<group-bar>
      <items>
        
      </items>
    </group-bar>

	</div>
</template>

<script>
  import GroupBar from '../group';
  import items from '../items';

  export default {
    template: '#right_part',
    components: {
      'group-bar': GroupBar,
      'items': items
    },
    data() {
      return {

      }
    }
  }
</script>