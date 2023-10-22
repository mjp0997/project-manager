import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



// Layouts
import MainLayout from '@/layouts/MainLayout';



// Views
import Main from '@/views/Main';
import Board from '@/views/Board';
import Project from '@/views/Project';



// Custom hooks
import { useGetProjects } from '@/hooks/services/useProjects';



const router = createBrowserRouter([
   {
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Main />,
         },
         {
            path: '/projects/:projectId',
            element: <Project />,
         },
         {
            path: '/projects/:projectId/:boardId',
            element: <Board />,
         },
      ]
   }
]);



const MainRouter = () => {

   const { dispatchProjects } = useGetProjects();

   useEffect(() => {
      dispatchProjects();
   }, []);

   return (
      <RouterProvider router={router} />
   );
}



export default MainRouter;