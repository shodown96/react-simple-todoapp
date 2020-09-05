import React  from "react";

// const Todos = ()=>{}
function Todos({todos, deleteTodo}){
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item list-group-item" key={todo.id}>
                    <p>{todo.content}
                        <span className="badge red white-text" onClick={()=>{deleteTodo(todo.id)}}>Delete</span>
                    </p>
                </div>
            )
        })
    ) : (
        <p className="text-center center">You have no todo's left, Yay!!</p>
    )
    return(
        <div className="todos collection list-group"> 
            {todoList}
        </div>
    )
}
export default Todos