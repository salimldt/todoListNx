<template>
	<div class="input-design">
		<input class="input-didi" type="text" id="toggle-all" name="creat" placeholder="Ajouter une tâche" @keyup.enter="create" v-model="newTodo">
	</div>
</template>
<script >
import { mapState } from 'vuex'
import axios from 'axios'
export default {

	data(){
		return {
			
			newTodo:''
		}
	},
	methods:{
		async create(){
			
			try {

				const todo = await this.$axios.$post('https://my-json-server.typicode.com/zwOk9/todoList/todo', { title: this.newTodo, checked:false })
				this.$store.dispatch('addTodo' , todo)
				this.newTodo=''
    			this.$store.dispatch('alertSuccess' , 'Create')
        		setTimeout(() =>{ this.$store.commit('mutationSucess', false ) }, 2000)
        		
			}catch(error){
				console.log(error)
			}

			
    	
    		
    		
			
		}
	}

}


</script>

<style>
.input-design{
	color: rgba(0, 0, 0, 0.87);
    cursor: text;
    display: inline-flex;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.1875em;
    align-items: center;
}
.input-didi{
	border:2px solid rgb(29,29,29);
	font-size:1.75em;
	padding:.25em .5em .3125em;
	/*color:rgba(255,255,255,.5);*/
	border-radius:.25em;
	background:transparent;
	transition:all .100s;
}

</style>