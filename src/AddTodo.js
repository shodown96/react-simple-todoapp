import React, { Component } from 'react'

class AddTodo extends Component{
    state={
        content: ""
    }
    handleChange = (e)=>{
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state)
        this.setState({content:""})
        // console.log(document.querySelector("input").value="") this works too
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add new Todo</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}
export default AddTodo;