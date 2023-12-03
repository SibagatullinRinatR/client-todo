import MyRegForm from './component/myRegForm';
import MyLoginForm from './component/myLoginForm';
import TodoList from './component/TodoList';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar'

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<MyRegForm/>}/>
        <Route path="/login" element={<MyLoginForm/>}/>
      </Routes>
      
    {/* <TodoList/> */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
