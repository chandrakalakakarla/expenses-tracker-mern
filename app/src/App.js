import React from 'react';
import './App.css';
import {BrowserRouter, Route ,Routes,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export function ProtectedRoute(props){

  if(localStorage.getItem('EXPENSETRACKER-users'))
  {
    return props.children
  }else{
   return <Navigate to='/login'/>
  }
}
export default App;
