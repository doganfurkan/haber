import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/newsSlice";
import {useEffect} from "react";


function App() {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header/>
      <main>
        <Feed/>
        <Navbar/>
      </main>
    </div>
  );
}

export default App;
