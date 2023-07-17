import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Pokemon from '../Pages/Pokemon/Pokemon.jsx'
import NotFound from "../Pages/NotFound/NotFound.jsx";
import MainLayout from "../Components/MainLayout/MainLayout.jsx";

const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/pokemon",
        Component: Pokemon,
      }
    ],
  },
  {
    path:'*',
    Component:NotFound
  }
];


export default routes