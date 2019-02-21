<template>
	<div>

		<button class="button-custom" @click.prevent="editTodo">Modifier</button>
		<div v-if="edit" style='position: absolute;position: absolute;width: 100%;height: 100%;top: 0;left: 0;'><div class="btn-abs" @click.prevent="deleteEdit"></div><input class="input-text-custom" placeholder="Entrer todos" :value="item.title" @keyup.enter="updateTodo(item)" ></div>
			<label class="container">
				<input type="checkbox" id="update" name="" class="new-todo" :checked="item.checked" @input="updateTodo(item)" >
				<label  for="update"></label>
				 <span class="checkmark"></span>
			</label>
	</div>
</template>
<script >
import { mapState } from 'vuex'
import axios from 'axios'
export default {
	props:['item'],
	fetch({ store }) {
    	store.dispatch('updateData'),
      store.commit("mutationSucess")
 	},
	data(){
		return{
			edit:false,
			newTodo:''
		}
	},
	computed: mapState([
    	'list','success'
  	]),
  computed:{
      set: (value) => this.store.commit('mutationSucess', value )
  },
	methods:{
		editTodo(){
			this.edit=!this.edit
		},
		async updateTodo(e, item){
      //trouver une autre méthode pour concaténer tout ça
			if(event.target.type === "checkbox"){
        try{
				  const todo = await this.$axios.$put('https://my-json-server.typicode.com/zwOk9/todoList/todo/' +this.item.id, {id:this.item.id,title:this.item.title,checked:event.target.checked})
          //rajouter les responses pour voir si tout a bien été envoyé
				  this.$store.dispatch('updateData' , todo)
          this.$store.dispatch('alertSuccess' , 'checkbox')
          setTimeout(() =>{ this.$store.commit('mutationSucess', false ) }, 2000)
        }catch(error){
          console.log(error)
        }
			}
			if(event.target.type === "text"){
        try{
				  const todo = await this.$axios.$put('https://my-json-server.typicode.com/zwOk9/todoList/todo/' +this.item.id, {id:this.item.id,title:event.target.value,checked:this.item.checked})
				  this.$store.dispatch('updateData' , todo)
          this.$store.dispatch('alertSuccess' , 'text')
         
          this.edit=!this.edit
          setTimeout(() =>{ this.$store.commit('mutationSucess', false ) }, 2000)
        }catch(error){
          console.log(error)
        }
			}
     
			
			  
			// 
		},
		deleteEdit(){
			this.edit=false
		}
	}
}
</script>

<style>
	.btn-abs{
		position: absolute;
    	left: 0;
    	top: 0;
    	width: 100%;
    	height: 100%;
    	opacity: .8;
    	z-index: 300;
    	background-color: black;
	}
	.input-text-custom{
		position: absolute;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    	box-shadow: none;
   		box-sizing: border-box;
    	outline: none;
    	border: none;
    	font-size: 3vw;
    	z-index: 300;
    	background: none;
    	border-bottom: 2px solid white;
    	color:white;
	}
	.new-todo{
		margin-left: 46px;
	}
	.button-custom{
		background-color: #008CBA; 
 		border: none;
  		color: white;
  		 padding: 10px 26px;
  		text-align: center;
  		text-decoration: none;
  		display: inline-block;
  		font-size: 12px;
	}
	
.container {
  /*display: block;*/
  margin-left: 45px;
  top: 0px;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 35px;
  width: 35px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 15px;
  top: 10px;
  width: 7px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>