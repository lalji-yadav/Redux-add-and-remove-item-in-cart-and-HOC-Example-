import logo from './logo.svg';
import './App.css';
import Clickbuttoncount from "./HOC/clickbuttoncount";
import Hoverclickcount from "./HOC/hoverclickcount";

function App() {
  return (
    <div>

      <Clickbuttoncount /> <br /> <br />

      <Hoverclickcount />
      
    </div>
  );
}

export default App;
