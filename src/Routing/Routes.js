import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Pokemon from '../Pages/Pokemon/Pokemon.jsx'
import Pokemon2 from '../Pages/Pokemon2/Pokemon2.jsx'
import Pokemon3 from '../Pages/Pokemon3/Pokemon3.jsx'
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
      },
      {
        path: "/pokemon2",
        Component: Pokemon2,
      },{
        path: "/pokemon3",
        Component: Pokemon3,
      }
    ],
  },
  {
    path:'*',
    Component:NotFound
  }
];


export default routes