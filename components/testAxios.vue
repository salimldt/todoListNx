<template>
	<div class="list">
		{{ip}}
		<button @click.prevent="fetchSomething">get ip</button>
	</div>

</template>

<script>
import axios from 'axios'
export default {
	
	props: ['title'],
	data(){
		return {
			todos:[],
			ip:''
		}
	},
	methods:{
		async fetchSomething() {
    		const ip = await this.$axios.$get('https://my-json-server.typicode.com/typicode/demo/posts/1')
    		this.ip = ip.title
    		console.log(this.ip)
  		}
	}
}

</script>
