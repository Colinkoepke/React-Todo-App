import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';

function App() {

  const [taskType, setTaskType] = useState('pending0');

  const onTaskChangeHandler = (task) => {
    setTaskType(task);
  }

  return (
    <div className="App">
        <Router>
          <Header changeTask={taskType => onTaskChangeHandler(taskType)}/>
          <Route
            path="/tasks/:tasktype" 
            render={(props) => <Todo {...props} taskType={taskType} />}
          />
        </Router>
    </div>
  );
}

export default App;
