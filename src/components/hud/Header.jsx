import { Link } from 'react-router-dom';



const Header = () => {

   return (
      <header className='header body-header'>
         <Link to='/' className='header-brand'><p>TODO</p><span>LIST</span></Link>
      </header>
   );
}



export default Header;