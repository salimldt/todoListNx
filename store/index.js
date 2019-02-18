
export const state = () => ({
  list: [{}]
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
  toggle (state, todo) {
    todo.done = !todo.done
  },
  addData(state, todos){
    state.list = todos
  },


}

export const actions= {
  
}