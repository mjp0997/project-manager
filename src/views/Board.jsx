


// Components
import List from '@/components/board/List';
import NewListButton from '@/components/board/NewListButton';
import BoardHeader from '@/components/board/BoardHeader';
import Body from '@/components/ui/Body';



const Board = () => {

   return (
      <div className='board-container'>
         <BoardHeader />

         <div className='board-body'>
            <Body>
               <ol className='lists-container'>
                  <List />
                  <List />
                  <List />
                  <List />
                  <List />
                  <List />
                  <List />
                  <NewListButton />
               </ol>
            </Body>
         </div>
      </div>
   );
}



export default Board;