import React, { Component } from 'react'

export class TodosTitle extends Component {


    render() {
        return (
            <div className="titleBox">
                <div >
                    <p>Today's task</p>
                    <p className="thisDay" >18/5/2020</p>
                </div>
                <div className="blueCircle"></div>
            </div>
        )
    }
}

export default TodosTitle