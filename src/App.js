import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

class App extends Component{
  state = {
    todos:[
      {id:1, content: "Buy some milk"},
      {id:2, content: "Play final fantasy VII remake"}
    ]
  }
  deleteTodo = (id)=>{
    console.log(id)
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      // todos:todos
      // if key and value have the same name, do this intsead of todos:todos
      todos
    })
  }
  addTodo = (todo)=>{
      todo.id = Math.random() * 100
      // spread operator [..array, new item] to avoid manipulating the state todos directly
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
      
  }
  render(){
    return(
      <div className="App container">
      <h1 className="text-center text-primary center blue-text">Todo's</h1>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}
export default App;
