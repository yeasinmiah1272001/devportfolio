import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

const router = createBrowserRouter([
      {
            path: "/",
            element: <Root></Root>,
            children: [
                  {
                        path: "/",
                        element: <Home></Home>
                  },
                  {
                        path: "/about",
                        element: <About></About>,
                  },
                  {
                        path: "/experience",
                        element: <Experience></Experience>,
                  },
                  {
                        path: "/projects",
                        element: <Projects></Projects>,
                  },
                  {
                        path: "/contact",
                        element: <Contacts></Contacts>
                  }
            ]
      },
]);

export default router;