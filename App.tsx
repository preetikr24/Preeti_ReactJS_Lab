import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseTracker from './Components/ExpenseTracker';
import ShowList from './Components/ShowList';
import './App.css';
function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<ExpenseTracker onTrue={() => { } } onClose={()=>{}} />} />
      <Route path='/showList' element={<ShowList />} />
    </Routes>
   </div>
  );
}

export default App;
