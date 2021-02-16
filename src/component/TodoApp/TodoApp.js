import React, { Component } from 'react'
import confirmAlert from 'react-confirm-alert'

export default class TodoApp extends Component {
    state = {
        input : "",
        items : []
    };
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    };  
    storeItems = (event) => {
        event.preventDefault();
        const {input} = this.state
        this.setState({
            items: [...this.state.items,input],
            input: ""
        });
    };
    deleteItem = (key) =>{
        const { items } = this.state
        this.setState({
            items: items.filter((data,index) => index != key) 
        })
    };
    editItem = (key) => {
        const { items,input } = this.state;
        const allItems = () =>{
            
        }
        this.setState({
            
        })

    };  
    render() {
        const { input,items } = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={this.handleChange} 
                        placeholder="Enter items..."
                    />
                </form>
                <div className="list-section">
                    <ul>
                        {items.map((data,index) => (
                            <li key={index}>
                                {data} 
                                <div>
                                    <i id="edit" onClick={() => this.editItem(index) } className="fas fa-pencil-alt"></i>
                                    <i id="trash" onClick={() => this.deleteItem(index)} className="fas fa-trash-alt"></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
