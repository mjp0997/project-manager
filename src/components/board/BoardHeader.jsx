import { useEffect, useState } from 'react';



const viewData = {
   minInputWidth: 21,
   maxInputWidth: 42,
}



const BoardHeader = () => {

   const [boardTitle, setBoardTitle] = useState('My board');
   const [inputWidth, setInputWidth] = useState(viewData.minInputWidth);

   useEffect(() => {
      const charCount = boardTitle.length;

      if (charCount > viewData.minInputWidth && charCount <= viewData.maxInputWidth) {
         setInputWidth(charCount);
      } else if (charCount > viewData.maxInputWidth) {
         setInputWidth(viewData.maxInputWidth);
      } else {
         setInputWidth(viewData.minInputWidth);
      }
   }, [boardTitle]);

   const handleTitle = (e) => setBoardTitle(e.target.value);

   return (
      <div className='board-header'>
         <input
            className='board-title'
            name='board-title'
            type='text'
            value={boardTitle}
            onChange={handleTitle}
            style={{width: `${inputWidth}ch`}}
         />
      </div>
   );
}



export default BoardHeader;