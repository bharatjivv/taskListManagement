import React, { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Todo from "./components/Todo/Todo";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup/Signup';
import Signin from './components/Signup/Signin';
import { useDispatch } from 'react-redux';
import { authActions } from './store';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = (sessionStorage.getItem("id"));
    if(id) {
      dispatch(authActions.login());
    }

  }, [dispatch]);


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element ={<Home />} />
          <Route path='/todo' element ={<Todo/>} />
          <Route path='/signup' element ={<Signup />} />
          <Route path='/signin' element ={<Signin />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App;