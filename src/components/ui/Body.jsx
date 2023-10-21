import PropTypes from 'prop-types';



const Body = ({children}) => {

   return (
      <div className='main-container'>
         <div className='main'>
            {/* <div className='main-content'> */}
               {children}
            {/* </div> */}
         </div>
      </div>
   );
}



Body.propTypes = {
   children: PropTypes.node.isRequired,
}



export default Body;