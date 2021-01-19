import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: '',
        description : '',
        date : ''
    }
    setTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    setDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    setDate = (e) => {
        this.setState({ date: e.target.value })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ title : '', description : '',date: ''});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{marginLeft:20}}>
                    <input
                        type='text'
                        placeholder='Enter Todo Title'
                        value={this.state.title}
                        onChange={this.setTitle}
                    ></input><br/>
                    <input
                        type='text'
                        placeholder='Enter Todo Description'
                        value={this.state.description}
                        onChange={this.setDescription}
                    ></input><br/>
                    <input
                        type='Date'
                        placeholder='Enter Todo Date'
                        value={this.state.date}
                        onChange={this.setDate}
                    ></input><br/>
                    <input type='submit' value='Add Todo'></input><br/>
                </form>
            </div>
        );
    }
}

export default AddTodo;