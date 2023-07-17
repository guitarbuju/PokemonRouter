
import './App.css'
import {RouterProvider } from 'react-router-dom'
import mainRouter from './Routing/mainRouter'


function App() {
 

  return (
    <>
      <RouterProvider router = {mainRouter}/>
    </>
  )
}

export default App
