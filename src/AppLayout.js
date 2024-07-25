import {createBrowserRouter} from 'react-router-dom'
import App from './App';
import Error404 from './Component/Error404';
import Body from './Component/Body';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs.js';
import InfoPage from './Component/Utilites/InfoPage.js';
import CataBookList from './Component/Utilites/CataBookList.js';
import Cart from './Component/Utilites/Cart.js';
import Sell from './Component/Utilites/Sell.js';
import Donate from './Component/Utilites/Donte.js';
import Profile from './Component/Utilites/Profile.js';
import DonateSell from './Component/Utilites/DonateSellBook.js';

const AppLayout = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            errorElement:<Error404/>,
            children:[
                {
                    path: "/",
                    element:<Body />,
                    children:[
                        

                    ]
                },
                {
                    path:"/aboutus=page",
                    element:<AboutUs/>
                },
                {
                    path:"/contactus=page",
                    element:<ContactUs />
                },
                {
                    path:"/InfoPage",
                    element:<InfoPage />
                },
                {
                    path:"/catalist",
                    element:<CataBookList />
                },
                {
                    path:"/cart=page",
                    element:<Cart />
                },
                {
                    path:"/sell=page",
                    element:<Sell />
                },
                {
                    path:"/donate=page",
                    element:<Donate />
                },
                {
                    path:"/profile=page",
                    element:<Profile />
                },
                {
                    path:"/donatesell=page",
                    element:<DonateSell />
                }
                

            ]
        }
    ]
)

export default AppLayout;