import { Outlet } from 'react-router-dom';



// Components
import Sidebar from '@/components/hud/Sidebar';
import Header from '@/components/hud/Header';



const MainLayout = () => {

   return (
      <div className='body'>
         <Header />

         <Sidebar />

         <main className='body-main'>
            <Outlet />
         </main>
      </div>
   );
}



export default MainLayout;