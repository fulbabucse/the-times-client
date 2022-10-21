import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/SharedPages/Profile/Profile";
import TermsConditions from "../../Pages/SharedPages/TermsConditions/TermsConditions";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const allNews = () => fetch("https://the-times-server.vercel.app/news");

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
          fetch(`https://the-times-server.vercel.app/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`https://the-times-server.vercel.app/news/${params.id}`),
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
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
