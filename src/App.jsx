
import {
   createBrowserRouter, 
   Route, 
  createRoutesFromElements, 
  RouterProvider } 
  from 'react-router-dom'
import Home from './pages/Home'
 import Menu from './pages/Menu'
 import AboutUs from './pages/AboutUs'
 import Reservation from './pages/Reservation'
import Footer from './pages/Footer-pg'
 import NotFound from './pages/NotFound'
 import Rootlayout from './Layouts/RootLayout'


function App() {
  const router = 
createBrowserRouter(createRoutesFromElements(
  <Route element={ <Rootlayout/> }>
    <Route index  element={<Home/>}/>
    <Route path='menu' element={<Menu/>}/>
    <Route path='about us' element={<AboutUs/> }/>
    <Route path='reservation' element={<Reservation/>}>
  
     </Route>

    

    { <Route path='*' element={<NotFound/>}/>  }
     </Route>
))
  return (
    <div>
     <RouterProvider router={router} />
     <div>
      <Footer/>
     </div>
    </div>

        

  )
}

export default App