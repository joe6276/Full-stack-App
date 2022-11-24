import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
import {Routes, Route} from 'react-router-dom'
import { Todo } from "./Components/Todos/Todo";
import { SignUp } from "./Components/Signup/SignUp";
function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/todo" element ={<Todo/>}/>
         <Route path="/signup" element ={<SignUp/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
