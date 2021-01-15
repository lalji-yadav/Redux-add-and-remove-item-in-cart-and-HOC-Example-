import logo from './logo.svg';
import './App.css';
import Clickbuttoncount from "./HOC/clickbuttoncount";
import Hoverclickcount from "./HOC/hoverclickcount";

import Home from "./components/home";

function App() {
  return (
    <div>

      {/* <Clickbuttoncount /> <br /> <br />

      <Hoverclickcount /> */}

      <Home />
      
    </div>
  );
}

export default App;
