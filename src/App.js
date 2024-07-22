import NavBar from "./Component/NavBar.js"
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer.js"
import './index.css'
function App() {
  return (
    <div className="hide-verticalscrollbar">
      <NavBar />
      <Outlet />
      <Footer />
    
    </div>
  );
}

export default App;
