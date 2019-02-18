<template>
	<div>
		<a href="#" @click.prevent='del(item)'><img src="~assets/delete.png" width=20px></a>
		<!-- <button  @click.prevent='del(item)'>supp</button> -->
   			
	</div>
</template>
<script >
import { mapState } from 'vuex'
import axios from 'axios'

export default {
	props:['item'],
	fetch({ store }) {
    	store.commit('remove')
 	 },
	computed: mapState([
    	'list'
  	]),
	methods:{
		async del(item){
			console.log(item.id)
			const todo =await this.$axios.$delete('https://my-json-server.typicode.com/zwOk9/todoList/todo/' +item.id)
			console.log(todo)
			this.$store.commit('remove' , item)
		}
	}
}


</script>