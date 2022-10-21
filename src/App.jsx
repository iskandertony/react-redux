import React, { useState } from 'react';
import './App.css';
import Tasks from './components/tasks';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <div className='App-sub'>
        <TaskForm></TaskForm>
      </div>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
