<template>
	<div class="right_part" id="right_part">
		<group-bar>
      <items v-for="item in itemList" :itemTitle="item.itemTitle">
        <i slot="icon">
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
        itemList:[
          {itemTitle:'添加商品'},
          {itemTitle:'添加商品'},
          {itemTitle:'添加商品'},
          {itemTitle:'添加商品'}
        ]
      }
    }
  }
</script>