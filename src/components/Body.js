import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router'

const Body = () => {

const routConfig = createBrowserRouter([{
    path : "/",
    element : <Login />
},
{
    path : "/browse",
    element : <Browse />
}
]);

  return (
    <RouterProvider router={routConfig} >
    </RouterProvider>
  )
}

export default Body
