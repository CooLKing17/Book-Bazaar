import {createBrowserRouter} from 'react-router-dom'
import App from './App';
import Error404 from './Component/Error404';
import Body from './Component/Body';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs.js';

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
                        {
                            path:"/aboutus=page",
                            element:<AboutUs/>
                        },
                        {
                            path:"/contactus=page",
                            element:<ContactUs />
                        },

                    ]
                }
            ]
        }
    ]
)

export default AppLayout;