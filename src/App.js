import { Outlet } from "react-router-dom";
import Heading from "./components/Home/Heading";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Heading/>
      <Outlet/>
      
    </div>
  );
}

export default App;
