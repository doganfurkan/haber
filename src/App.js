import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/newsSlice";
import {useEffect} from "react";
import { Outlet } from "react-router-dom";


function App() {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header/>
      <main>
        <Outlet/>
        <Navbar/>
      </main>
    </div>
  );
}

export default App;
