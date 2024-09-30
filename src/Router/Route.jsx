import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root/Root";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import MainRoot from "../Roots/mainRoot/MainRoot";
import News_details from "../pages/News_details/News_details";

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
            element:<News_details></News_details>
        }
    ]
   }
]
)
export default Route;