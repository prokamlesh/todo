
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Task from "./Components/Task/Task";
import User from "./Components/User/User";

function App() {
  return (
    <div>
      
            <BrowserRouter> 
              <Header/>
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/task" element={<Task/>} />
                <Route path="/user" element={<User/>} />
                
                
              </Routes>
            </BrowserRouter>
            
    </div>

  );
}

export default App;
