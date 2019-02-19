<template>
	
	<div class="flex-colum">
		<h1>Todo List</h1>
		<div>
			<add-todo/>
		</div>

		<ul>
        	<li v-for="(item, id) in list" :key="id"><div class="todo title"><p>{{item.title}}</p></div> 
        	<update-todo  class="tool-update" :item="item"/>
        	<delete  :item="item"/> </li>
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
	padding:0;
}
li{
	display: flex;
	/*margin-left: -39px;*/
	padding: 10px
}
li div,p{
	/*padding-left: 30px;*/
}
.title p{
	font-size: 2em;
    /*width: 60px;*/
    overflow: hidden;
    padding: 0;
}
.tool-update{
	width: 202px;
    line-height: 38px;
    margin-left: 19px;
}
.tool-update input, .tool-update input{
	/*padding-left: 20px;*/
}
.todo {
	width: 24%;
}
</style>