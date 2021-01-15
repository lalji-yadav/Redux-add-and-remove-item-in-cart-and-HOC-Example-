// import logo from './logo.svg';
// import './App.css';
// import Clickbuttoncount from "./HOC/clickbuttoncount";
// import Hoverclickcount from "./HOC/hoverclickcount";

// import Home from "./components/home";
import Homecontainer from "./containers/homeContainer";
import HeaderContainer from "./containers/headerContainer";

function App() {
  return (
    <div>

      {/* <Clickbuttoncount /> <br /> <br />

      <Hoverclickcount /> */}

      {/* <Home /> */}
      <HeaderContainer />
      <Homecontainer />
      
    </div>
  );
}

export default App;
