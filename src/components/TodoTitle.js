import React, { Component } from 'react'

export class TodosTitle extends Component {


    render() {
        return (
            <div className="titleBox">
                <div >
                    <p className="thisDay" >18.05.2020</p>
                    <p className="mainTitle">Today Tasks</p>
                </div>
                <div className="blueCircle"></div>
            </div>
        )
    }
}

export default TodosTitle