import { createBrowserRouter, RouterProvider } from 'react-router-dom';



// Views
import Main from '@/views/Main';
import Project from '@/views/Project';
import MainLayout from '@/layouts/MainLayout';



const router = createBrowserRouter([
   {
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Main />,
         },
         {
            path: '/project/:id',
            element: <Project />,
         },
      ]
   }
]);



const MainRouter = () => {

   return (
      <RouterProvider router={router} />
   );
}



export default MainRouter;