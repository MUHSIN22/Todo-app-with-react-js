import React, { Component } from 'react'

export default class TodoApp extends Component {
    render() {
        return (
            <div className="todo-container">
                <form className="input-section">
                    <h1>Todo App</h1>
                    <input type="text" placeholder="Enter items..."/>
                </form>
                <div className="list-section">
                    <ul>
                        <li>item <i className="fas fa-trash-alt"></i></li>
                        <li>item <i className="fas fa-trash-alt"></i></li>
                        <li>item <i className="fas fa-trash-alt"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}
