import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import NewTask from './NewTask/NewTask';
import Task from './TaskList/Task/Task';
import './Todo.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Todo extends Component {
    state = {
        taskListing: ['Task1', 'Task2'],
        pendingTasks: ['Pending Task1'],
        completedTasks: ['Completed Task1'],
        taskType: 'pending',
    };

    newTaskHandler = (task) => {   
        let newPendingTasks = [...this.state.pendingTasks];    
        let newCompletedTasks = [...this.state.completedTasks];
        if(this.state.taskType === 'pending') {
            newPendingTasks.push(task);
        } else {
            newCompletedTasks.push(task);
        }

        const newTaskListing = [...this.state.taskListing, task];
        this.setState({
            taskListing: newTaskListing,
            pendingTasks: newPendingTasks,
            completedTasks: newCompletedTasks
        });
        console.log(this.state.taskListing);
    }

    removeTaskHandler = (index) => {
        let newPendingTasks = [...this.state.pendingTasks];    
        let newCompletedTasks = [...this.state.completedTasks];
        if(this.state.taskType === 'pending') {
            newPendingTasks.splice(index, 1);
        } else {
            newCompletedTasks.splice(index, 1);
        }
        const newTaskListing = [...this.state.taskListing];
        newTaskListing.splice(index, 1);
        this.setState({
            taskListing: newTaskListing,
            pendingTasks: newPendingTasks,
            completedTasks: newCompletedTasks
        });
    }

    completeTaskHandler = (index) => {
        let newPendingTasks = [...this.state.pendingTasks];    
        let newCompletedTasks = [...this.state.completedTasks];
        const completedTask = newPendingTasks.splice(index, 1);
        newCompletedTasks.push(completedTask);
        this.setState({
            pendingTasks: newPendingTasks,
            completedTasks: newCompletedTasks
        });
    }

    static getDerivedStateFromProps(nextProps, state) {
        //console.table(state)
        const newTaskListing = nextProps.match.params.tasktype === 'completed' ? [...state.completedTasks] : [...state.pendingTasks];
        return {
            taskListing: newTaskListing, 
            taskType: nextProps.match.params.tasktype
        };
    }
        

    render() {
        return (
            <div>
                <NewTask newTask={(task) => this.newTaskHandler(task)} completed={this.state.taskType}/>
                {this.props.match.tasktype}
                <TransitionGroup component="ul" className="TodoList">
                    {this.state.taskListing.map((taskDesc, i) => {
                        return (
                            <CSSTransition timeout={500} classNames="fade" key={i}>
                                <li key={i}>
                                    <Task 
                                        taskDescription={taskDesc} 
                                        index={i} 
                                        removeTask={indexToRemove => this.removeTaskHandler(indexToRemove)}
                                        completeTask={indexToRemove => this.completeTaskHandler(indexToRemove)}
                                        completed = {this.state.taskType}
                                    />
                                </li>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </div>
        )
    }
}

export default withRouter(Todo);
