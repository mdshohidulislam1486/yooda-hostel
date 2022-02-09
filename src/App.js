import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddMeal from './Pages/AddMeal/AddMeal';
import AddStudent from './Pages/AddStudent/AddStudent';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/addMeal' element={<AddMeal/>}/>
          <Route path='/addStudent' element={<AddStudent/>}/>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
