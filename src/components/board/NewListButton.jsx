import Icon from '@/components/ui/Icon';



const NewListButton = () => {

   return (
      <li className='list-create'>
         <button type='button'>
            <Icon icon='faPlus' />

            <p>New List</p>
         </button>
      </li>
   );
}



export default NewListButton;