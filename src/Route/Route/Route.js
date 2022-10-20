import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import TermsConditions from "../../Pages/SharedPages/TermsConditions/TermsConditions";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const allNews = () => fetch("http://localhost:5000/news");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: allNews,
        element: <Home></Home>,
      },
      { path: "/home", loader: allNews, element: <Home></Home> },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      { path: "signin", element: <Signin></Signin> },
      { path: "signup", element: <Signup></Signup> },
      {
        path: "terms-conditions",
        element: <TermsConditions></TermsConditions>,
      },
    ],
  },
]);
