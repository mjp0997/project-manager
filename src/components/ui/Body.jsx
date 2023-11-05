import PropTypes from 'prop-types';



const Body = ({children}) => {

   return (
      <div className='main-container'>
         <div className='main custom-scrollbar'>
            {children}
         </div>
      </div>
   );
}



Body.propTypes = {
   children: PropTypes.node.isRequired,
}



export default Body;