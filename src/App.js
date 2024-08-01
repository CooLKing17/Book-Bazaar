import NavBar from "./Component/NavBar.js"
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer.js"
import './index.css'
import { Provider } from "react-redux";
import Store from "./Component/Store/Store.js";
function App() {
  return (
    <Provider store={Store}>
    <div className="hide-verticalscrollbar">
      <NavBar />
      <Outlet />
      <Footer />
    
    </div>
    </Provider>
  );
}

export default App;
