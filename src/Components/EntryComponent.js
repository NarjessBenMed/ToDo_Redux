import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import  './EntryComponent.css'
import {addNewTask} from '../Actions/Actions'

 class EntryComponent extends Component {
   
     state = { task:"" }

handleChange=(e)=>
{
   
    this.setState({task: e.target.value})
}


    render() {
        return (
            <div className="entryBloc">
                <span className="listTitle"> Daily Todo lists </span>
                <div className="AddEntry">
                    <input className="entry" type="texte"  value={this.state.task} on onChange={this.handleChange}/> 
                <button  className="addButton"   onClick={() => {this.state.task!="" && this.props.addNewTask(this.state.task)
               this.setState({task:""}) } }> + </button>
                </div>
                
            </div>
        )
    }


 }

    const mapDispatchToProps = dispatch => {
        return {
            addNewTask: payload => {
                dispatch(addNewTask(payload))
            }
        }
    }
 




export default connect(null, mapDispatchToProps)(EntryComponent)





