import NavBar from "./Component/NavBar.js"
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer.js"
import './index.css'
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    
    </>
  );
}

export default App;
