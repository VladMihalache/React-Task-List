import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    
  sortTodos = (arr) =>{
    for(let x=0; x < arr.length; x++){
      for(let y=0; y < arr.length; y++){
        if(arr[y+1] !== undefined)
            if(arr[y].priorityValue > arr[y+1].priorityValue){
            let temp = arr[y];
            arr[y] = arr[y+1];
            arr[y+1] = temp;
            }
      }
    }
  }

    render() {
        const isCompleted=this.props.itemsToShow
        let todoArray = []
        if(isCompleted===0){
            for(let i=0;i<this.props.todos.length;i++){
                todoArray.push(this.props.todos[i])
                console.log(todoArray)
            }
            this.sortTodos(todoArray)
        }else if(isCompleted===1){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].completed===false)
                    todoArray.push(this.props.todos[i])
            }
            this.sortTodos(todoArray)
        }else if(isCompleted===2){
            for(let i=0;i<this.props.todos.length;i++){
                if(this.props.todos[i].completed===true)
                    todoArray.push(this.props.todos[i])
            }
            
        }
        this.sortTodos(todoArray)
        todoArray.reverse()
        return todoArray.map((todo) => (
            <TodoItem key={ todo.id } todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo }/>
        )) 
    }
}

export default Todos
