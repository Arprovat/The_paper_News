import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root/Root";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import MainRoot from "../Roots/mainRoot/MainRoot";
import News_details from "../pages/News_details/News_details";
import PrivateRoute from "../Roots/PrivateRoute/PrivateRoute";

const Route = createBrowserRouter([
   {
    path:'/',
    element: <Root/>,
    children:[
        {
            path:'/',
            element:<MainRoot/>,
            loader:()=> fetch('/news.json'),
        },
        {
            path:'/register',
            element:<Register></Register>
        }
        ,{
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/details/:id',
            element:<PrivateRoute> <News_details></News_details></PrivateRoute>
        }
    ]
   }
]
)
export default Route;