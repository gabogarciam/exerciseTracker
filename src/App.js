import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CreateExercise from './components/CreateExercise/CreateExercise';
import CreateUser from './components/CreateUser/CreateUser';
import EditExercise from './components/EditExercise/EditExercise';
import ExerciseList from './components/ExerciseList/ExerciseList';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Route path='/' exact component={Home} />
        <Route path='/all-exercises' component={ExerciseList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create-exercise' component={CreateExercise} />
        <Route path='/create-user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
