<template>
	<div class="flex-colum">

		<div>
			<add-todo/>
		</div>

		<ul>
        	<li v-for="(item, id) in list" :key="id"><p>{{item.title}}</p> 
        	<update-todo :item="item"/>
        	<delete :item="item"/> </li>
        </ul>
		
	</div>
</template>
<script >
	import { mapState } from 'vuex'
	import Delete from '~/components/Delete.vue'
	import axios from 'axios'
	import addTodo from '~/components/Create.vue'
	import updateTodo from '~/components/Update.vue'
export default {
	props:['item'],
	components:{
		Delete,
		addTodo,
		updateTodo
	},
	data(){
		return {
		
		}
	},
	computed: mapState([
    	'list'
  	]),
	methods:{
		
	}
}


</script>

<style>
.flex-colum{
	display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

ul{
	list-style: none;
}
li{
	display: flex;
	margin-left: -39px;
	padding: 10px
}
</style>