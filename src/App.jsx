import { Provider } from 'react-redux';



// Routers
import MainRouter from '@/routers/MainRouter';



// Store
import { store } from '@/store/store';



const App = () => {

   return (
      <Provider store={store}>
         <MainRouter />
      </Provider>
   );
}



export default App;