<template>
	<div class="delete">
		<a href="#" @click.prevent='del(item)'><img src="~assets/delete.png" width=35px></a>
		<!-- <button  @click.prevent='del(item)'>supp</button> -->
   			
	</div>
</template>
<script >
import { mapState } from 'vuex'
import axios from 'axios'

export default {
	props:['item'],
	// fetch({ store }) {
 //    	store.dispatch('remove')
 // 	 },
	computed: mapState([
    	'list'
  	]),
	methods:{
		async del(item){
			try{

				const todo =await this.$axios.$delete('https://my-json-server.typicode.com/zwOk9/todoList/todo/' +item.id)
				this.$store.dispatch('remove' , item)
				this.$store.dispatch('alertSuccess' , 'Delete')
        		setTimeout(() =>{ this.$store.commit('mutationSucess', false ) }, 2000)
				
			}catch(error){
				console.log(error)
			}
		}
	}
}


</script>

<style>
	
	.delete{
		padding-top: 5px;
		padding-left: 17px;
	}
</style>