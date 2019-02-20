
export const state = () => ({
  list: [{}],
  success:false,
  alert:''
})

export const mutations = {
  addTodo (state, todo) {
    state.list.push(todo)
  },
  updateData(state, todo){

    state.list.forEach(element => {
      if(element.id === todo.id){
          element.title=todo.title
          element.checked=todo.checked
      }
      
    })
  },
  remove (state, todo) {
    state.list = state.list.filter(i => i !== todo)
  },
  // toggle (state, todo) {
  //   todo.done = !todo.done
  // },
  addData(state, todos){
    state.list = todos
  },
  alertSuccess(state ,text){
    
    state.success=true
    state.alert=text
  },
  mutationSucess(state, value) {
      // merge data with previous state
      
     state.success=false
    }
}

export const actions= {
  updateData(state,todo){
    state.commit("updateData", todo)
  },
  remove (state, todo) {
    state.commit("remove", todo)
  },
  addTodo (state, todo) {
    state.commit("addTodo", todo)
  },
  addData (state, todo) {
    state.commit("addData", todo)
  },
  alertSuccess(state ,text){
    state.commit("alertSuccess", text)
    
  }
}