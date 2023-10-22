import { createBrowserRouter, RouterProvider } from 'react-router-dom';



// Layouts
import MainLayout from '@/layouts/MainLayout';



// Views
import Main from '@/views/Main';
import Board from '@/views/Board';
import Project from '@/views/Project';



const router = createBrowserRouter([
   {
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Main />,
         },
         {
            path: '/project/:projectId',
            element: <Project />,
         },
         {
            path: '/project/:projectId/:boardId',
            element: <Board />,
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