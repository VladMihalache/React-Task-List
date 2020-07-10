import React, { Component } from 'react'
import TodoTitle from './components/TodoTitle'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import TodoBar from './components/TodoBar'
import { v4 as uuidv4 } from 'uuid'

import './App.css';


export class App extends Component {

  state={
    todos:[],
    itemsToShow: 0,
  }

  showAll = () =>{
    this.setState({itemsToShow: 0})
  }

  showUncompleted = () =>{
    this.setState({itemsToShow: 1})
  }

  showCompleted = () =>{
    this.setState({itemsToShow: 2})
  }

  delCompleted = () =>{
    this.setState({todos: this.state.todos.filter(todo => todo.completed!==true)})
  }

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id)
      todo.completed = !todo.completed;
      return todo;
    }) })
  }

  delTodo = (id) =>{
    this.setState({todos: this.state.todos.filter(todo => todo.id!==id)})
  }

  addTodo = (title, priorityValue, priorityDisplay) =>{
    const newTodo={
      completed:false,
      title,
      priorityValue,
      priorityDisplay,
      id:uuidv4()
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  } 

  render() {
    return (
      <div className="App">
        <TodoTitle/>
        <TodoBar showAll={this.showAll} showUncompleted={this.showUncompleted} showCompleted={this.showCompleted} delCompleted={this.delCompleted} />
        <div className="todoScroll">
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } itemsToShow={this.state.itemsToShow}/>
        </div>
        <AddTodo addTodo={ this.addTodo} />
      </div>
    );
  }
}

export default App

