import { MainNavBar } from './components/MainNavBar';
import 'bootstrap/dist/css/bootstrap.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import CarList from './pages/CarList';
import FormCar from './pages/FormCar';

function App() {
  return (
    <>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/cadastro" element={<FormCar />} />
        <Route path="/lista" element={<CarList />} />
      </Routes>
    </>

  );
}

export default App;