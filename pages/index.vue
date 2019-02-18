<template>
   
  <list/>
    
</template>

<script>
import { mapState } from 'vuex'
import List from '~/components/List.vue'
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
