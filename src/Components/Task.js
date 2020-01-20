import React, { Component } from "react";
import "./Task.css";
import { connect } from "react-redux";

import { testCompleted, deleteTask, editTask } from "../Actions/Actions";

class Task extends Component {
  state = {
    isEddit: false,
    taskName: ""
  };

  handleEditting() {
    this.setState({ isEddit: !this.state.isEddit });
  }

  handleEditName = e => {
    this.setState({ taskName: e.target.value });
  };

  render() {
    return (
      <div className={!this.props.completed ? "task" : "task bgCompleted"}>
        <i
          className={
            this.props.completed
              ? "fas fa-check-circle green-tick"
              : "fas fa-check-circle"
          }
          onClick={() => this.props.handleComplete(this.props.id)}
        ></i>

        <p
          style={{ display: this.state.isEddit ? "none" : "block" }}
          className={this.props.completed ? "underlined" : "p"}
        >
          {this.props.task}
        </p>

        <input
          className={!this.state.isEddit ? "showed" : ""}
          type="text"
          value={this.state.taskName}
          onChange={this.handleEditName}
        />

        <i
          className="fas fa-edit"
          onClick={() => {
            this.state.taskName != "" &&
              this.props.editTask(this.props.id, this.state.taskName);
            this.handleEditting();
          }}
        ></i>
        <i
          className="fas fa-trash-alt"
          onClick={() => this.props.deleteTask(this.props.id)}
        ></i>
      </div>
    );
  }
}
const mapDispatchToProps = disptch => ({
  handleComplete: id => disptch(testCompleted(id)),
  deleteTask: id => disptch(deleteTask(id)),
  editTask: (id, newTask) => disptch(editTask(id, newTask))
});

export default connect(null, mapDispatchToProps)(Task);
