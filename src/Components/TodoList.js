import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import './TodoList.css'


 function  TodoList(props)
{

        return (
            <div className="listToDo" >
                {props.tasks.map((el, i)=> (
                    <Task key={i} task={el.task}  id={el.id} completed={el.isComplete} />    
                ))} 
            </div>
        )
    }


const mapStatetoProps=(state)=>
{
    return {tasks: state.tasks}
}


export default connect(mapStatetoProps) (TodoList)