import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({item, id: this.id++, completed: false})
        },
        deleteTodo(itemID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemID
            })
        },
        toggleCompleted(id) {
            const todo = this.todoList.find((item) => item.id === id)
            
            if(todo)
                todo.completed = !todo.completed
        }
    }
})