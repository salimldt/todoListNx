<template class="template">

  
    <list/>
   
</template>

<script>
import { mapState } from 'vuex'
import List from '~/components/List.vue'
// import Logo from '~/components/AppLogo.vue'
import axios from 'axios'

export default {
  
  fetch({ store }) {
    store.commit('addData')
  },
  components:{
    List
  },
  computed: mapState([
    'list'
  ]),
  async mounted(){
    const todo = await this.$axios.$get('https://my-json-server.typicode.com/zwOk9/todoList/todo')
    this.$store.commit('addData' , todo)
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>
<style>
  
  html {
    background: lightgray;
  }
  html, body, #__layout, #__layout > div, #__nuxt, .flex-colum{
    height: 100%;
  }
</style>