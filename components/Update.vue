<template>
	<div>
		
		<button class="btn-primary" @click.prevent="editTodo">Modifier</button>
		<div v-if="edit"><input placeholder="Entrer todos" :value="item.title" @keyup.enter="updateTodo(item)" ></div>
		<input type="checkbox" name="" class="new-todo" :checked="item.checked" @input="updateTodo(item)" >

	</div>
</template>
<script >
import { mapState } from 'vuex'
import axios from 'axios'
export default {
	props:['item'],
	fetch({ store }) {
    	store.commit('updateData')
 	},
	data(){
		return{
			edit:false,
			newTodo:''
		}
	},
	computed: mapState([
    	'list'
  	]),
	methods:{
		editTodo(){
			this.edit=!this.edit
		},
		async updateTodo(e, item){
			if(event.target.type === "checkbox"){
				console.log("sucess")
				const todo = await this.$axios.$put('https://my-json-server.typicode.com/zwOk9/todoList/todo/' +this.item.id, {id:this.item.id,title:this.item.title,checked:event.target.checked})
				this.$store.commit('updateData' , todo)
			}
			if(event.target.type === "text"){
				 const todo = await this.$axios.$put('https://my-json-server.typicode.com/zwOk9/todoList/todo/' +this.item.id, {id:this.item.id,title:event.target.value,checked:this.item.checked})
				 this.$store.commit('updateData' , todo)
			}
			
			  
			// 
		}
	}
}
</script>