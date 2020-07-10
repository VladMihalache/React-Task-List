import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:'',
        priorityDisplay:'',
        priorityValue: 0,
    }

    extend = () =>{
        document.querySelector(".containerAdd").style.zIndex='5'
        setTimeout(function(){document.querySelector(".containerAdd").style.opacity='1'}, 300);
    }

    minimize = () =>{
        document.querySelector(".containerAdd").style.opacity='0';
        setTimeout(function(){document.querySelector(".containerAdd").style.zIndex='-5';}, 300);
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.title && this.state.priorityDisplay)
            this.props.addTodo(this.state.title,this.state.priorityValue, this.state.priorityDisplay);
        this.setState({title:''})
    }
    
    checkPriority = (e) =>{
        if(e.target.value === "Very High") {
            return 4;
        } else if(e.target.value === "High") {
            return 3;
        } else if(e.target.value === "Medium") {
            return 2;
        } else if(e.target.value === "Low") {
            return 1;
        }
    }

    onChange = (e) => this.setState({title: e.target.value })
    onSelect = (e) => {
        this.setState({priorityValue: this.checkPriority(e) })
        this.setState({priorityDisplay: e.target.value })
    }

    render() {
        return (
            <div>
                <div onClick={this.extend} className="submitButtonBlue">
                    <span>+</span>
                    <input 
                    className='addSubmitBlue'
                    type='submit'
                    value='Create Task'
                    onClick={this.extend}
                    />
                </div>
                <form className="containerAdd" onSubmit={this.onSubmit}>
                    <div className="create">
                        <h1>Create a new task</h1>
                        <div className="closeX" onClick={this.minimize}></div> 
                    </div>
                    <input 
                    className='addInput'
                    type='text' 
                    name='title'
                    onChange={this.onChange} 
                    value={this.state.title}
                    placeholder='Task Name'
                    />
                    <p>Priority</p>
                    <div className="radio" >
                        <input 
                        type="radio"
                        name="priority"
                        value="Very High"
                        id="vHigh"
                        className="option1"
                        onChange={this.onSelect}
                        />
                        <input 
                        type="radio"
                        name="priority"
                        value="High"
                        id="high"
                        className="option2"
                        onChange={this.onSelect}
                        />
                        <input 
                        type="radio"
                        name="priority"
                        value="Medium"
                        id="medium"
                        className="option3"
                        onChange={this.onSelect}
                        />
                        <input 
                        type="radio"
                        name="priority"
                        value="Low"
                        id="low"
                        className="option4"
                        onChange={this.onSelect}
                        />
                    </div>
                    <input 
                    className="submitButton"
                    type='submit'
                    value='Add Task'
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
